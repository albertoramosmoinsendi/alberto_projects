import React, { useState } from "react";

export const Tareas = () => {
  const [tareas, setTareas] = useState([]);

  const guardarTareas = (e) => {
    e.preventDefault();
    let tareas_actualizadas = [...tareas, e.target.descripcion.value];
    // Expandimos el estado de tareas más un nuevo elemento
    setTareas(tareas_actualizadas);
  };

  return (
    <div className="tareas-container">
      <h1>Mis tareas</h1>
      <form onSubmit={guardarTareas}>
        <input type="text" name="descripcion" placeholder="Describe la tarea" />
        <input type="submit" value="Guardar" />
      </form>

      <h3>Lista de tareas:</h3>
      <ul>
        {tareas.map((tarea, index) => {
          return <li key={index}>{tarea}</li>;
        })}
      </ul>
    </div>
  );
};
