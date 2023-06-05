import { createServer } from "node:http";
import { create, index } from "./api/todo.js";

createServer(async (req, res) => {
  res.setHeader("content-Type", "application/json");
  const url = new URL(req.url, `http://${req.headers.host}`);
  const endpoint = `${req.method}:${url.pathname}`;
  let results;
  switch (endpoint) {
    case "GET:/todos":
      results = await index(req, res);
      break;
    case "POST:/todos":
      results = await create(req, res);
      break;

    default:
      res.writeHead(404);
      break;
  }
  if (results) {
    res.write(JSON.stringify(results));
  }

  res.end();
}).listen(3000);
