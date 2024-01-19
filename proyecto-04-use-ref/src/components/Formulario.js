import React, { useRef } from "react";

export const Formulario = () => {
  const nombreInput = useRef();
  const apellidosInput = useRef();
  const correoInput = useRef();
  const miCaja = useRef();

  const mostrar = (e) => {
    e.preventDefault();
    let { current: caja } = miCaja;
    // Modificamos los valores de la caja con useRef al enviar
    caja.classList.add("fondoVerde");
    caja.innerHTML = "El formulario se ha enviado!";
  };

  return (
    <div>
      <h1>Formulario</h1>

      <div ref={miCaja} className="miCaja">
        <h2>Pruebas con useRef</h2>
      </div>
      <form onSubmit={mostrar}>
        <input type="text" placeholder="Nombre" ref={nombreInput} /> <br />
        <input type="text" placeholder="Apellidos" ref={apellidosInput} />{" "}
        <br />
        <input
          type="email"
          placeholder="Correo electrónico"
          ref={correoInput}
        />
        <br />
        <input type="submit" value="Enviar" />
      </form>
      {/* Nos coloca en el primer elemento */}
      <button onClick={() => nombreInput.current.select()}>
        Empezar a rellenar el formulario
      </button>
    </div>
  );
};
