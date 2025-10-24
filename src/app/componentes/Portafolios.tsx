// File : src/app/componentes/Portafolios.tsx
import React from 'react'
import styles from "./Portafolios.module.css";

export default function Portafolios() {
  const proyectos = [
    {
      nombre: "Html-Legacy-Level-01",
      descripcion: "Simulador interactivo de consultas SQL con JavaScript, HTML y CSS. Permite visualizar y aprender cómo funcionan los distintos tipos de JOIN (INNER, LEFT, RIGHT, FULL, CROSS).",
      tecnologias: ["JavaScript", "HTML", "CSS"],
      tipo: "Educativo",
      foto: "./assets/proyectsgh/Html-Legacy-Level-01.jpg",
      url: "https://github.com/FernandoMGan/Html-Legacy-Level-01",
      actualizado: "Octubre 2025",
      destacado: true
    },
    {
      nombre: "navigate-2c-redux",
      descripcion: "Proyecto de navegación con Redux",
      tecnologias: ["JavaScript", "Redux", "React"],
      tipo: "Práctica",
      foto: "./assets/proyectsgh/Html-Legacy-Level-01.jpg",
      url: "https://github.com/FernandoMGan/navigate-2c-redux",
      actualizado: "Mayo 2024",
      destacado: false
    },
    {
      nombre: "test-by-js-crud",
      descripcion: "Sistema CRUD desarrollado con JavaScript",
      tecnologias: ["HTML", "JavaScript"],
      tipo: "CRUD",
      foto: "./assets/proyectsgh/Html-Legacy-Level-01.jpg",
      url: "https://github.com/FernandoMGan/test-by-js-crud",
      actualizado: "Agosto 2023",
      destacado: false
    },
    {
      nombre: "test-by-js-buscador",
      descripcion: "Motor de búsqueda desarrollado con JavaScript",
      tecnologias: ["HTML", "JavaScript"],
      tipo: "Herramienta",
      foto: "./assets/proyectsgh/Html-Legacy-Level-01.jpg",
      url: "https://github.com/FernandoMGan/test-by-js-buscador",
      actualizado: "Agosto 2023",
      destacado: false
    }
  ];

  return (
<div className={styles.secctions}>
  <div className={styles.timeline}>
    {proyectos.map((proyecto, idx) => (
      <div className={styles["timeline-card"]} key={idx}>
        {/* Cuadrado decorativo a la izquierda */}
        <div className={styles.cuadroIzquierda}>
            <img 
                src={proyecto.foto.startsWith('/') ? proyecto.foto : `/assets/proyectsgh/${proyecto.nombre}.jpg`} 
                alt={proyecto.nombre} 
                className={styles.imagenProyecto}
            />
        </div>
        
        {/* Bloque elongatedo de datos a la derecha */}
        <div className={styles.cardContenido}>

          <div className={styles["timeline-fecha"]}>{proyecto.actualizado}</div>
          <div className={styles["timeline-puesto"]}>
            <strong>{proyecto.nombre}</strong>
          </div>
          <div className={styles["timeline-empresa"]}>{proyecto.tipo}</div>
          <div className={styles["timeline-descripcion"]}>
            {proyecto.descripcion}
          </div>
          <div className={styles["tecnologias-container"]}>
            {proyecto.tecnologias.map((tech, i) => (
              <span key={i} className={styles.tecnologiaChip}>
                {tech}
              </span>
            ))}
          </div>
          <div>
            {proyecto.destacado && (
              <span className={styles.chipDestacado}>Destacado</span>
            )}
            <a 
              href={proyecto.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.linkRepo}
            >
              Ver repositorio →
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}

