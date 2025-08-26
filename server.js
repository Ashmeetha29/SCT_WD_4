const express = require("express");
const app = express();
const PORT = process.env.PORT || 3003;

let tasks = [];

app.use(express.static("public"));
app.use(express.json());

// Get tasks
app.get("/tasks", (req, res) => res.json(tasks));

// Add task
app.post("/tasks", (req, res) => {
  const task = { id: Date.now(), ...req.body };
  tasks.push(task);
  res.json(task);
});

// Delete task
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ success: true });
});

app.listen(PORT, () => console.log(`✅ To-Do App running on http://localhost:${PORT}`));
