const MATCHES = [
  { id: 1, sport: "football", sportName: "足球", icon: "⚽", team: "中国男足", opponent: "日本", competition: "2026世界杯亚洲区预选赛 18强赛", date: "2026-06-08", time: "19:35", venue: "沈阳奥体中心", isHome: true },
  { id: 2, sport: "football", sportName: "足球", icon: "⚽", team: "中国男足", opponent: "澳大利亚", competition: "2026世界杯亚洲区预选赛 18强赛", date: "2026-06-13", time: "20:00", venue: "悉尼安联体育场", isHome: false },
  { id: 3, sport: "football", sportName: "足球", icon: "⚽", team: "中国女足", opponent: "韩国女足", competition: "2026女足亚洲杯小组赛", date: "2026-07-02", time: "16:00", venue: "成都凤凰山体育公园", isHome: true },
  { id: 4, sport: "football", sportName: "足球", icon: "⚽", team: "中国女足", opponent: "泰国女足", competition: "2026女足亚洲杯小组赛", date: "2026-07-06", time: "19:00", venue: "成都凤凰山体育公园", isHome: true },
  { id: 5, sport: "basketball", sportName: "篮球", icon: "🏀", team: "中国男篮", opponent: "菲律宾", competition: "2026 FIBA亚洲杯小组赛", date: "2026-06-20", time: "20:30", venue: "深圳大运中心体育馆", isHome: true },
  { id: 6, sport: "basketball", sportName: "篮球", icon: "🏀", team: "中国女篮", opponent: "日本女篮", competition: "2026 FIBA女篮亚洲杯半决赛", date: "2026-06-25", time: "18:00", venue: "北京五棵松体育馆", isHome: true },
  { id: 7, sport: "basketball", sportName: "篮球", icon: "🏀", team: "中国男篮", opponent: "伊朗", competition: "2026 FIBA亚洲杯小组赛", date: "2026-06-23", time: "17:00", venue: "深圳大运中心体育馆", isHome: true },
  { id: 8, sport: "volleyball", sportName: "排球", icon: "🏐", team: "中国女排", opponent: "巴西", competition: "2026世界女排联赛 分站赛", date: "2026-06-11", time: "19:30", venue: "宁波北仑体艺中心", isHome: true },
  { id: 9, sport: "volleyball", sportName: "排球", icon: "🏐", team: "中国女排", opponent: "美国", competition: "2026世界女排联赛 分站赛", date: "2026-06-15", time: "15:00", venue: "宁波北仑体艺中心", isHome: true },
  { id: 10, sport: "volleyball", sportName: "排球", icon: "🏐", team: "中国女排", opponent: "意大利", competition: "2026世界女排联赛 分站赛", date: "2026-06-18", time: "19:30", venue: "宁波北仑体艺中心", isHome: true },
  { id: 11, sport: "volleyball", sportName: "排球", icon: "🏐", team: "中国男排", opponent: "日本", competition: "2026世界男排联赛 分站赛", date: "2026-07-10", time: "18:00", venue: "东京体育馆", isHome: false },
  { id: 12, sport: "tabletennis", sportName: "乒乓球", icon: "🏓", team: "中国乒乓球队", opponent: "日本队", competition: "2026世乒赛团体赛 决赛", date: "2026-07-05", time: "19:00", venue: "上海体育馆", isHome: true },
  { id: 13, sport: "tabletennis", sportName: "乒乓球", icon: "🏓", team: "中国乒乓球队", opponent: "德国队", competition: "2026世乒赛团体赛 半决赛", date: "2026-07-03", time: "14:00", venue: "上海体育馆", isHome: true },
  { id: 14, sport: "badminton", sportName: "羽毛球", icon: "🏸", team: "中国羽毛球队", opponent: "印尼队", competition: "2026汤姆斯杯 1/4决赛", date: "2026-06-22", time: "13:00", venue: "广州天河体育馆", isHome: true },
  { id: 15, sport: "badminton", sportName: "羽毛球", icon: "🏸", team: "中国羽毛球队", opponent: "韩国队", competition: "2026尤伯杯 半决赛", date: "2026-06-26", time: "18:00", venue: "广州天河体育馆", isHome: true },
  { id: 16, sport: "swimming", sportName: "游泳", icon: "🏊", team: "中国游泳队", opponent: "", competition: "2026世界游泳锦标赛", date: "2026-07-14", time: "09:00", venue: "杭州奥体中心游泳馆", isHome: true },
  { id: 17, sport: "athletics", sportName: "田径", icon: "🏃", team: "中国田径队", opponent: "", competition: "2026亚洲田径锦标赛", date: "2026-07-20", time: "08:30", venue: "武汉体育中心", isHome: true },
  { id: 101, sport: "football", sportName: "足球", icon: "⚽", team: "中国男足", opponent: "沙特阿拉伯", competition: "2026世界杯亚洲区预选赛", date: "2026-05-25", time: "19:35", venue: "大连梭鱼湾足球场", isHome: true, score: "2-1", result: "win" },
  { id: 102, sport: "volleyball", sportName: "排球", icon: "🏐", team: "中国女排", opponent: "土耳其", competition: "2026世界女排联赛", date: "2026-05-28", time: "19:30", venue: "宁波北仑体艺中心", isHome: true, score: "3-0", result: "win" },
  { id: 103, sport: "basketball", sportName: "篮球", icon: "🏀", team: "中国女篮", opponent: "澳大利亚女篮", competition: "热身赛", date: "2026-05-30", time: "19:00", venue: "北京五棵松体育馆", isHome: true, score: "72-68", result: "win" },
  { id: 104, sport: "football", sportName: "足球", icon: "⚽", team: "中国女足", opponent: "朝鲜女足", competition: "友谊赛", date: "2026-05-22", time: "15:30", venue: "苏州奥体中心", isHome: true, score: "3-0", result: "win" }
,

  // ===== U23 / U20 / U17 足球 =====
  { id: 201, sport: "football", sportName: "足球", icon: "⚽", team: "中国U23", opponent: "韩国U23", competition: "2026 U23亚洲杯 小组赛", date: "2026-06-10", time: "16:00", venue: "多哈体育城", isHome: false },
  { id: 202, sport: "football", sportName: "足球", icon: "⚽", team: "中国U23", opponent: "越南U23", competition: "2026 U23亚洲杯 小组赛", date: "2026-06-13", time: "18:00", venue: "多哈体育城", isHome: false },
  { id: 203, sport: "football", sportName: "足球", icon: "⚽", team: "中国U23", opponent: "阿联酋U23", competition: "2026 U23亚洲杯 小组赛", date: "2026-06-16", time: "16:00", venue: "多哈体育城", isHome: false },
  { id: 204, sport: "football", sportName: "足球", icon: "⚽", team: "中国U20", opponent: "沙特U20", competition: "2026 U20亚洲杯 小组赛", date: "2026-07-08", time: "17:00", venue: "深圳青少年足球训练基地", isHome: true },
  { id: 205, sport: "football", sportName: "足球", icon: "⚽", team: "中国U20", opponent: "卡塔尔U20", competition: "2026 U20亚洲杯 小组赛", date: "2026-07-11", time: "19:30", venue: "深圳青少年足球训练基地", isHome: true },
  { id: 206, sport: "football", sportName: "足球", icon: "⚽", team: "中国U20", opponent: "吉尔吉斯U20", competition: "2026 U20亚洲杯 小组赛", date: "2026-07-14", time: "17:00", venue: "深圳青少年足球训练基地", isHome: true },
  { id: 207, sport: "football", sportName: "足球", icon: "⚽", team: "中国U17", opponent: "日本U17", competition: "2026 U17亚洲杯 小组赛", date: "2026-07-20", time: "20:00", venue: "泰国曼谷", isHome: false },
  { id: 208, sport: "football", sportName: "足球", icon: "⚽", team: "中国U17", opponent: "澳大利亚U17", competition: "2026 U17亚洲杯 小组赛", date: "2026-07-23", time: "17:00", venue: "泰国曼谷", isHome: false },
  { id: 209, sport: "football", sportName: "足球", icon: "⚽", team: "中国女足U20", opponent: "朝鲜女足U20", competition: "2026 女足U20亚洲杯 小组赛", date: "2026-07-05", time: "15:00", venue: "昆明海埂基地", isHome: true },
  { id: 210, sport: "football", sportName: "足球", icon: "⚽", team: "中国女足U17", opponent: "日本女足U17", competition: "2026 女足U17亚洲杯 小组赛", date: "2026-07-15", time: "16:30", venue: "苏州太湖足球基地", isHome: true },
  // ===== U系列 篮球 =====
  { id: 301, sport: "basketball", sportName: "篮球", icon: "🏀", team: "中国U19男篮", opponent: "美国U19", competition: "2026 U19男篮世界杯 小组赛", date: "2026-06-28", time: "23:30", venue: "瑞士洛桑", isHome: false },
  { id: 302, sport: "basketball", sportName: "篮球", icon: "🏀", team: "中国U19男篮", opponent: "法国U19", competition: "2026 U19男篮世界杯 小组赛", date: "2026-06-30", time: "18:00", venue: "瑞士洛桑", isHome: false },
  { id: 303, sport: "basketball", sportName: "篮球", icon: "🏀", team: "中国U19男篮", opponent: "马里U19", competition: "2026 U19男篮世界杯 小组赛", date: "2026-07-01", time: "20:30", venue: "瑞士洛桑", isHome: false },
  { id: 304, sport: "basketball", sportName: "篮球", icon: "🏀", team: "中国U17男篮", opponent: "菲律宾U17", competition: "2026 U17男篮亚洲杯 小组赛", date: "2026-07-12", time: "19:00", venue: "深圳大运中心", isHome: true },
  { id: 305, sport: "basketball", sportName: "篮球", icon: "🏀", team: "中国U18女篮", opponent: "韩国U18", competition: "2026 U18女篮亚洲杯 小组赛", date: "2026-06-24", time: "17:30", venue: "成都凤凰山体育公园", isHome: true },
  { id: 306, sport: "basketball", sportName: "篮球", icon: "🏀", team: "中国U18女篮", opponent: "日本U18", competition: "2026 U18女篮亚洲杯 半决赛", date: "2026-06-27", time: "19:00", venue: "成都凤凰山体育公园", isHome: true },
  { id: 307, sport: "basketball", sportName: "篮球", icon: "🏀", team: "中国U16男篮", opponent: "澳大利亚U16", competition: "2026 U16男篮亚锦赛 小组赛", date: "2026-07-18", time: "18:30", venue: "多哈", isHome: false },
  // ===== U系列 排球 =====
  { id: 401, sport: "volleyball", sportName: "排球", icon: "🏐", team: "中国U21女排", opponent: "意大利U21", competition: "2026 U21女排世锦赛 小组赛", date: "2026-07-08", time: "20:00", venue: "墨西哥蒙特雷", isHome: false },
  { id: 402, sport: "volleyball", sportName: "排球", icon: "🏐", team: "中国U21女排", opponent: "巴西U21", competition: "2026 U21女排世锦赛 小组赛", date: "2026-07-10", time: "17:00", venue: "墨西哥蒙特雷", isHome: false },
  { id: 403, sport: "volleyball", sportName: "排球", icon: "🏐", team: "中国U19男排", opponent: "伊朗U19", competition: "2026 U19男排世锦赛 小组赛", date: "2026-06-25", time: "22:00", venue: "巴林麦纳麦", isHome: false },
  { id: 404, sport: "volleyball", sportName: "排球", icon: "🏐", team: "中国U19男排", opponent: "波兰U19", competition: "2026 U19男排世锦赛 小组赛", date: "2026-06-27", time: "20:00", venue: "巴林麦纳麦", isHome: false },
  { id: 405, sport: "volleyball", sportName: "排球", icon: "🏐", team: "中国U20女排", opponent: "泰国U20", competition: "2026 U20女排亚锦赛 小组赛", date: "2026-07-02", time: "16:00", venue: "宁波北仑体艺中心", isHome: true },
  // ===== U系列 乒乓球 =====
  { id: 501, sport: "tabletennis", sportName: "乒乓球", icon: "🏓", team: "中国U19乒乓", opponent: "韩国U19", competition: "2026 亚青赛 团体决赛", date: "2026-06-30", time: "14:00", venue: "上海体育馆", isHome: true },
  { id: 502, sport: "tabletennis", sportName: "乒乓球", icon: "🏓", team: "中国U15乒乓", opponent: "日本U15", competition: "2026 亚青赛 U15组决赛", date: "2026-06-28", time: "10:00", venue: "上海体育馆", isHome: true },
  { id: 503, sport: "tabletennis", sportName: "乒乓球", icon: "🏓", team: "中国U19乒乓", opponent: "日本U19", competition: "WTT青少年常规赛 决赛", date: "2026-07-18", time: "16:00", venue: "成都乒校", isHome: true },
  // ===== U系列 羽毛球 =====
  { id: 601, sport: "badminton", sportName: "羽毛球", icon: "🏸", team: "中国U19羽球", opponent: "马来西亚U19", competition: "2026 亚青赛 团体半决赛", date: "2026-07-09", time: "14:00", venue: "武汉体育中心", isHome: true },
  { id: 602, sport: "badminton", sportName: "羽毛球", icon: "🏸", team: "中国U19羽球", opponent: "印尼U19", competition: "2026 亚青赛 团体决赛", date: "2026-07-10", time: "14:00", venue: "武汉体育中心", isHome: true },
  { id: 603, sport: "badminton", sportName: "羽毛球", icon: "🏸", team: "中国U17羽球", opponent: "日本U17", competition: "2026 U17亚青赛 团体赛", date: "2026-06-20", time: "13:00", venue: "广州天河体育馆", isHome: true },
  // ===== U系列 游泳 / 田径 =====
  { id: 701, sport: "swimming", sportName: "游泳", icon: "🏊", team: "中国U18游泳队", opponent: "", competition: "2026 世青赛游泳项目", date: "2026-07-22", time: "09:00", venue: "杭州奥体中心游泳馆", isHome: true },
  { id: 702, sport: "swimming", sportName: "游泳", icon: "🏊", team: "中国U15游泳队", opponent: "", competition: "2026 U15游泳公开赛", date: "2026-06-16", time: "09:30", venue: "武汉体育中心游泳馆", isHome: true },
  { id: 801, sport: "athletics", sportName: "田径", icon: "🏃", team: "中国U20田径队", opponent: "", competition: "2026 亚青赛田径项目", date: "2026-07-26", time: "08:00", venue: "武汉体育中心", isHome: true },
  { id: 802, sport: "athletics", sportName: "田径", icon: "🏃", team: "中国U18田径队", opponent: "", competition: "2026 U18田径锦标赛", date: "2026-06-12", time: "08:30", venue: "沈阳奥体中心", isHome: true },

];

