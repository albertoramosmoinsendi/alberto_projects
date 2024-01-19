import React, { memo, useEffect, useState } from "react";

export const Empleados = memo(({ page, mensaje }) => {
  const [empleados, setEmpleados] = useState([]);

  const conseguirEmpleados = async (page) => {
    const url = "https://reqres.in/api/users?page=" + page;
    console.log("url", url);
    const peticion = await fetch(url);
    const { data: empleados } = await peticion.json();
    setEmpleados(empleados);
    console.log("Se ejecutó la petición ajax");
    // Sin el useMemo se ejecuta varias veces la petición AJAX (4 veces) que
    // depende de los estados, a parte de los estados y los cambios de la vista
    // de Gestión (+20). Con useMemo pasa a
  };

  useEffect(() => {
    conseguirEmpleados(page);
  }, [page]);

  useEffect(() => {
    console.log("Vista de Empleados actualizada");
    mensaje();
  }, [empleados]);

  return (
    <div>
      <h1>Empleados</h1>
      <ul className="empleados">
        {empleados.length >= 1 &&
          empleados.map((empleado) => {
            return (
              <li key={empleado.id}>
                {empleado.first_name + " " + empleado.last_name}
              </li>
            );
          })}
      </ul>
    </div>
  );
});
