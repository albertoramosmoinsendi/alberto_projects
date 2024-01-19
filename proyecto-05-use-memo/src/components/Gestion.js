import React, { useEffect, useState } from "react";
import { Empleados } from "./Empleados";

export const Gestion = () => {
  const [nombre, setNombre] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log("La vista se ha renderizado");
  });

  const asignarGestor = (e) => {
    setNombre(e.target.value);
  };

  useEffect(() => {
    console.log("Vista de gestion actualizada");
  }, [nombre, page]);

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
        jsonplaceholder de la página {page}
      </p>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Mostrando la Página {page}
      </button>
      <Empleados page={page} />
    </div>
  );
};