const SPORTS = [
  { key: "all", name: "全部", icon: "" },
  { key: "football", name: "足球", icon: "⚽" },
  { key: "basketball", name: "篮球", icon: "🏀" },
  { key: "volleyball", name: "排球", icon: "🏐" },
  { key: "tabletennis", name: "乒乓", icon: "🏓" },
  { key: "badminton", name: "羽毛球", icon: "🏸" },
  { key: "swimming", name: "游泳", icon: "🏊" },
  { key: "athletics", name: "田径", icon: "🏃" }
];
let currentFilter = "all";
let reminders = JSON.parse(localStorage.getItem("matchReminders") || "{}");
let toastTimer = null;

function isPast(m) { return new Date(m.date + "T" + m.time) < new Date(); }
function isUpcoming(m) { return !isPast(m); }

function getFiltered() {
  let list = currentFilter === "all" ? MATCHES : MATCHES.filter(m => m.sport === currentFilter);
  const upcoming = list.filter(isUpcoming).sort((a, b) => new Date(a.date + "T" + a.time) - new Date(b.date + "T" + b.time));
  const past = list.filter(isPast).sort((a, b) => new Date(b.date + "T" + b.time) - new Date(a.date + "T" + a.time));
  return { upcoming, past, all: [...upcoming, ...past] };
}

