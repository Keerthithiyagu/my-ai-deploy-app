const http = require("http");

const server = http.createServer((req, res) => {
    res.end("AI Deployment Working 🚀");
});

server.listen(3000);

