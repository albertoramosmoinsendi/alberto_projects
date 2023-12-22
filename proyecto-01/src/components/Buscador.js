import React, { useState } from "react";

export const Buscador = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusqueda] = useState("");
  const [encontrado, setEncontrado] = useState(false);

  const buscarPeli = (e) => {
    // Crear estado y actualizarlo
    setBusqueda(e.target.value);

    // Filtrar para buscar cualquier coincidencia
    let pelis_econtradas = listadoState.filter((peli) => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });

    // Comprobar si hay un resultado
    if (busqueda.length <= 1 || pelis_econtradas <= 0) {
      pelis_econtradas = JSON.parse(localStorage.getItem("pelis"));
      setEncontrado(false);
    }
    setEncontrado(true);

    // Actualizar el  estado del listado principal con lo que he lorgado filtrar
    setListadoState(pelis_econtradas);
  };

  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>
      {encontrado && busqueda.length > 1 && (
        <span className="encontrado">
          No se ha encontrado ninguna coincidencia
        </span>
      )}
      <form>
        <input
          type="text"
          id="search_field"
          name="busqueda"
          autoComplete="off"
          onChange={buscarPeli}
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};