function countdownText(m) {
  const diff = new Date(m.date + "T" + m.time) - new Date();
  if (diff <= 0) return "进行中";
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  if (days > 0) return "倒计时 " + days + " 天";
  if (hours > 0) return "倒计时 " + hours + " 小时 " + mins + " 分";
  return "倒计时 " + mins + " 分钟";
}

function renderFilterTabs() {
  var html = "";
  SPORTS.forEach(function(s) {
    html += '<button class="filter-tab' + (s.key === currentFilter ? ' active' : '') + '" onclick="setFilter(\'' + s.key + '\')">' + (s.icon ? s.icon + ' ' : '') + s.name + '</button>';
  });
  document.getElementById("filterTabs").innerHTML = html;
}

function setFilter(key) {
  currentFilter = key;
  renderFilterTabs();
  renderAll();
}

function renderNextMatch(upcoming) {
  var banner = document.getElementById("nextMatchBanner");
  if (upcoming.length === 0) {
    banner.innerHTML = '<div class="no-upcoming">暂无近期比赛</div>';
    return;
  }
  var m = upcoming[0];
  var diff = new Date(m.date + "T" + m.time) - new Date();
  var days = Math.floor(diff / 86400000);
  var hours = Math.floor((diff % 86400000) / 3600000);
  banner.innerHTML =
    '<div class="next-match-label">即将开始</div>' +
    '<div class="next-match-teams">' + m.icon + ' ' + m.team + ' <span style="color:#8E8E93;font-weight:400;">vs</span> ' + m.opponent + '</div>' +
    '<div class="next-match-info">' + m.competition + ' · ' + m.date + ' ' + m.time + '</div>' +
    '<div class="next-match-countdown">' +
    '<div class="countdown-item"><div class="countdown-num">' + days + '</div><div class="countdown-label">天</div></div>' +
    '<div class="countdown-item"><div class="countdown-num">' + hours + '</div><div class="countdown-label">小时</div></div>' +
    '</div>';
}

