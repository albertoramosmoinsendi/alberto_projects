import React from "react";

export const Editar = ({
  peli,
  conseguirPeliculas,
  setEditar,
  setListadoState,
}) => {
  const titulo_componente = "Editar pelicula";

  const guardarEditcion = (e, id) => {
    e.preventDefault();
    // Conseguir el target del evento
    let target = e.target;

    // Buscar el indice del objeto de la pelicula a actualizar
    const pelis_almacenadas = conseguirPeliculas();

    const indice = pelis_almacenadas.findIndex((peli) => peli.id === id);

    // Crear objeto con ese indice con titulo y descripcion del formulario
    let peli_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };

    // Actualizar el elemento con ese indice
    pelis_almacenadas[indice] = peli_actualizada;

    // Guardar el nuevo array de objetos en el localStorage
    localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

    // Actualizar estados
    setListadoState(pelis_almacenadas);
    setEditar(0);
  };

  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>
      <form onSubmit={(e) => guardarEditcion(e, peli.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={peli.titulo}
        />
        <textarea
          name="descripcion"
          className="descripcion_editada"
          defaultValue={peli.descripcion}
        />
        <input
          type="submit"
          name="editar"
          className="editar"
          value="Actualizar"
        />
      </form>
    </div>
  );
};
