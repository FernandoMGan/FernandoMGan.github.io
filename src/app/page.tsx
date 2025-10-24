"use client";

import { useState } from "react";
import ContactoForm from "./services/ContactoForm";
import Experiencia from "./componentes/Experiencia";
import Educacion from "./componentes/Educacion";
import Habilidades from "./componentes/Habilidades";
import Portafolios from "./componentes/Portafolios";
import Rrhh from "./componentes/Rrhh";
import Ceo from "./componentes/Ceo";

const SECTIONS = [
  { id: "perfil", label: "Perfil Personal" },
  { id: "experiencia", label: "Experiencia Laboral" },
  { id: "InfoRrhh", label: "Info para RRHH" },
  { id: "InfoCeo", label: "Info para CEO" },
  { id: "Educacion", label: "Educacion" },
  { id: "Habilidades", label: "Habilidades" },
  { id: "Portafolios", label: "Portafolios" },
  { id: "Contacto", label: "Contacto" }
];

export default function Home() {
  const [active, setActive] = useState("perfil"); // Tab actual

  function abrirContacto() {
  // Acción que ejecuta el botón de contacto (puede abrir modal, enfocar formulario, etc)
    setActive("Contacto");
  }
  return (
    <>
      <div className="doc-title">
        <h1>Curriculum Vitae</h1>
      </div>
      <nav className="nav-link">
        {SECTIONS.map(section => (
          <section className="nav-item" key={section.id}>
            <button
              className={`nav-item-buttons${active === section.id ? " active" : ""}`}
              onClick={() => setActive(section.id)}
            >
              {section.label}
            </button>
          </section>
        ))}
      </nav>
      <div className="secctions">
        <section id="perfil" className={`section${active === "perfil" ? " active" : ""}`}>
          <h2 className="section-title">Perfil Personal</h2>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">👤</div>
              <div className="info-content">
                <div className="info-label">Nombre Completo</div>
                <div className="info-value">Fernando Martin Gan</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📋</div>
              <div className="info-content">
                <div className="info-label">DNI</div>
                <div className="info-value">22.457.474</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">🎂</div>
              <div className="info-content">
                <div className="info-label">Edad</div>
                <div className="info-value">53 años (11/11/1971)</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">🇦🇷</div>
              <div className="info-content">
                <div className="info-label">Nacionalidad</div>
                <div className="info-value">Argentino</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <div className="info-label">Ubicación</div>
                <div className="info-value">Sarmiento, Chubut</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">🚗</div>
              <div className="info-content">
                <div className="info-label">Licencia de Conducir</div>
                <div className="info-value">Categoría B1 - 19+ años</div>
              </div>
            </div>
            <div className="info-item" id="info-email" onClick={abrirContacto}>
              <div className="info-icon">📧</div>
              <div className="info-content">
                <div className="info-label">Email de Contacto</div>
                <div className="info-value">fmg@bpochange.com.ar</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3 className="section-subtitle">Resumen Profesional</h3>
              {/* <p>Profesional multidisciplinario con más de 20 años de experiencia en tecnologías informáticas y 10 años en educación pública y privada. Especialista en desarrollo de sistemas, administración de infraestructura, y oficios técnicos diversos. Combino conocimientos técnicos avanzados con habilidades prácticas en múltiples áreas, desde programación y bases de datos hasta instalaciones eléctricas, plomería y soldadura.</p> */}
              <p>
                <span className="importante">Profesional multidisciplinario</span> con más de <span className="importante">20</span> años de experiencia en <span className="importante">tecnologías informáticas</span> y <span className="importante">10</span> años como profesor en <span className="importante">educación pública y privada.</span> <span className="importante">Especializado</span> en desarrollo de <span className="importante">sistemas</span>, administración de <span className="importante">infraestructura</span>, administracion de <span className="importante">empresas</span> y oficios técnicos diversos.
              </p>
            </div>
          </div>
        </section>
        <section id="experiencia" className={`section${active === "experiencia" ? " active" : ""}`}>
          <h2 className="section-title">Experiencia Laboral</h2>
          <Experiencia />
        </section>
        <section id="Educacion" className={`section${active === "Educacion" ? " active" : ""}`}>
          <h2 className="section-title">Educacion</h2>
          <Educacion />
        </section>

        <section id="InfoRrhh" className={`section${active === "InfoRrhh" ? " active" : ""}`}>
          <h2 className="section-title">Info para RRHH</h2>
          <Rrhh />
        </section>

        <section id="InfoCeo" className={`section${active === "InfoCeo" ? " active" : ""}`}>
          <h2 className="section-title">Info para CEO</h2>
          <Ceo />
        </section>

        <section id="Habilidades" className={`section${active === "Habilidades" ? " active" : ""}`}>
          <h2 className="section-title">Habilidades</h2>
          <Habilidades />
        </section>
        <section id="Portafolios" className={`section${active === "Portafolios" ? " active" : ""}`}>
          <h2 className="section-title">Portafolios</h2>
          <Portafolios />
        </section>
        <section id="Contacto" className={`section${active === "Contacto" ? " active" : ""} scc-contacto-itms`}>
          <h2 className="section-title">Contacto</h2>
          <ContactoForm />
        </section>
      </div>
    </>
  );
}
