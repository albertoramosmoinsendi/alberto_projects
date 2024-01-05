import React from "react";

export const Contacto = () => {
  return (
    <div className="page">
      <h1>Contacto</h1>
      <form className="contact" action="mailto:correo@gmail.com">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellidos" />
        <textarea placeholder="Motivo de contacto" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
