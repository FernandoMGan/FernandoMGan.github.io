// File : src/app/componentes/Ceo.tsx
import React from 'react'
import styles from "./Ceo.module.css";

export default function Ceo() {
    const aplicacion = [
        {
            nombre: "APP 01 ...",
            descripcion: "Gestión de ....",
            dificultad_desarrollo: "3",
            inversion_inicial: "8,000 - 16,000 USD, ROI: 6-12 meses",
            modelo_negocios: "B2B y B2C según segmento, con opción freemium.",
            tamano_mercado: "Mercado global: 546M USD (2025), con 700M+ usuarios potenciales esperados para booking online",
            ingreso_anual: "Calculo Basado en una cuota de 500mil usuarios en 1 año,  900,000 USD (premium) + publicidad/donaciones posibles",
            tipo_mercado: "Comercial, servicios profesionales, salud.",
            stack_backend: "Node.js, Django",
            stack_frontend: "React, Vue.js",
            stack_mobile: "React Native, Flutter",
            infra_bd_data: "PostgreSQL",
            infra_bd_suscriptores: "PostgreSQL"
        },
        {
            nombre: "APP 02 ...",
            descripcion: "Organización y seguimiento ....",
            dificultad_desarrollo: "4",
            inversion_inicial: "10,000 - 18,000 USD, ROI: 8-14 meses",
            modelo_negocios: "B2B contratos anuales.",
            tamano_mercado: "Submercado de construcción (10.76B USD en 2025). Target: PyMEs constructoras (500K+ empresas globales)",
            ingreso_anual: "Calculo Basado en una cuota de 500mil usuarios en 1 año,  2,400,000 USD (ticket bajo), hasta 9,000,000 USD (ticket alto)",
            tipo_mercado: "Constructoras, servicios técnicos.",
            stack_backend: "Node.js, Django",
            stack_frontend: "React, Vue.js",
            stack_mobile: "React Native, Flutter",
            infra_bd_data: "PostgreSQL, Redis",
            infra_bd_suscriptores: "PostgreSQL"
        },
        {
            nombre: "AP 03 ...",
            descripcion: "Gestión de ....",
            dificultad_desarrollo: "4",
            inversion_inicial: "12,000 - 22,000 USD, ROI: 12-18 meses",
            modelo_negocios: "B2B SaaS, contratos anuales.",
            tamano_mercado: "Mercado global: 2.51B USD (2025), creciendo a 4.79B USD (2032). Usuarios potenciales: 2M+ PyMEs",
            ingreso_anual: "Calculo Basado en una cuota de 500mil usuarios en 1 año,  3,000,000 USD",
            tipo_mercado: "Retail, almacenes, comercios.",
            stack_backend: "Node.js, Laravel",
            stack_frontend: "React, Next.js",
            stack_mobile: "React Native",
            infra_bd_data: "PostgreSQL",
            infra_bd_suscriptores: "PostgreSQL"
        },
        {
            nombre: "AP 04 ...",
            descripcion: "Seguimiento y gestión de ....",
            dificultad_desarrollo: "5",
            inversion_inicial: "10,000 - 16,000 USD, ROI: 10-16 meses",
            modelo_negocios: "B2B contratos recurrentes.",
            tamano_mercado: "Mercado global: 6.56B USD (2025), proyectado 13.39B USD (2034). Empresas objetivo: 1M+ PyMEs",
            ingreso_anual: "Calculo Basado en una cuota de 500mil usuarios en 1 año,  1,990,000 USD (ticket bajo), hasta 9,000,000 USD (ticket alto)",
            tipo_mercado: "Empresas medianas, soporte técnico.",
            stack_backend: "Node.js, Django",
            stack_frontend: "React, Next.js",
            stack_mobile: "React Native, Flutter",
            infra_bd_data: "PostgreSQL, Redis",
            infra_bd_suscriptores: "PostgreSQL"
        },
        {
            nombre: "AP 05 ...",
            descripcion: "Gestión, mantenimiento y administración de ....",
            dificultad_desarrollo: "6",
            inversion_inicial: "14,000 - 24,000 USD, ROI: 14-20 meses",
            modelo_negocios: "B2C suscripción mensual.",
            tamano_mercado: "Mercado global: 512M USD (2024), proyectado 1.15B USD (2033). Usuarios potenciales: 10M+ propietarios",
            ingreso_anual: "Calculo Basado en una cuota de 500mil usuarios en 1 año,  2,700,000 USD",
            tipo_mercado: "Servicios, mantenimiento residencial.",
            stack_backend: "Node.js",
            stack_frontend: "React",
            stack_mobile: "React Native",
            infra_bd_data: "PostgreSQL",
            infra_bd_suscriptores: "PostgreSQL"
        },
        {
            nombre: "AP 06 ...",
            descripcion: "Plataforma social ....",
            dificultad_desarrollo: "6",
            inversion_inicial: "18,000 - 30,000 USD, ROI: 16-28 meses",
            modelo_negocios: "B2C freemium, publicidad.",
            tamano_mercado: "Submercado de redes sociales (98.37B USD en 2025). Target nicho: 5-20M usuarios potenciales",
            ingreso_anual: "Calculo Basado en una cuota de 500mil usuarios en 1 año,  400,000 USD (publicidad), + premium",
            tipo_mercado: "Entretenimiento, social.",
            stack_backend: "Node.js, MongoDB",
            stack_frontend: "React, Next.js",
            stack_mobile: "React Native",
            infra_bd_data: "MongoDB",
            infra_bd_suscriptores: "MongoDB"
        },
        {
            nombre: "AP 07 ...",
            descripcion: "Red social de ....",
            dificultad_desarrollo: "7",
            inversion_inicial: "22,000 - 36,000 USD, ROI: 18-30 meses",
            modelo_negocios: "B2C freemium, monetización de contenido.",
            tamano_mercado: "Nicho paranormal/misterio: 10-30M usuarios potenciales globales interesados en fenómenos extraterrestres",
            ingreso_anual: "Calculo Basado en una cuota de 500mil usuarios en 1 año,  400,000 USD (publicidad) + 1,080,000 USD (premium aprox)",
            tipo_mercado: "Entretenimiento, nicho social.",
            stack_backend: "Node.js, MongoDB",
            stack_frontend: "React, Next.js",
            stack_mobile: "React Native, Flutter",
            infra_bd_data: "MongoDB",
            infra_bd_suscriptores: "MongoDB"
        },
        {
            nombre: "AP 08 ...",
            descripcion: "Plataforma social ....",
            dificultad_desarrollo: "8",
            inversion_inicial: "28,000 - 48,000 USD, ROI: 20-32 meses",
            modelo_negocios: "B2C freemium, donaciones.",
            tamano_mercado: "Audiencia religiosa digital global: 50-100M usuarios potenciales (jóvenes religiosos 18-45 años)",
            ingreso_anual: "Calculo Basado en una cuota de 500mil usuarios en 1 año,  1,500,000 USD (donaciones) + 1,260,000 USD (premium)",
            tipo_mercado: "Interreligioso, educativo.",
            stack_backend: "Python FastAPI, MongoDB, PostgreSQL",
            stack_frontend: "React, Next.js",
            stack_mobile: "React Native, Flutter",
            infra_bd_data: "MongoDB, PostgreSQL",
            infra_bd_suscriptores: "MongoDB, PostgreSQL"
        },
        {
            nombre: "AP 09 ...",
            descripcion: "Plataforma IA ....",
            dificultad_desarrollo: "9",
            inversion_inicial: "36,000 - 72,000 USD, ROI: 18-30 meses",
            modelo_negocios: "B2B premium mensual.",
            tamano_mercado: "Mercado IA en agricultura: 1.74B USD (2025), creciendo a 3.75B USD (2030). Target: 200K+ productores",
            ingreso_anual: "Calculo Basado en una cuota de 500mil usuarios en 1 año,  3,995,000 USD",
            tipo_mercado: "Agro, gran escala.",
            stack_backend: "Python FastAPI, TimescaleDB",
            stack_frontend: "React",
            stack_mobile: "Flutter",
            infra_bd_data: "TimescaleDB, PostgreSQL",
            infra_bd_suscriptores: "PostgreSQL"
        },
        {
            nombre: "AP 10 ...",
            descripcion: "Plataforma IA ....",
            dificultad_desarrollo: "8",
            inversion_inicial: "30,000 - 65,000 USD, ROI: 20-36 meses",
            modelo_negocios: "B2B premium por proyecto.",
            tamano_mercado: "Mercado software construcción: 10.76B USD (2025), proyectado 21B USD (2032). Target: 100K+ empresas",
            ingreso_anual: "Calculo Basado en una cuota de 500mil usuarios en 1 año,  5,995,000 USD",
            tipo_mercado: "Construcción, obras civiles.",
            stack_backend: "Python FastAPI, PostgreSQL",
            stack_frontend: "React, Angular",
            stack_mobile: "Flutter",
            infra_bd_data: "PostgreSQL, TimescaleDB",
            infra_bd_suscriptores: "PostgreSQL"
        },
        {
            nombre: "AP 11 ...",
            descripcion: "Plataforma social IA ....",
            dificultad_desarrollo: "9",
            inversion_inicial: "46,000 - 90,000 USD, ROI: 22-36 meses",
            modelo_negocios: "B2C freemium, merchandising.",
            tamano_mercado: "Nicho espiritualidad/misticismo digital: 20-50M usuarios potenciales interesados en contenido místico",
            ingreso_anual: "Calculo Basado en una cuota de 500mil usuarios en 1 año,  1,440,000 USD (premium) + 2,500,000 USD (merchandising)",
            tipo_mercado: "Religioso, nicho social.",
            stack_backend: "Python FastAPI, MongoDB",
            stack_frontend: "React, Three.js",
            stack_mobile: "Flutter",
            infra_bd_data: "MongoDB, PostgreSQL",
            infra_bd_suscriptores: "MongoDB, PostgreSQL"
        },
        {
            nombre: "IA Salud Mental",
            descripcion: "App de IA para gestión de salud mental, videollamadas y análisis de voz/texto.",
            dificultad_desarrollo: "10",
            inversion_inicial: "60,000 - 120,000 USD, ROI: 24-40 meses",
            modelo_negocios: "B2C freemium, suscripción premium.",
            tamano_mercado: "Mercado global: 8.87B USD (2025), proyectado 17.52B USD (2030). Usuarios potenciales: 100M+ personas",
            ingreso_anual: "Calculo Basado en una cuota de 500mil usuarios en 1 año, 2,700,000 USD (premium) + 1,470,000 USD (terapia)",
            tipo_mercado: "Salud, terapia, bienestar.",
            stack_backend: "Python FastAPI optimizado, HIPAA Compliance",
            stack_frontend: "React, Angular",
            stack_mobile: "Flutter",
            infra_bd_data: "PostgreSQL, almacenamiento especial voz/texto",
            infra_bd_suscriptores: "PostgreSQL"
        }
    ];

    return (
        <>
            <div className={styles.secctions}>
                <div className={styles.secctions}>
                    <div>
                        Aquí encontrarás una lista de <span className={styles.textDestacado}>8 aplicaciones</span> que actualmente se encuentran en etapa de abstracción y modelado. Estoy abordando el desarrollo comenzando por las de menor complejidad. Por razones de confidencialidad, los detalles específicos de cada producto permanecen reservados; sin embargo, mi intención es formalizarlos en alianza con una empresa que valore crecimiento conjunto.
                        <br /><br />
                        Considero clave avanzar con un esquema que contemple:
                        <ul className={styles.listaBeneficios}>
                            <li><span className={styles.textDestacado}>Garantía de salario durante al menos 1 año.</span></li>
                            <li><span className={styles.textDestacado}>Participación en acciones y/o dividendos de la empresa desarrolladora.</span></li>
                            <li><span className={styles.textDestacado}>Un 3% de ganancia por cada suscripción o paquete vendido de los productos aportados.</span></li>
                        </ul>
                        <br />
                        Para el análisis te compartiré previsiones de <span className={styles.textDestacado}>cuota de mercado</span>, <span className={styles.textDestacado}>ventas estimadas</span> y otros <span className={styles.textDestacado}>indicadores financieros relevantes</span>, tal como exige la toma de decisiones fundamentada para inversores en tecnología.
                    </div>
                </div>
                <div className={styles.secctions}>
                    <div className={styles.timeline}>
                        {aplicacion.map((item, idx) => (
                            <div className={styles['timeline-card']} key={idx}>
                                <h3 className={`${styles["timeline-nivel"]}`}>{item.nombre}</h3>
                                <ul className={styles['timeline-lista']}>
                                    <li className={`${styles.indicInv} ${styles['timeline-cardsec']}`}><strong>Descripción:</strong> {item.descripcion}</li>
                                    <li className={`${styles.indicInv} ${styles['timeline-cardsec']}`}><strong>Dificultad de desarrollo:</strong> {item.dificultad_desarrollo}/10</li>
                                    <li className={`${styles.indicInv} ${styles['timeline-cardsec']}`}><strong>Inversión Inicial:</strong> {item.inversion_inicial}</li>
                                    <li className={`${styles.indicInv} ${styles['timeline-cardsec']}`}><strong>Modelo de Negocios:</strong> {item.modelo_negocios}</li>
                                    <li className={`${styles.indicInv} ${styles['timeline-cardsec']}`}><strong>Tamaño del Mercado:</strong> {item.tamano_mercado}</li>
                                    <li className={`${styles.indicInv} ${styles['timeline-cardsec']}`}><strong>Ingreso Anual:</strong> {item.ingreso_anual}</li>

                                    <li className={`${styles.indicInv} ${styles['timeline-cardsec']}`}><strong>Tipo de Mercado:</strong> {item.tipo_mercado}</li>
                                    <li className={`${styles.indicInv} ${styles['timeline-cardsec']}`}><strong>Stack Backend:</strong> {item.stack_backend}</li>
                                    <li className={`${styles.indicInv} ${styles['timeline-cardsec']}`}><strong>Stack Frontend:</strong> {item.stack_frontend}</li>
                                    <li className={`${styles.indicInv} ${styles['timeline-cardsec']}`}><strong>Stack Mobile:</strong> {item.stack_mobile}</li>
                                    <li className={`${styles.indicInv} ${styles['timeline-cardsec']}`}><strong>BD para DATA:</strong> {item.infra_bd_data}</li>
                                    <li className={`${styles.indicInv} ${styles['timeline-cardsec']}`}><strong>BD para Suscriptores:</strong> {item.infra_bd_suscriptores}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}