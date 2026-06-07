const MATCHES = [
  {
    "id": 1,
    "sport": "football",
    "sportName": "足球",
    "icon": "⚽",
    "team": "中国男足",
    "opponent": "泰国",
    "competition": "国际足球友谊赛",
    "date": "2026-06-09",
    "time": "20:00",
    "venue": "浙江金华",
    "isHome": true
  },

  {
    "id": 30,
    "sport": "volleyball",
    "sportName": "排球",
    "icon": "🏐",
    "team": "中国女排",
    "opponent": "波兰女排",
    "competition": "FIVB世界女排联赛",
    "date": "2026-06-07",
    "time": "19:30",
    "venue": "南京青奥体育公园",
    "isHome": true,
    "score": "3-1",
    "result": "win"
  },
  {
    "id": 31,
    "sport": "volleyball",
    "sportName": "排球",
    "icon": "🏐",
    "team": "中国女排",
    "opponent": "捷克女排",
    "competition": "FIVB世界女排联赛",
    "date": "2026-06-03",
    "time": "19:30",
    "venue": "南京青奥体育公园",
    "isHome": true,
    "score": "3-0",
    "result": "win"
  },
  {
    "id": 32,
    "sport": "volleyball",
    "sportName": "排球",
    "icon": "🏐",
    "team": "中国女排",
    "opponent": "巴西女排",
    "competition": "FIVB世界女排联赛 第三周",
    "date": "2026-06-11",
    "time": "20:00",
    "venue": "香港体育馆",
    "isHome": true
  },
  {
    "id": 33,
    "sport": "volleyball",
    "sportName": "排球",
    "icon": "🏐",
    "team": "中国女排",
    "opponent": "土耳其女排",
    "competition": "FIVB世界女排联赛 第三周",
    "date": "2026-06-13",
    "time": "20:00",
    "venue": "香港体育馆",
    "isHome": true
  },
  {
    "id": 34,
    "sport": "volleyball",
    "sportName": "排球",
    "icon": "🏐",
    "team": "中国男排",
    "opponent": "意大利男排",
    "competition": "FIVB世界男排联赛 第三周",
    "date": "2026-06-18",
    "time": "19:00",
    "venue": "菲律宾帕赛市亚洲商城体育馆",
    "isHome": false
  },
  {
    "id": 35,
    "sport": "volleyball",
    "sportName": "排球",
    "icon": "🏐",
    "team": "中国男排",
    "opponent": "法国男排",
    "competition": "FIVB世界男排联赛 第三周",
    "date": "2026-06-19",
    "time": "16:00",
    "venue": "菲律宾帕赛市亚洲商城体育馆",
    "isHome": false
  },
  {
    "id": 36,
    "sport": "volleyball",
    "sportName": "排球",
    "icon": "🏐",
    "team": "中国男排",
    "opponent": "斯洛文尼亚男排",
    "competition": "FIVB世界男排联赛",
    "date": "2026-06-16",
    "time": "19:00",
    "venue": "临沂奥体公园体育馆",
    "isHome": true
  },
  {
    "id": 60,
    "sport": "snooker",
    "sportName": "斯诺克",
    "icon": "🎱",
    "team": "丁俊晖",
    "opponent": "奥沙利文",
    "competition": "2026上海大师赛 四分之一决赛",
    "date": "2026-09-15",
    "time": "19:30",
    "venue": "上海体育馆",
    "isHome": true
  },
  {
    "id": 61,
    "sport": "snooker",
    "sportName": "斯诺克",
    "icon": "🎱",
    "team": "赵心童",
    "opponent": "特鲁姆普",
    "competition": "2026上海大师赛 十六强",
    "date": "2026-09-16",
    "time": "14:00",
    "venue": "上海体育馆",
    "isHome": true
  },
  {
    "id": 62,
    "sport": "snooker",
    "sportName": "斯诺克",
    "icon": "🎱",
    "team": "颜丙涛",
    "opponent": "塞尔比",
    "competition": "2026武汉公开赛 第一轮",
    "date": "2026-10-05",
    "time": "14:00",
    "venue": "武汉体育中心",
    "isHome": true
  },
  {
    "id": 70,
    "sport": "tabletennis",
    "sportName": "乒乓球",
    "icon": "🏓",
    "team": "樊振东",
    "opponent": "张本智和",
    "competition": "2026 WTT冠军赛澳门站 男子单打",
    "date": "2026-09-22",
    "time": "19:00",
    "venue": "澳门塔石体育馆",
    "isHome": true
  },
  {
    "id": 71,
    "sport": "tabletennis",
    "sportName": "乒乓球",
    "icon": "🏓",
    "team": "孙颖莎",
    "opponent": "伊藤美诚",
    "competition": "2026 WTT冠军赛澳门站 女子单打",
    "date": "2026-09-23",
    "time": "19:00",
    "venue": "澳门塔石体育馆",
    "isHome": true
  },
  {
    "id": 80,
    "sport": "badminton",
    "sportName": "羽毛球",
    "icon": "🏸",
    "team": "石宇奇",
    "opponent": "安赛龙",
    "competition": "2026中国羽毛球公开赛 男单首轮",
    "date": "2026-09-08",
    "time": "14:00",
    "venue": "常州奥体中心",
    "isHome": true
  },
  {
    "id": 81,
    "sport": "badminton",
    "sportName": "羽毛球",
    "icon": "🏸",
    "team": "陈雨菲",
    "opponent": "山口茜",
    "competition": "2026中国羽毛球公开赛 女单次轮",
    "date": "2026-09-09",
    "time": "18:00",
    "venue": "常州奥体中心",
    "isHome": true
  },
  {
    "id": 90,
    "sport": "basketball",
    "sportName": "篮球",
    "icon": "🏀",
    "team": "中国男篮",
    "opponent": "日本男篮",
    "competition": "2027世界杯亚洲区预选赛",
    "date": "2026-08-25",
    "time": "19:30",
    "venue": "江门体育中心",
    "isHome": true
  },
  {
    "id": 100,
    "sport": "football",
    "sportName": "足球",
    "icon": "⚽",
    "team": "中国U23",
    "opponent": "韩国U23",
    "competition": "2026 U23亚洲杯预选赛",
    "date": "2026-09-02",
    "time": "19:30",
    "venue": "广州越秀山体育场",
    "isHome": true
  },
  {
    "id": 101,
    "sport": "football",
    "sportName": "足球",
    "icon": "⚽",
    "team": "中国U19",
    "opponent": "泰国U19",
    "competition": "2026 U19亚洲杯预选赛",
    "date": "2026-10-14",
    "time": "19:00",
    "venue": "昆明拓东体育中心",
    "isHome": true
  },
  {
    "id": 102,
    "sport": "football",
    "sportName": "足球",
    "icon": "⚽",
    "team": "中国U19",
    "opponent": "哥伦比亚U19",
    "competition": "土伦杯国际邀请赛",
    "date": "2026-06-07",
    "time": "22:00",
    "venue": "法国土伦",
    "isHome": false
  },
  {
    "id": 200,
    "sport": "athletics",
    "sportName": "田径",
    "icon": "🏃",
    "team": "中国田径队",
    "opponent": "—",
    "competition": "世界田径锦标赛",
    "date": "2026-08-06",
    "time": "—",
    "venue": "日本东京",
    "isHome": false
  },
  {
    "id": 201,
    "sport": "volleyball",
    "sportName": "排球",
    "icon": "🏐",
    "team": "中国女排",
    "opponent": "待定",
    "competition": "世界女排锦标赛",
    "date": "2026-08-22",
    "time": "—",
    "venue": "泰国",
    "isHome": false
  },
  {
    "id": 202,
    "sport": "volleyball",
    "sportName": "排球",
    "icon": "🏐",
    "team": "中国男排",
    "opponent": "待定",
    "competition": "世界男排锦标赛",
    "date": "2026-08-26",
    "time": "—",
    "venue": "菲律宾",
    "isHome": false
  },
  {
    "id": 203,
    "sport": "football",
    "sportName": "足球",
    "icon": "⚽",
    "team": "中国代表团",
    "opponent": "—",
    "competition": "2026名古屋亚运会",
    "date": "2026-09-19",
    "time": "—",
    "venue": "日本名古屋",
    "isHome": false
  }
];

const SPORTS = [
  { key: "all", name: "全部", icon: "" },
  { key: "football", name: "足球", icon: "⚽" },
  { key: "basketball", name: "篮球", icon: "🏀" },
  { key: "volleyball", name: "排球", icon: "🏐" },
  { key: "tabletennis", name: "乒乓", icon: "🏓" },
  { key: "badminton", name: "羽毛球", icon: "🏸" },
  { key: "snooker", name: "斯诺克", icon: "🎱" },
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
