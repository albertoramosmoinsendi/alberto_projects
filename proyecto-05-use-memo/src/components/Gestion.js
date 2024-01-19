import React, { useEffect, useState } from "react";
import { Empleados } from "./Empleados";

export const Gestion = () => {
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    console.log("La vista se ha renderizado");
  });

  const asignarGestor = (e) => {
    setNombre(e.target.value);
  };

  return (
    <div>
      <h1>Nombre del gestor: {nombre}</h1>
      <input
        type="text"
        onChange={asignarGestor}
        placeholder="Introduce tu nombre de Gestor"
      />
      <h2>Listado de empleados: </h2>
      <p>
        Los usuarios son gestionados por: {nombre}, que vienen de
        jsonplaceholder...
      </p>

      <Empleados />
    </div>
  );
};
