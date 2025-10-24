// File : src/app/componentes/Experiencia.tsx
import React from 'react'
import styles from "./Experiencia.module.css";

export default function Experiencia() {
  const experiencias = [
    {
      fecha: "2018 - 2021",
      puesto: "Contratista / Consultor / Implementador de sistemas",
      empresa: "Independiente",
      descripcion: "Consultoría e implementación de sistemas informáticos para diversas empresas. Desarrollo de soluciones personalizadas y soporte técnico especializado."
    },
    {
      fecha: "2017",
      puesto: "Manejo de personal",
      empresa: "CEFAM - Cerecera",
      descripcion: "Gestión y coordinación de personal en centro de formación. Supervisión de equipos de trabajo y optimización de procesos."
    },
    {
      fecha: "2015 - 2016",
      puesto: "Mantenimiento de Sistemas",
      empresa: "Instituto Gobernador Fontana - Sarmiento, Chubut",
      descripcion: "Mantenimiento y soporte de sistemas informáticos institucionales. Gestión de redes y equipamiento tecnológico educativo."
    },
    {
      fecha: "2012 - 2014",
      puesto: "Profesor de computación / Referente TIC",
      empresa: "Instituto Gobernador Fontana / Instituto Superior de Formación Docente",
      descripcion: "Enseñanza de informática en niveles educativos diversos. Referente en tecnologías de la información y comunicación, implementando nuevas metodologías digitales."
    }, 
    {
    fecha: "2013",
    puesto: "Administrador de servidores",
    empresa: "Conectar Igualdad - Chubut región 5",
    descripcion: "Administración de servidores en escuelas rurales. Implementación y mantenimiento de infraestructura tecnológica educativa en zonas remotas."
    },
    {
    fecha: "2001-2011",
    puesto: "Programador Senior",
    empresa: "Fagra SA - Buenos Aires",
    descripcion: "Desarrollo especializado en Visual Basic 6, soporte y mantenimiento interno de sistemas críticos. Resolución de problemas complejos y optimización de aplicaciones."
    },
    {
    fecha: "Antes de 2001",
    puesto: "Jefe de infraestructura",
    empresa: "Solisis Software Factory SA - Buenos Aires",
    descripcion: "Administración de infraestructura completa, gestión de servidores, y desarrollo de sistemas multiusuario. Liderazgo técnico en proyectos de gran envergadura."
    }
  ];    
  return (
    <div className={styles.secctions}>
      <div className={styles.timeline}>
        {experiencias.map((exp, idx) => (
          <div className={styles["timeline-card"]} key={idx}>
            <div className={styles["timeline-fecha"]}>{exp.fecha}</div>
            <div className={styles["timeline-puesto"]}><strong>{exp.puesto}</strong></div>
            <div className={styles["timeline-empresa"]}>{exp.empresa}</div>
            <div className={styles["timeline-descripcion"]}>{exp.descripcion}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