function renderMatchCard(m, isP) {
  var isReminded = !!reminders[m.id];
  var dateObj = new Date(m.date + "T" + m.time);
  var month = dateObj.getMonth() + 1;
  var day = dateObj.getDate();
  var weekday = ["周日","周一","周二","周三","周四","周五","周六"][dateObj.getDay()];

  var rightSection = "";
  if (isP && m.score) {
    var cls = m.result === "win" ? "win" : m.result === "loss" ? "loss" : "draw";
    var label = m.result === "win" ? "胜" : m.result === "loss" ? "负" : "平";
    rightSection = '<div class="match-reminder"><div class="match-score">' + m.score + '</div><div class="match-score-result ' + cls + '">' + label + '</div></div>';
  } else {
    rightSection =
      '<div class="match-reminder">' +
      '<button class="btn-remind' + (isReminded ? ' active' : '') + '" onclick="toggleReminder(' + m.id + ')">🔔</button>' +
      '<span class="btn-remind-label">' + (isReminded ? '已提醒' : '提醒') + '</span>' +
      '</div>';
  }

  var tagHtml = m.isHome ? '<span class="match-home-tag">主场</span>' : '<span class="match-home-tag" style="background:#E8EAF6;color:#3F51B5;">客场</span>';
  var oppHtml = m.opponent ? '<span class="match-vs">vs</span> ' + m.opponent : '';

  return '<div class="match-card' + (isP ? ' past' : '') + '">' +
    '<div class="match-accent ' + m.sport + '"></div>' +
    '<div class="match-sport-badge">' + m.icon + '</div>' +
    '<div class="match-body">' +
    '<div class="match-teams">' + m.team + ' ' + oppHtml + ' ' + tagHtml + '</div>' +
    '<div class="match-comp">' + m.competition + '</div>' +
    '<div class="match-venue">📍 ' + m.venue + '</div>' +
    '<div class="match-meta">' +
    '<span class="match-date-time">' + month + '月' + day + '日 ' + weekday + ' ' + m.time + '</span>' +
    (!isP ? '<span style="color:#07C160;font-weight:500;">' + countdownText(m) + '</span>' : '') +
    '</div></div>' + rightSection + '</div>';
}

