#!/usr/bin/env python3
import json, os, re, sys, urllib.request
from datetime import date

ARK_KEY = os.environ.get("ARK_API_KEY")
DS_KEY = os.environ.get("DEEPSEEK_API_KEY")
EP = os.environ.get("DOUBAO_ENDPOINT")
if not ARK_KEY or not DS_KEY or not EP:
    print("Error: Set ARK_API_KEY, DEEPSEEK_API_KEY, DOUBAO_ENDPOINT")
    sys.exit(1)

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
            with urllib.request.urlopen(r, timeout=90) as resp:
                return json.loads(resp.read().decode("utf-8"))["choices"][0]["message"]["content"]
        except Exception as e:
            print(f"  [{provider}] fail({a+1}): {e}")
    return ""

def verify_and_complete(provider, matches):
    if not matches: return [], True
    data = json.dumps(matches, ensure_ascii=False, indent=2)
    name = "DeepSeek" if provider == "deepseek" else "Doubao"
    system = (
        "You are a Chinese sports data expert. Tasks:\n"
        "1. Verify the provided match data (check dates, opponents, venues)\n"
        "2. IDENTIFY any MISSING Chinese national team matches in the same period\n"
        "3. Add any confirmed missing matches to the list\n\n"
        "Sports: football, volleyball, basketball, table tennis, badminton, snooker, athletics, swimming\n"
        "Only add matches you are confident exist. Mark uncertain with 'unconfirmed': true.\n"
        "IMPORTANT: 2026 World Cup Asian Qualifiers Round 3 ended in 2025.\n\n"
        "Return JSON: {\"matches\": [complete list with verified + newly added]}"
    )
    user = (
        "Current Chinese national team matches:\n\n" + data + "\n\n"
        "1. Verify each match\n"
        "2. Add any missing matches for June-October 2026\n"
        "3. Return the COMPLETE list\n\n"
        "Each match needs: sport, team, opponent, date(YYYY-MM-DD), time(HH:MM), competition, venue, isHome"
    )
    resp = ai(provider, system, user)
    if not resp:
        print(f"  {name} no response, using original")
        return matches, True
    try:
        r = json.loads(resp)
        result = r.get("matches", [])
        if result:
            diff = len(result) - len(matches)
            if diff > 0: print(f"  {name} added {diff} new match(es)")
            elif diff < 0: print(f"  {name} removed {-diff} match(es)")
            return result, True
        return matches, True
    except json.JSONDecodeError:
        print(f"  {name} response not JSON, using original")
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
    os.system("git commit -m " + '"weekly update: ' + str(date.today().isoformat()) + '"')
    import time
    r = os.system("git -c http.version=HTTP/1.1 push origin master")
    if r != 0:
        print("  [*] Push failed, retrying in 5s...")
        time.sleep(5)
        r = os.system("git -c http.version=HTTP/1.1 push origin master")
    if r == 0: print("  [OK] pushed")
    else: print("  [!] Push failed after retry")

def main():
    print("=== Weekly Update ===")
    print("Date: " + date.today().isoformat())
    if len(sys.argv) < 2:
        print("Usage: python update_matches.py data.json"); return
    try:
        with open(sys.argv[1], "r", encoding="utf-8") as f: data = json.load(f)
    except Exception as e: print("Error: " + str(e)); return
    if not data: print("Empty, skip"); return
    print("Input: " + str(len(data)) + " matches")
    print("Phase 1: DeepSeek verify + complete...")
    v1, ok1 = verify_and_complete("deepseek", data)
    print("  After DS: " + str(len(v1)) + " matches")
    print("Phase 2: Doubao verify...")
    v2, ok2 = verify_and_complete("doubao", v1)
    print("  After DB: " + str(len(v2)) + " matches")
    print("Phase 3: Updating app.js...")
    if update(v2):
        print("Phase 4: Pushing to GitHub...")
        push()
    print("Done: https://jiujiaoxiayuhe.github.io/china-sports-reminder/")

if __name__ == "__main__":
    main()
