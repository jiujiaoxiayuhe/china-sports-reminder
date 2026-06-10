#!/usr/bin/env python3
import json, urllib.request, urllib.parse, re
from datetime import datetime, date

class SportsDataCollector:
    def __init__(self):
        self.sources = []
    def search_web(self, query, max_r=5):
        results = []
        url = "https://html.duckduckgo.com/html/?q=" + urllib.parse.quote(query)
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"})
            resp = urllib.request.urlopen(req, timeout=15)
            h = resp.read().decode("utf-8", errors="replace")
            for m in re.finditer(r"<a[^>]*class=\"result__a\"[^>]*href=\"([^\"]*)\"[^>]*>(.*?)</a>", h, re.DOTALL):
                t = re.sub(r"<[^>]+>", "", m.group(2)).strip()
                if t and len(t) > 10:
                    results.append({"title": t, "url": m.group(1)})
                    if len(results) >= max_r: break
            self.sources.append("DuckDuckGo")
        except: pass
        return results
    def get_team(self, name):
        try:
            url = "https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=" + urllib.parse.quote(name)
            r = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=10)
            d = json.loads(r.read().decode("utf-8"))
            self.sources.append("TheSportsDB")
            return d.get("teams") or []
        except: return []
    def get_events(self, tid):
        try:
            url = "https://www.thesportsdb.com/api/v1/json/3/eventsnext.php?id=" + str(tid)
            r = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=10)
            d = json.loads(r.read().decode("utf-8"))
            return d.get("events") or []
        except: return []
    def collect(self):
        data = {"sources": [], "matches": [], "search_results": []}
        w = self.search_web("2026中国国家队比赛赛程")
        if w: data["search_results"].extend(w)
        for t in ["China", "China Women", "China U23"]:
            teams = self.get_team(t)
            for team in teams:
                tid = team.get("idTeam")
                if tid:
                    for e in self.get_events(tid):
                        opp = e.get("strEvent", "").replace(team.get("strTeam",""),"").replace(" vs ","").strip()
                        data["matches"].append({
                            "sport": "football", "team": team.get("strTeam","China"),
                            "opponent": opp, "date": e.get("dateEvent",""),
                            "time": e.get("strTime",""), "competition": e.get("strLeague",""),
                            "venue": e.get("strVenue",""), "source": "TheSportsDB"
                        })
        data["sources"] = list(set(self.sources))
        return data

if __name__ == "__main__":
    c = SportsDataCollector()
    d = c.collect()
    print("Sources:", d["sources"])
    print("Matches:", len(d["matches"]))
    for m in d["matches"]:
        print(" ", m.get("date","?"), m.get("team","?"), "vs", m.get("opponent","?"))
    print("Search results:", len(d["search_results"]))
    for r in d["search_results"][:3]:
        print(" ", r.get("title","")[:60])
