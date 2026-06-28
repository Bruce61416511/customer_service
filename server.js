const http = require("http");
const fs = require("fs");
const path = require("path");
const { getReply, isOffline } = require("./chatbot");

const PORT = process.env.PORT || 8081;
const visitors = new Set();
const indexHtml = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

function parseJSONBody(req, callback) {
  let body = "";
  req.on("data", chunk => { body += chunk.toString(); });
  req.on("end", () => {
    try {
      callback(null, body ? JSON.parse(body) : {});
    } catch (error) {
      callback(error);
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/reply") {
    parseJSONBody(req, (err, payload) => {
      if (err) {
        res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
        res.end(JSON.stringify({ error: "无效 JSON 请求体" }));
        return;
      }

      const { userId, message, isNewVisitor, timestamp } = payload;
      const knownVisitor = Boolean(userId && visitors.has(userId));
      if (userId) {
        visitors.add(userId);
      }

      const reply = getReply({
        userId,
        message,
        isNewVisitor: Boolean(isNewVisitor),
        timestamp,
        knownVisitor
      });

      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ reply }));
    });
    return;
  }

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(indexHtml);
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, () => {
  console.log(`智能客服服务已启动，监听端口 ${PORT}。`);
});
