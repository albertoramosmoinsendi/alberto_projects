import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Articulos } from "../components/Articulos";
import { Contacto } from "../components/Contacto";
import { Error } from "../components/Error";

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/inicio" element={<Inicio />}></Route>
        <Route path="/articulos" element={<Articulos />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        {/* '*'' Cualquier ruta que no vaya a existir */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
