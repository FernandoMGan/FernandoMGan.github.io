// File: src/app/componentes/Habilidades.tsx
import React from 'react';
import styles from "./Habilidades.module.css"; // Usa el mismo CSS para mantener coherencia

export default function Habilidades() {
  const habilidades = [
    {
      tipo: "TÉCNICAS",
      lista: [
        "Abstraccion y Modelado de Datos",
        "Html5, CSS3, JavaScript, TypeScript, Inteligencia Artificial, ",
        "SQL Server y MySQL (Administración y Consultas Avanzadas)",
        "React, Next.js, Tailwind CSS, Node.js",
        "AutoCAD, Figma, Adobe XD, Penpot",
        "CRUD, autenticación, OAuth, OAuth2.0",
        "Optimización y manipulación avanzada del DOM"
      ],
      estado: "Avanzado"
    },
    {
      tipo: "BLANDAS",
      lista: [
        {
          nombre: "Comunicación asertiva",
          aclaracion: "Capacidad de expresar ideas, opiniones y necesidades de manera clara, directa y respetuosa, mejorando el trabajo en equipo y la resolución de conflictos."
        },
        {
          nombre: "Resolución eficiente de problemas técnicos",
          aclaracion: "Habilidad para identificar, analizar y solucionar obstáculos rápidamente aplicando pensamiento crítico y creatividad."
        },
        {
          nombre: "Liderazgo y gestión de proyectos",
          aclaracion: "Implica guiar equipos, asignar tareas, coordinar recursos y tomar decisiones para alcanzar objetivos, fomentando colaboración y crecimiento."
        },
        {
          nombre: "Adaptabilidad y aprendizaje autónomo",
          aclaracion: "Capacidad de ajustarse a cambios y aprender nuevas tecnologías o métodos de forma proactiva y autosuficiente."
        }
      ],
      estado: "Destacado"
    },
    {
      tipo: "Tecnología Informática",
      lista: [
        "AutoCAD 2012 2D/3D (Nivel Avanzado)",
        "Microsoft SQL Server (6.5, 7.xx, 2000, 2005)",
        "Microsoft Exchange (5.5, 2000, 2003)",
        "Visual Basic 6",
        "Crystal Reports 8.xx",
        "TCP-IP, Redes Nivel 5",
        "Microsoft Office Suite (Access, Word, Excel, Outlook)",
        "Linux (Red Hat 5.2)",
        "Microsoft ISA Server 2004"
      ],
      estado: "Avanzado"
    },
    {
      tipo: "Oficios Técnicos",
      lista: [
        "Gasista Matriculado de 2da categoría",
        "Instalador Sanitarista",
        "Instalaciones Eléctricas (30+ obras nuevas, 60+ remodelaciones)",
        "Plomería tradicional y moderna (Plomo, Rosca y Fusión)",
        "Herrería y Soldadura",
        "Carpintería Metálica y Madera"
      ],
      estado: "Avanzado"
    }
  ];
  return (
    <div className={styles.secctions}>
      <div className={styles.timeline}>
        {habilidades.map((hab, idx) => (
          <div className={styles["timeline-card"]} key={idx}>
            <div className={styles["timeline-nivel"]}>{hab.tipo}</div>
            <ul className={styles["timeline-titulo"]}>
              {hab.lista.map((item, i) => (
                typeof item === "string"
                  ? <li key={i}><strong>{item}</strong></li>
                  : (
                    <li key={i}>
                      <strong>{item.nombre}</strong>
                      {/* Render condicional: mostrar aclaración si existe */}
                      {item.aclaracion && (
                        <div className={styles.aclaracion}>{item.aclaracion}</div>
                      )}
                    </li>
                  )
              ))}
            </ul>
            <div>
              <span
                className={
                  hab.estado === "Avanzado"
                    ? styles.chipCompleto
                    : styles.chipRecibido
                }
              >
                {hab.estado}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
