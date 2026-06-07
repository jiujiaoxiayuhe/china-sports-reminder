#!/usr/bin/env python3
# 每周赛程更新脚本
# 
# 工作流:
# 1. 从外部获取比赛数据（手动整理 / 未来豆包API）
# 2. DeepSeek验证数据准确性
# 3. 更新app.js
# 4. 推送到GitHub Pages
#
# 用法:
#   手动输入模式: python scripts/update_matches.py [input.json]
#   未来豆包模式: python scripts/update_matches.py --doubao-input <file>
#
# 注意: DeepSeek知识截止于2025年，无法直接查询2026赛程。
#       比赛数据需要通过其他渠道获取后传入本脚本验证。

import json, os, re, sys, urllib.request, urllib.error
from datetime import datetime, date

DEEPSEEK_API_KEY = os.environ.get('DEEPSEEK_API_KEY', '') or 'YOUR_DEEPSEEK_API_KEY'
API_URL = 'https://api.deepseek.com/v1/chat/completions'
MODEL = 'deepseek-chat'
PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP_JS_PATH = os.path.join(PROJECT_DIR, 'app.js')

def query_deepseek(system_prompt, user_prompt, max_tokens=4000):
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + DEEPSEEK_API_KEY
    }
    payload = {
        'model': MODEL,
        'messages': [
            {'role': 'system', 'content': system_prompt},
            {'role': 'user', 'content': user_prompt}
        ],
        'max_tokens': max_tokens,
        'temperature': 0.1
    }
    for attempt in range(3):
        try:
            data = json.dumps(payload).encode('utf-8')
            req = urllib.request.Request(API_URL, data=data, headers=headers, method='POST')
            with urllib.request.urlopen(req, timeout=60) as resp:
                return json.loads(resp.read().decode('utf-8'))['choices'][0]['message']['content']
        except Exception as e:
            print(f'  API调用失败(第{attempt+1}次): {e}')
    return ''

def verify_with_deepseek(matches):
    """用DeepSeek验证比赛数据的合理性"""
    if not matches or len(matches) == 0:
        return [], True

    matches_json = json.dumps(matches, ensure_ascii=False, indent=2)
    system = (
        '你是一个体育数据验证专家。检查每场比赛数据是否合理。\n'
        '对于每场比赛，检查：\n'
        '1. 日期格式是否正确\n'
        '2. 对手队伍名称是否合理（不要过于笼统或明显错误）\n'
        '3. 赛事名称是否标准\n'
        '4. 场馆名称是否合理\n\n'
        '对于每场比赛，用"可信"或"可疑"标记。\n'
        '如果整个数据集合明显不可信，输出{"valid": false, "reason": "..."}\n'
        '输出JSON格式。'
    )
    user = (
        '验证以下中国国家队比赛数据，标记可疑条目：\n\n'
        + matches_json + '\n\n'
        '输出格式：{"valid": true/false, "reason": "原因(如果无效)", '
        '"verified": [通过验证的比赛], "flagged": [{"index": 0, "reason": "..."}]}'
    )
    resp = query_deepseek(system, user)
    if not resp:
        return matches, True

    try:
        result = json.loads(resp)
        if result.get('valid') == False:
            print(f'  DeepSeek验证失败: {result.get("reason", "未知原因")}')
            return matches, False
        verified = result.get('verified', [])
        flagged = result.get('flagged', [])
        if flagged:
            print(f'  DeepSeek标记了 {len(flagged)} 个可疑条目:')
            for f in flagged:
                print(f'    - [{f.get("index")}] {f.get("reason", "")}')
        if verified:
            return verified, True
        return matches, True
    except json.JSONDecodeError:
        return matches, True

def load_current_matches():
    with open(APP_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    # MATCHES array may or may not end with semicolon
    match = re.search(r'const MATCHES = (\[[\s\S]*?\])\s*;?\s*\n', content)
    if not match:
        return []
    try:
        return json.loads(match.group(1))
    except json.JSONDecodeError:
        return []

def update_app_js(new_matches):
    if not new_matches or len(new_matches) == 0:
        print('  [!] SAFETY: 数据为空，禁止写入')
        return False

    for i, m in enumerate(new_matches):
        m['id'] = i + 1

    with open(APP_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    new_json = json.dumps(new_matches, ensure_ascii=False, indent=2)
    content = re.sub(
        r'const MATCHES = \[[\s\S]*?\]\s*;?\s*\n',
        f'const MATCHES = {new_json};\n',
        content,
        flags=re.DOTALL
    )

    with open(APP_JS_PATH, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'  [OK] app.js已更新: {len(new_matches)} 场比赛')
    return True

def push_to_github():
    os.chdir(PROJECT_DIR)
    os.system('git add -A')
    os.system(f'git commit -m "weekly update: {date.today().isoformat()}"')
    ret = os.system('git push origin master')
    if ret == 0:
        print('  [OK] 已推送到GitHub')
    else:
        print('  [*] 推送可能需要手动处理')

def main():
    print(f'=== 每周赛程更新 - {date.today().isoformat()} ===')
    print()

    current = load_current_matches()
    print(f'当前app.js中: {len(current)} 场比赛')

    if len(current) == 0:
        print('[!] 警告: app.js中无比赛数据')
        print('[!] 请先恢复正确的app.js后再运行')

    input_matches = None
    input_file = None

    # Parse arguments
    if len(sys.argv) > 2 and sys.argv[1] == '--doubao-input':
        input_file = sys.argv[2]
    elif len(sys.argv) > 1 and sys.argv[1] != '--doubao-input':
        input_file = sys.argv[1]

    if input_file:
        try:
            with open(input_file, 'r', encoding='utf-8') as f:
                input_matches = json.load(f)
            print(f'已加载输入文件: {input_file} ({len(input_matches)} 条)')
        except Exception as e:
            print(f'[!] 加载输入文件失败: {e}')

    # If no input provided, show usage
    if not input_matches:
        print()
        print('用法:')
        print('  python scripts/update_matches.py <data.json>')
        print('    - 从JSON文件导入比赛数据，经DeepSeek验证后更新')
        print()
        print('  python scripts/update_matches.py --doubao-input <file>')
        print('    - 传入豆包查询结果（未来支持）')
        print()
        print('输入JSON格式:')
        print('  [{"sport": "football", "team": "中国男足", "opponent": "泰国",')
        print('    "date": "2026-06-09", "time": "20:00", "competition": "国际友谊赛",')
        print('    "venue": "浙江金华", "isHome": true}]')
        print()
        print('保留现有数据不变')
        return

    # Verify with DeepSeek
    print()
    print('Phase 1: DeepSeek验证数据...')
    verified, is_valid = verify_with_deepseek(input_matches)

    if not is_valid:
        print('[!] 数据验证未通过，保留现有数据不变')
        return

    if not verified:
        print('[!] 验证后无数据，保留现有数据不变')
        return

    # Update
    print('Phase 2: 更新app.js...')
    if update_app_js(verified):
        print('Phase 3: 推送到GitHub...')
        push_to_github()

    print()
    print(f'=== 更新完成 ===')
    print(f'访问: https://jiujiaoxiayuhe.github.io/china-sports-reminder/')

if __name__ == '__main__':
    main()
