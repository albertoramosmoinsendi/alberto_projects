import React from "react";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="home">
      <h1>
        Me especializo en ofrecer soluciones de
        <strong> software a medida diseñadas </strong> para satisfacer las
        necesidades únicas de tu negocio. Con una pasión por la innovación y un
        compromiso con la excelencia, ofrezco una gama de servicios de
        desarrollo para impulsar la eficiencia, productividad y crecimiento de
        tu proyecto u organización.
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y
        relevancia en internet. <Link to="/contacto"> Contacta conmigo </Link>
      </h2>

      <section className="last-works">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>

        <div className="works">{/* Trabajos a hacer */}</div>
      </section>
    </div>
  );
};
