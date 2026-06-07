import subprocess, json, re, sys
r = subprocess.run(['git', 'ls-tree', 'd52be7d', 'app.js'], capture_output=True, text=True)
parts = r.stdout.strip().split()
if len(parts) < 3:
    print('Could not find blob. Trying HEAD~2')
    r = subprocess.run(['git', 'ls-tree', 'HEAD~2', 'app.js'], capture_output=True, text=True)
    parts = r.stdout.strip().split()
if len(parts) >= 3:
    blob_hash = parts[2]
    r2 = subprocess.run(['git', 'cat-file', '-p', blob_hash], capture_output=True)
    content = r2.stdout.decode('utf-8', errors='replace')
    m = re.search(r'const MATCHES = ([\s\S]*?]);', content)
    if m:
        try:
            matches = json.loads(m.group(1))
            print(f'Good data: {len(matches)} matches')
            for mm in matches[:3]:
                print(f'  {mm.get("date","?")} {mm.get("team","?")} vs {mm.get("opponent","?")}')
            # Write it to file
            with open('app.js', 'w', encoding='utf-8') as f:
                f.write(content)
            print('app.js restored from git')
        except:
            print('JSON parse error')
            print('Saudi in content:', chr(27801)+chr(29399) in content)
    else:
        print('No MATCHES found')
else:
    print('ls-tree parse error:', r.stdout)
