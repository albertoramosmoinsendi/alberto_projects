import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/guardarEnStorage";

export const Crear = ({ setListadoState }) => {
  const tituloComponente = "Añadir película";
  const [peliState, setPeliState] = useState({ titulo: "", descripcion: "" });
  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    // Para evitar el recargo de pantalla y que la aplicacion sea funcional y reactiva
    e.preventDefault();
    // Conseguir datos del formulario
    let target = e.target; // Consigue el evento como tal
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
    // Queremos guardar la informacion en un obj
    let peli = {
      id: new Date().getTime(), // Para siempre tener un id diferente
      titulo,
      descripcion,
    };

    // Queremos guardar esta información en el estado del componente
    setPeliState(peli);
    // Actualizar el estado del listado principal
    setListadoState((elementos) => {
      return [...elementos, peli];
    });
    // Guardar en el almacenamiento local
    GuardarEnStorage("pelis", peli);
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {titulo &&
          descripcion &&
          "Has añadido la película: " +
            titulo +
            " con descripción: " +
            descripcion}
      </strong>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" name="titulo" id="title" placeholder="Titulo" />
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Descripción"
        ></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};
