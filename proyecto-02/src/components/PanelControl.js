import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const PanelControl = () => {
  return (
    <div>
      <h1>Panel de control</h1>
      <p>Elige una de estas opciones</p>
      <nav>
        <ul>
          <li>
            <NavLink to="/panel/inicio">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/panel/crear-articulos">Crear Artículos</NavLink>
          </li>
          <li>
            <NavLink to="/panel/gestion-usuarios">Gestión de Usuarios</NavLink>
          </li>
          <li>
            <NavLink to="/panel/acerca-de">Acerca de</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        {/* Aqui quiero cargar los componentes de las sub rutas o de las rutas anidadas */}
        <Outlet />
      </div>
    </div>
  );
};