function renderMatchList(all) {
  var container = document.getElementById("matchList");
  if (all.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="icon">🏟️</div><div class="text">该分类暂无比赛</div></div>';
    return;
  }
  var html = "";
  var shownPast = false;
  all.forEach(function(m) {
    var isP = isPast(m);
    if (isP && !shownPast) {
      html += '<div style="font-size:12px;color:#8E8E93;padding:8px 4px 2px;font-weight:600;">已结束</div>';
      shownPast = true;
    }
    html += renderMatchCard(m, isP);
  });
  container.innerHTML = html;
}

function renderMatchCount(all, upcoming) {
  document.getElementById("matchCount").textContent = "共 " + all.length + " 场比赛";
  var btn = document.getElementById("btnRemindAll");
  if (upcoming.length === 0) { btn.textContent = ""; return; }
  var allSet = upcoming.every(function(m) { return reminders[m.id]; });
  btn.textContent = allSet ? "取消全部提醒" : "一键提醒全部";
}

function renderAll() {
  var data = getFiltered();
  renderNextMatch(data.upcoming);
  renderMatchList(data.all);
  renderMatchCount(data.all, data.upcoming);
}

function toggleReminder(id) {
  if (reminders[id]) {
    delete reminders[id];
  } else {
    reminders[id] = true;
    if (typeof Notification !== "undefined" && Notification.permission === "default") {
      showNotifModal();
    }
  }
  saveReminders();
  renderAll();
  updateReminderBadge();
  showToast(reminders[id] ? "已设置提醒 🔔" : "已取消提醒");
}

