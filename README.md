# Mac Mini 智能客服

这是一个基于规则的中文智能客服示例，适合 Mac Mini 电商店铺使用。功能包括：

- 自动欢迎语（新访客 / 老访客区分）
- 常见问题自动回复（知识库）
- 关键词触发回复
- 离线留言自动回复

## 运行方式

1. 安装 Node.js
2. 在项目根目录运行：

```bash
npm install
npm start
```

3. 访问网页客服界面：

```text
http://localhost:3000/
```

## 接口说明

请求地址：`http://localhost:3000/reply`

请求体示例：

```json
{
  "userId": "user123",
  "message": "你好，能介绍一下型号吗？",
  "isNewVisitor": true,
  "timestamp": "2026-05-26T10:00:00.000Z"
}
```

返回示例：

```json
{
  "reply": "您好！欢迎来到本店，本店主营全新/准新 Mac Mini，各配置现货充足。有任何型号、价格、使用问题都可以问我～"
}
```

## 说明

- `isNewVisitor` 可用于区分首次进店用户
- `timestamp` 可用于模拟工作时间和离线时间
- 如果没有匹配到具体问题，会返回通用引导语
