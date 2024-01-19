import React, { memo } from "react";

export const Empleados = memo(() => {
  return (
    <div>
      <h1>Empleados</h1>
      <p>
        Memorizamos absolutamente todo lo que devuelve este componente para
        evitar re-renders que no queremos. Solo se va a actualizar la vista de
        Gestión, no la de Empleados
      </p>
    </div>
  );
});
