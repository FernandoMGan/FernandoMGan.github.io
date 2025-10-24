// File: src/app/componentes/Educacion.tsx
import React from 'react';
import styles from "./Educacion.module.css";

export default function Educacion() {
    const educacion = [
    {
        nivel: "Bootcamp Desarrollo Web Full Stack (Actualmente en curso)",
        titulo: "Freecode Camp, Soy Henry, MiduDev, Ing. Prof. Luisina de Paula, entre otros (2025-2028)",
        institucion: "Estudio a Distancia",
        estado: "En curso"
    },
    {
        nivel: "MATRICULACIONES PROFESIONALES",
        titulo: "Instalador Gasista (2015-2017)",
        institucion: "Escuela de formación profesional 652 - Sarmiento, Chubut",
        estado: "Recibido - Matricula En Tramite"
    },
    {
        nivel: "MATRICULACIONES PROFESIONALES",
        titulo: "Instalador Sanitarista (2011-2014)",
        institucion: "Escuela de formación profesional 652 - Sarmiento, Chubut",
        estado: "Recibido - Matricula En Tramite"
    },
    {
        nivel: "SECUNDARIO",
        titulo: "Perito comercial especializado en administración de empresas",
        institucion: 'Cens Nº 59 "Gervasio Posadas" - Matrícula: 0047273',
        estado: "Completo"
    }
    ];
  return (
    <div className={styles.secctions}>
      <div className={styles.timeline}>
        {educacion.map((edu, idx) => (
          <div className={styles["timeline-card"]} key={idx}>
            <div className={styles["timeline-nivel"]}>{edu.nivel}</div>
            <div className={styles["timeline-titulo"]}><strong>{edu.titulo}</strong></div>
            <div className={styles["timeline-institucion"]}>{edu.institucion}</div>
            <div>
              <span
                className={
                  edu.estado === "Completo"
                    ? styles.chipCompleto
                    : edu.estado === "En curso"
                    ? styles.chipCurso
                    : styles.chipRecibido
                }
              >
                {edu.estado}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
