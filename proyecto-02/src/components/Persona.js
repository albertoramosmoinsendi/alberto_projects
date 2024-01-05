import React from "react";
import { useParams } from "react-router-dom";

export const Persona = () => {
  const params = useParams();

  return (
    <div>
      <h1>Pagina de Persona</h1>
      <p>Esta es la página de persona</p>
    </div>
  );
};
