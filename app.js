import { createServer } from "node:http";

createServer(async (req, res) => {
  res.setHeader("content-Type", "application/json");
  res.end();
}).listen(3000);
