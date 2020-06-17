const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { uuid } = require("uuidv4");

app.use(express.json());
app.use(bodyParser());

const tasks = [];

app.get("/tasks", (request, response) => {
  return response.json(tasks);
});

app.post("/tasks", (request, response) => {
  const { title } = request.body;

  const newTask = { id: uuid(), title };

  tasks.push(newTask);

  return response.json(newTask);
});

app.put("/tasks/:id", (request, response) => {
  const { id } = request.params;

  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex < 0) {
    return response.status(400).json({ error: "Task not found." });
  }

  const { title } = request.body;

  const newTask = { id, title };

  tasks[taskIndex] = newTask;

  return response.json(newTask);
});

app.delete("/tasks/:id", (request, response) => {
  const { id } = request.params;

  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex < 0) {
    return response.status(400).json({ error: "Task not found." });
  }

  tasks.splice(taskIndex, 1);

  return response.status(200);
});

app.listen(3000, () => console.log("Servidor Iniciado!"));
