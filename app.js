import { createServer } from "node:http";
import { findTodos } from "./functions/todos_storage.js";

createServer(async (req, res) => {
  res.setHeader("content-Type", "application/json");
  const todos = await findTodos();
  res.write(JSON.stringify(todos));
  res.end();
}).listen(3000);
