# 中国国家队赛程提醒 - 每周更新流程

## 更新流程（每周执行）

### 如果你有 豆包 API：
```
Phase 1: 豆包 → 查询所有当前比赛
Phase 2: DeepSeek → 验证豆包数据
Phase 3: 豆包 → 根据验证结果修正数据
Phase 4: 更新 app.js → 部署到 GitHub Pages
Phase 5: 截图 → 发给豆包验证
Phase 6: 修改错误 → 再次部署
```

### 如果你没有 豆包 API（当前方案）：
当前使用 DeepSeek API 完成查询+验证，流程如下：

```
python scripts/update_matches.py
```

该脚本会自动:
1. 用 DeepSeek 查询当前赛程
2. 交叉验证数据
3. 更新 app.js
4. 提交并推送到 GitHub

### GitHub Actions 自动更新
已配置每周一北京时间 08:00 自动运行（需在 repo Settings → Secrets 中设置 DEEPSEEK_API_KEY）。

## 手动快速验证（有浏览器时）
1. 打开 https://jiujiaoxiayuhe.github.io/china-sports-reminder/
2. 截图发给豆包说："请检查这些比赛数据是否正确"
3. 根据反馈手动修正 app.js
4. 提交推送

## 历史已确认的比赛（不可修改）
- 足球: 6月9日 中国男足 vs 泰国（浙江金华）
- 女排: 6月11日 vs 巴西, 6月13日 vs 土耳其（香港）
- 男排: 6月16日 vs 斯洛文尼亚（临沂）, 6月18日 vs 意大利, 6月19日 vs 法国（菲律宾）
