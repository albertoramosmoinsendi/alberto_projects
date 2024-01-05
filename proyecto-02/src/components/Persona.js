import React from "react";
import { useParams } from "react-router-dom";

export const Persona = () => {
  const { nombre, apellidos } = useParams();

  return (
    <div>
      {!nombre && <h1> No hay ninguna persona que mostrar</h1>}
      {nombre && (
        <h1>
          Pagina de Persona: {nombre} {apellidos}
        </h1>
      )}
      <p>Esta es la página de persona</p>
    </div>
  );
};