function remindAllVisible() {
  var data = getFiltered();
  if (data.upcoming.length === 0) return;
  var anyUnset = data.upcoming.some(function(m) { return !reminders[m.id]; });
  if (anyUnset) {
    data.upcoming.forEach(function(m) { reminders[m.id] = true; });
    showToast("已为 " + data.upcoming.length + " 场比赛设置提醒");
    if (typeof Notification !== "undefined" && Notification.permission === "default") showNotifModal();
  } else {
    data.upcoming.forEach(function(m) { delete reminders[m.id]; });
    showToast("已取消全部提醒");
  }
  saveReminders();
  renderAll();
  updateReminderBadge();
}

function saveReminders() {
  localStorage.setItem("matchReminders", JSON.stringify(reminders));
}

function updateReminderBadge() {
  var count = Object.keys(reminders).length;
  var badge = document.getElementById("reminderBadge");
  if (count > 0) {
    badge.style.display = "flex";
    badge.textContent = count;
  } else {
    badge.style.display = "none";
  }
  var data = getFiltered();
  var btn = document.getElementById("btnRemindAll");
  if (data.upcoming.length === 0) { btn.textContent = ""; return; }
  var allSet = data.upcoming.every(function(m) { return reminders[m.id]; });
  btn.textContent = allSet ? "取消全部提醒" : "一键提醒全部";
}

function scrollToReminded() {
  var ids = Object.keys(reminders);
  if (ids.length === 0) return;
  var el = document.querySelector('[onclick*="toggleReminder(' + ids[0] + ')"]');
  if (el) el.closest(".match-card").scrollIntoView({ behavior: "smooth", block: "center" });
}

function checkNotificationPermission() {
  if (typeof Notification === "undefined") return;
  if (Notification.permission === "granted") {
    scheduleNotificationCheck();
  }
}

function showNotifModal() {
  document.getElementById("notifModal").classList.add("show");
}

function closeNotifModal() {
  document.getElementById("notifModal").classList.remove("show");
}

async function requestNotification() {
  closeNotifModal();
  if (typeof Notification === "undefined") {
    showToast("当前浏览器不支持通知");
    return;
  }
  try {
    var perm = await Notification.requestPermission();
    if (perm === "granted") {
      showToast("通知已开启 ✅");
      scheduleNotificationCheck();
    } else {
      showToast("通知未开启，提醒仅保存在页面中");
    }
  } catch(e) {
    showToast("通知权限请求失败");
  }
}

function scheduleNotificationCheck() {
  setInterval(function() {
    MATCHES.forEach(function(m) {
      if (!reminders[m.id] || !isUpcoming(m)) return;
      var diff = new Date(m.date + "T" + m.time) - new Date();
      if (diff > 0 && diff <= 3600000 && diff > 3300000) {
        var key = "notified_" + m.id;
        if (!sessionStorage.getItem(key)) {
          var oppText = m.opponent ? " vs " + m.opponent : "";
          try {
            new Notification(m.icon + " " + m.team + oppText, {
              body: "比赛将于 1 小时后开始\n" + m.competition + "\n📍 " + m.venue,
              requireInteraction: true
            });
          } catch(e) {}
          sessionStorage.setItem(key, "1");
        }
      }
    });
  }, 300000);
}

function showToast(msg) {
  var toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { toast.classList.remove("show"); }, 2000);
}

function refreshCountdowns() { renderAll(); }

function init() {
  renderFilterTabs();
  renderAll();
  updateReminderBadge();
  setInterval(refreshCountdowns, 30000);
  checkNotificationPermission();
}

init();

document.getElementById("notifModal").addEventListener("click", function(e) {
  if (e.target === this) closeNotifModal();
});
