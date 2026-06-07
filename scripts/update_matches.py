#!/usr/bin/env python3
import json, os, re, sys, urllib.request
from datetime import date

ARK_KEY = os.environ.get("ARK_API_KEY", "YOUR_ARK_API_KEY")
DS_KEY = os.environ.get("DEEPSEEK_API_KEY", "YOUR_DEEPSEEK_API_KEY")
EP = os.environ.get("DOUBAO_ENDPOINT", "YOUR_DOUBAO_ENDPOINT")
DU_URL = "https://ark.cn-beijing.volces.com/api/v3/chat/completions"
DS_URL = "https://api.deepseek.com/v1/chat/completions"
PROJ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(PROJ, "app.js")

def ai(provider, system, user, mt=4000):
    url = DU_URL if provider == "doubao" else DS_URL
    key = ARK_KEY if provider == "doubao" else DS_KEY
    model = EP if provider == "doubao" else "deepseek-chat"
    headers = {"Content-Type": "application/json", "Authorization": "Bearer " + key}
    payload = {"model": model, "messages": [{"role": "system", "content": system}, {"role": "user", "content": user}], "max_tokens": mt, "temperature": 0.1}
    for a in range(3):
        try:
            d = json.dumps(payload).encode("utf-8")
            r = urllib.request.Request(url, data=d, headers=headers, method="POST")
            with urllib.request.urlopen(r, timeout=60) as resp:
                return json.loads(resp.read().decode("utf-8"))["choices"][0]["message"]["content"]
        except Exception as e:
            print(f"  [{provider}] fail({a+1}): {e}")
    return ""

def verify(provider, matches):
    if not matches: return matches, True
    data = json.dumps(matches, ensure_ascii=False, indent=2)
    name = "DeepSeek" if provider == "deepseek" else "Doubao"
    s = "You are a Chinese sports data validator. Check match data for errors."
    u = "Verify these Chinese national team matches. Output JSON with valid(bool) and issues(list):\n" + data
    resp = ai(provider, s, u)
    if not resp: return matches, True
    try:
        r = json.loads(resp)
        if r.get("valid") == False:
            print(f"  {name} flagged: {r.get('issues', [])}")
        return matches, r.get("valid", True)
    except:
        return matches, True

def load():
    with open(APP, "r", encoding="utf-8") as f: return f.read()

def update(new):
    if not new: print("  [!] empty, skip"); return False
    for i, m in enumerate(new): m["id"] = i + 1
    c = load()
    nj = json.dumps(new, ensure_ascii=False, indent=2)
    c = re.sub(r"const MATCHES = \[[\s\S]*?\]\s*;?\s*\n", f"const MATCHES = {nj};\n", c, flags=re.DOTALL)
    with open(APP, "w", encoding="utf-8") as f: f.write(c)
    print(f"  [OK] {len(new)} matches"); return True

def push():
    os.chdir(PROJ)
    os.system("git add -A")
    os.system(f'git commit -m "weekly update: {date.today().isoformat()}"')
    os.system("git push origin master")
    print("  [OK] pushed")

def main():
    print("=== Weekly Update ===")
    print(f"Date: {date.today().isoformat()}")
    if len(sys.argv) < 2:
        print("Usage: python update_matches.py data.json")
        print()
        print("data.json format:")
        print('[{"sport": "football", "team": "China", "opponent": "Thailand",')
        print('  "date": "2026-06-09", "time": "20:00",')
        print('  "competition": "Friendly", "venue": "Jinhua", "isHome": true}]')
        return
    try:
        with open(sys.argv[1], "r", encoding="utf-8") as f: data = json.load(f)
    except Exception as e: print(f"Error: {e}"); return
    if not data: print("Empty, skip"); return
    print(f"Input: {len(data)} matches")
    print("Phase 1: DeepSeek verifying...")
    v1, ok1 = verify("deepseek", data)
    if not ok1: print("  DS has concerns, continuing...")
    print("Phase 2: Doubao verifying...")
    v2, ok2 = verify("doubao", v1)
    print("Phase 3: Updating app.js...")
    if update(v2):
        print("Phase 4: Pushing to GitHub...")
        push()
    print(f"Done: https://jiujiaoxiayuhe.github.io/china-sports-reminder/")

if __name__ == "__main__":
    main()
