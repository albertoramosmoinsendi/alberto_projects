import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ listadoState, setListadoState }) => {
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    return peliculas;
  };

  const borrarPeli = (id) => {
    // conseguir peliculas ya almacenadas
    let pelis_almacenadas = conseguirPeliculas();
    // filtrar peliculas para que elimine del array la seleccionada
    let nuevo_array_peliculas = pelis_almacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );
    // actualizar estado del listado
    setListadoState(nuevo_array_peliculas);
    // actualizar los datos en el localstorage
    localStorage.setItem("pelis", JSON.stringify(nuevo_array_peliculas));
  };

  return (
    <>
      {listadoState != null ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>
              <button onClick={() => setEditar(peli.id)} className="edit">
                Editar
              </button>
              <button onClick={() => borrarPeli(peli.id)} className="delete">
                Borrar
              </button>
              {/* aparece formulario de editar */}
              {editar === peli.id && (
                <Editar
                  peli={peli}
                  conseguirPeliculas={conseguirPeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2> No hay peliculas para mostrar </h2>
      )}
    </>
  );
};
