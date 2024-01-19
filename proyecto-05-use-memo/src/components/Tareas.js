import React, { useMemo, useState } from "react";

export const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [contador, setContador] = useState(1000);

  const guardarTareas = (e) => {
    e.preventDefault();
    let tareas_actualizadas = [...tareas, e.target.descripcion.value];
    // Expandimos el estado de tareas más un nuevo elemento
    setTareas(tareas_actualizadas);
  };

  const borrarTareas = (id) => {
    // Filtrar las tareas para borrar la que no quiero
    let nuevas_tareas = tareas.filter((tarea, index) => index !== id);
    // Guardar el nuevo listado de tareas en el estado
    setTareas(nuevas_tareas);
  };

  const sumarAlContador = () => {
    setContador(contador + 1);
  };

  const contadoresPasados = (acumulacion) => {
    for (let i = 0; i <= acumulacion; i++) {
      console.log("Ejecutando acumulación de contadores del pasado...");
    }
    return `Contador manual de tareas: ${acumulacion}`;
  };

  const memoContadores = useMemo(() => contadoresPasados(contador), [contador]);

  return (
    <div className="tareas-container">
      <h1>Mis tareas</h1>
      <form onSubmit={guardarTareas}>
        <input type="text" name="descripcion" placeholder="Describe la tarea" />
        <input type="submit" value="Guardar" />
      </form>

      <h3>{memoContadores}</h3>
      <button onClick={() => sumarAlContador(contador)}>Sumar</button>

      <h3>Lista de tareas:</h3>
      <ul>
        {tareas.map((tarea, indice) => {
          return (
            <li key={indice}>
              {tarea}
              &nbsp;
              <button onClick={() => borrarTareas(indice)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
