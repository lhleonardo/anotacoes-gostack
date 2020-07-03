import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Container from "./components/Container";

import api from "./services/api";

import "./app.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/tasks").then((response) => {
      console.log(response.data);

      setTasks(response.data);
    });
  }, []);

  function handleAddProject(event) {
    event.preventDefault();

    const task = {
      title: event.target.title.value,
    };

    api.post("/tasks", task).then((response) => {
      if (response.status === 200) {
        console.log(response);
        setTasks([...tasks, response.data]);
      }
    });
  }

  return (
    <Container>
      <Header title="Cadastro de Tarefas" />

      <section className="tasks">
        <div className="form">
          <form onSubmit={handleAddProject} action="#">
            <label htmlFor="title">Titulo da tarefa</label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Um título aqui..."
            />

            <input type="submit" value="Cadastrar" />
          </form>
        </div>

        {tasks.length > 0 ? (
          <ul className="values">
            {tasks.map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
        ) : (
          <h3>Nenhuma tarefa cadastrada</h3>
        )}
      </section>
    </Container>
  );
}

export default App;
