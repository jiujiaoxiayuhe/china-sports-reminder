#!/usr/bin/env python3
# Weekly sports schedule update script
# Usage: python scripts/update_matches.py
#   --doubao-input <file> : Load pre-queried match data from DouBao
import json, os, re, sys, urllib.request, urllib.error
from datetime import datetime, date, timezone

DEEPSEEK_API_KEY = os.environ.get('DEEPSEEK_API_KEY', '') or 'YOUR_DEEPSEEK_API_KEY'
API_URL = 'https://api.deepseek.com/v1/chat/completions'
DEEPSEEK_MODEL = 'deepseek-v4-pro'
PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP_JS_PATH = os.path.join(PROJECT_DIR, 'app.js')

def query_deepseek(prompt, max_attempts=2):
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + DEEPSEEK_API_KEY
    }
    payload = {
        'model': DEEPSEEK_MODEL,
        'messages': [
            {'role': 'system', 'content': 'You are a Chinese sports schedule expert. Provide accurate, verifiable match information. Only include matches you are confident about. If uncertain, mark as unconfirmed.'},
            {'role': 'user', 'content': prompt}
        ],
        'temperature': 0.1,
        'max_tokens': 4000
    }
    for attempt in range(max_attempts):
        try:
            data = json.dumps(payload).encode('utf-8')
            req = urllib.request.Request(API_URL, data=data, headers=headers, method='POST')
            with urllib.request.urlopen(req, timeout=30) as resp:
                result = json.loads(resp.read().decode('utf-8'))
                return result['choices'][0]['message']['content']
        except Exception as e:
            print(f'API call failed (attempt {attempt+1}): {e}')
    return ''

def verify_all_matches(matches):
    matches_json = json.dumps(matches, ensure_ascii=False, indent=2)
    prompt = (
        'You are verifying Chinese national team sports schedules.\n'
        'For each match below, check: date accuracy, opponent correctness, '
        'official competition name, venue correctness.\n'
        'If a match is WRONG, explain why and provide the correct info.\n'
        'If correct, mark as VERIFIED.\n\n'
        'Return in JSON format: {"verified": [...], "corrected": [...], "removed": [...]}\n\n'
        + matches_json
    )
    response = query_deepseek(prompt)
    if not response:
        return matches
    try:
        result = json.loads(response)
        verified = result.get('verified', [])
        corrected = result.get('corrected', [])
        return verified + corrected
    except json.JSONDecodeError:
        return matches

def load_current_matches():
    with open(APP_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    match = re.search(r'const MATCHES = (\[[\s\S]*?\]);', content)
    if not match:
        return []
    try:
        return json.loads(match.group(1))
    except json.JSONDecodeError:
        return []

def update_app_js(new_matches):
    # SAFETY: Never write empty data
    if not new_matches or len(new_matches) == 0:
        print('SAFETY: Refusing to write 0 matches to app.js')
        return False
    for i, m in enumerate(new_matches):
        m['id'] = i + 1
    with open(APP_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    new_json = json.dumps(new_matches, ensure_ascii=False, indent=2)
    content = re.sub(r'const MATCHES = \[[\s\S]*?\];', f'const MATCHES = {new_json};', content, flags=re.DOTALL)
    with open(APP_JS_PATH, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Updated app.js: {len(new_matches)} matches')
    return True

def push_to_github():
    os.chdir(PROJECT_DIR)
    os.system('git add -A')
    os.system(f'git commit -m "weekly update: {date.today().isoformat()}"')
    os.system('git push origin master')
    print('Pushed to GitHub')

def main():
    print(f'=== Weekly Schedule Update - {date.today().isoformat()} ===')
    current = load_current_matches()
    print(f'Current matches in app.js: {len(current)}')

    raw = []
    if len(sys.argv) > 2 and sys.argv[1] == '--doubao-input':
        with open(sys.argv[2], 'r', encoding='utf-8') as f:
            raw = json.load(f)
        print(f'Loaded DouBao input: {len(raw)} matches')
    else:
        print('Phase 1: Querying DeepSeek for current schedules...')
        prompt = (
            'List all confirmed Chinese national team matches from June to October 2026.\n'
            'Include these sports: football, volleyball, basketball, table tennis, badminton, snooker, athletics, swimming.\n'
            'For each match provide: sport, team, opponent, date (YYYY-MM-DD), time (HH:MM), competition name, venue, isHome (true/false).\n'
            'ONLY include matches you are confident exist. Mark uncertain matches with "unconfirmed": true.\n'
            'Return as a JSON array.\n'
            'Example: [{"sport": "football", "team": "China Men", "opponent": "Thailand", '
            '"date": "2026-06-09", "time": "20:00", "competition": "International Friendly", '
            '"venue": "Jinhua, Zhejiang", "isHome": true}]'
        )
        resp = query_deepseek(prompt)
        if not resp:
            print('Query failed, keeping existing data')
            return
        try:
            json_match = re.search(r'\[.*?\]', resp, re.DOTALL)
            raw = json.loads(json_match.group()) if json_match else []
        except:
            print('Failed to parse response')
            return

    print(f'Raw data from API: {len(raw)} matches')

    # CRITICAL SAFETY: Never overwrite with 0 matches
    if not raw or len(raw) == 0:
        print('!!! SAFETY: API returned 0 matches. Keeping existing data unchanged.')
        return

    print('Phase 2: Verifying with DeepSeek...')
    verified = verify_all_matches(raw)

    if not verified or len(verified) == 0:
        print('!!! SAFETY: Verification returned 0 matches. Keeping existing data unchanged.')
        return

    print('Phase 3: Updating website...')
    if update_app_js(verified):
        print('Phase 4: Pushing to GitHub...')
        push_to_github()
    print('=== Update Complete ===')

if __name__ == '__main__':
    main()
