import React from "react";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Contacto } from "../components/Contacto";
import { Curriculum } from "../components/Curriculum";
import { Portafolio } from "../components/Portafolio";
import { Servicios } from "../components/Servicios";
import { HeaderNav } from "../components/layout/HeaderNav";
import { Footer } from "../components/layout/Footer";

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* HEADER Y NAVEGACION */}
      <HeaderNav />

      {/*  CONTENIDO CENTRAL */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>

      {/* FOOTER */}
      <hr />
      <Footer />
    </BrowserRouter>
  );
};
