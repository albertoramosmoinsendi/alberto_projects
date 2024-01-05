import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>Esta página no existe </p>
      {/* <a href="/inicio"> Vuelve al inicio </a> */}
      <Link to="/inicio">Volver al inicio </Link>
      {/* Nos lleva al inicio sin que la pagina recargue */}
    </div>
  );
};
