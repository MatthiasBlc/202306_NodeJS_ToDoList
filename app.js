import { createServer } from "node:http";
import { json } from "node:stream/consumers";
import { createTodo, findTodos } from "./functions/todos_storage.js";

createServer(async (req, res) => {
  res.setHeader("content-Type", "application/json");
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === "/todos") {
    if (req.method === "GET") {
      const todos = await findTodos();
      res.write(JSON.stringify(todos));
    } else if (req.method === "POST") {
      const newTodo = await json(req);
      const todo = await createTodo(newTodo);
      // console.log(newTodo);
      res.write(JSON.stringify(todo));
    }
  } else {
    res.writeHead(404);
  }

  res.end();
}).listen(3000);
