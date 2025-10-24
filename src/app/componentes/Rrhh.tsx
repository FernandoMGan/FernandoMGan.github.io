// File: src/app/componentes/Rrhh.tsx
import React from 'react';
import styles from "./Rrhh.module.css";

const rrhh = [
    {
        pregunta: "Quiero contarte algo sobre mi persona ...",
        basamento: "Soy creativo, proactivo y siempre en movimiento, paralelamente crezco en formaciones académicas profesionales, técnicas y de oficios.",
        ejemplificacion: "Arranqué programando en Visual Basic hace más de 20 años, después fui profesor de computación, gasista matriculado, implementé sistemas ERP en ferreterías y distribuidoras, ahora estoy en full stack con desarrollo web moderno. No paro de aprender porque cada skill nuevo me abre puertas que ni imaginaba."
    },
    {
        pregunta: "En que empresa quiero trabajar ...",
        basamento: "Quiero trabajar en una empresa que me permita crecer profesionalmente, que valore mis habilidades y me brinde oportunidades de desarrollo y crecimiento, que podamos hacer realidad varios proyectos que tengo en carpeta y cruzar el mundo. Dinero por supuesto pero eso es beneficio colateral, un desarrollador se realiza infinitamente más al ver cuando un usuario usa sus desarrollos.",
        ejemplificacion: "He implementado sistemas que usan 50 usuarios simultáneos en empresas como Solsis (Microsoft Partner Gold), vi cómo una ferretería ordenó todo su inventario con un sistema que adapté para ellos. Esa sensación de ver algo que hiciste funcionando en la vida real es lo que me mueve. El sueldo está bien, obvio, pero poder decir '... eso lo hice yo y le cambió el día a 50 personas' no tiene precio."
    },
    {
        pregunta: "Mis fortalezas son ...",
        basamento: "Incluyen habilidades técnicas avanzadas en desarrollo de software y una capacidad comprobada para resolver problemas complejos de manera eficiente. Además, poseo excelentes habilidades de comunicación y trabajo en equipo, me permite colaborar eficazmente con colegas y clientes para alcanzar objetivos comunes. Resiliencia, Adaptación y Persistencia, solo la suerte está fuera de mi alcance, el resto sé que lo lograré.",
        ejemplificacion: "Migré sistemas legacy de Visual Basic 6 a arquitecturas modernas, administré servidores para escuelas rurales de Chubut sin internet confiable (y funcionaron), di clases a pibes que nunca habían tocado una PC y terminaron utilizando las herramientas digitales. Si algo no sé, lo investigo, lo aprendo y si me sirve lo utilizo; si algo no funciona, lo arreglo o lo tiro. Tres veces en mi vida dejé todo y empecé de cero: cuando me fui de casa, cuando me casé, cuando me fui a vivir al sur de la Argentina. Eso te enseña que los problemas son temporales, las soluciones son posibles y la satisfaccion no tiene fecha de vencimiento."
    },
    {
        pregunta: "Mis debilidades son ...",
        basamento: "Varias, relacionadas al diseño, paleta de colores, profundidad de pensamiento, ninguna que no se pueda mejorar (solo lleva tiempo). A veces me enfoco tanto en la parte técnica o de programación que descuido los aspectos financieros o de comunicación.",
        ejemplificacion: "El diseño visual no es mi fuerte, puedo hacer que algo funcione perfecto pero si me pedís que elija colores o haga una UI espectacular sin referencia, va a quedar... funcional. Sé usar Tailwind y frameworks pero no tengo el ojo de un diseñador. También me pasa que cuando estoy metido en código, puedo desconectarme del lado comercial o de presentación - estoy trabajando en balancear eso."
    },
    {
        pregunta: "Donde me veo dentro de 5 años ...",
        basamento: "En un año estaré publicando 2 proyectos con una suscripción base, al siguiente estaré publicando 2 proyectos más y ampliando las aplicaciones del primer año con skills pro y el 3er año estaré publicando una aplicación que cruzara mares.",
        ejemplificacion: "Tengo proyectos específicos en carpeta: uno es una plataforma de gestión de stock para comercios chicos (vi el dolor en las 3 implementaciones que hice en Chubut), otro es una herramienta educativa para docentes (fui profesor, sé qué falta). En un año quiero tener al menos 2 MVPs funcionando con usuarios reales pagando. En 3 años, uno de esos va a escalar fuerte. Y en 5, quiero a estar liderando un equipo que desarrolle apps."
    },    
    {
        pregunta: "Como manejo el estrés y la presión ...",
        basamento: "Como lo he manejado desde los 18 que me fui de casa, con decisión, orgullo, y sabiendo que hay un mañana mejor, solo depende de mí, los problemas son inevitables siempre habrá, siempre llegarán a ti, solo importa como los percibes y como los manejas.",
        ejemplificacion: "A los 18 me fui de casa sin nada. Tiempo después armé una familia, compramos casa y auto. Después vendimos todo y nos vinimos a 2000 km al sur sin trabajo fijo. Cada vez que se complicó, me pregunté: '¿Qué es lo peor que puede pasar?' y '¿Qué puedo hacer HOY para mejorarlo?'. Eso me baja la ansiedad y me enfoca. En el trabajo es igual: cuando hay fuego, respiro, priorizo y ejecuto."
    },    
    {
        pregunta: "Te contaré como resolví el último conflicto laboral ...",
        basamento: "Cuando surge una discusión generalmente metodológica de cómo resolver un tema, aporto mi idea, si gusta bien, si piden justificación se otorga, en el caso de que no se acepte me apego al rol que maneje en esa situación, si soy ayudante actúo, si soy oficial decido.",
        ejemplificacion: "En una implementación de sistema ERP en una ferretería, el dueño quería personalizar TODO, y manejarlo todo desde el tango gestion sin saber lo que implica manejar lotes, vencimientos, etc. Se opto por acciones modulares con excel para la implementacion de precios, cosa que en epocas de inflacion fue muy util y agilizo totalmente el proceso."
    },   
    {
        pregunta: "Qué sé habitualmente sobre la empresa que voy a trabajar ...",
        basamento: "Prefiero conocer la empresa desde adentro, investigo lo básico del perfil público pero me interesa más entender la cultura real una vez que esté trabajando. Sé que me ganaré el puesto que merezco, el resto vendrá.",
        ejemplificacion: "Leo lo que hay en la web, linkedin, algún artículo si es una empresa conocida, pero no me obsesiono. He trabajado en una Microsoft Partner Gold, en escuelas rurales, en distribuidoras y consultoras, siempre la realidad interna es distinta a lo que dice el folleto. Prefiero llegar con mente abierta, dar y hacer lo mejor, la preparacion es el mejor camino para el resultado."
    },   
    {
        pregunta: "Qué relación laboral me gustaría tener ...",
        basamento: "Productiva, fluida, económicamente rentable, con crecimiento profesional, de preferencia en una zona templada.",
        ejemplificacion: "Busco un lugar donde haya desafíos técnicos, trabajo en equipo, donde la mejora continua sea habito, donde se valore el trabajo bien hecho y se pague acorde. Me gusta trabajar en equipo, se valora la autonomía para resolver y dinamizar. El trabajo remoto / ofice, equilibrado es lo mejor, vivo en Sarmiento Chubut (es seguro, tranquilo y un buen lugar entre pueblo y ciudad)."
    }, 
    {
        pregunta: "Qué me motiva a seguir creciendo profesionalmente ...",
        basamento: "Los cambios, el futuro, quitar las limitaciones de idiomas, el progreso tecnológico y social. El saber que seré parte del mañana.",
        ejemplificacion: "Vi cómo internet cambió todo desde los 90, cómo los celulares reemplazaron a las PCs para muchos usuarios, cómo la IA está cambiando el desarrollo ahora. No quiero quedarme mirando, quiero estar ahí metido. Cada vez que aprendo una tecnología nueva (React, Next.js, SQL moderno), siento que se abre una puerta que me permite construir algo que antes no podía. Esa sensacion no tiene techo."
    },

    // {
    //     pregunta: "Tengo una esperanza, sobre ti que estás leyendo ...",
    //     basamento: "Que veas más allá de mis palabras, que tengas visión, tengas fe, porque yo quiero cambiar el mundo, solo hay una cosa que me impediría lograrlo, solo la MUERTE frenaría mi camino y no exagero, en esta vida 3 veces dejé todo, con lo puesto, me fui de casa, tiempo después me casé y formé una familia, tiempo después vendimos todo y nos vinimos al sur de Chubut, MATRIMONIO, CASA y AUTO explican la perseverancia, decisión y capacidad de análisis.",
    //     ejemplificacion: "Si estás leyendo esto, probablemente estés buscando a alguien que no solo cumpla tasks, sino que aporte visión. Tengo 51 años, 20+ en tecnología, me reinventé 3 veces desde cero y acá estoy. No te pido que confíes en palabras, te pido que me des 3 meses para demostrarte que valgo la apuesta. Si querés cambiar algo en tu industria, yo quiero estar en ese equipo. Simple."
    // }

];

export default function Rrhh() {
    return (
        <div className={styles.secctions}>
            <div className={styles.timeline}>
                {rrhh.map((item, idx) => (
                    <div className={styles["timeline-card"]} key={idx}>
                        <div className={`${styles["timeline-nivel"]}`}>
                            {item.pregunta}
                        </div>
                        <div className={styles["timeline-question"]}>
                            <div className={styles.timelineSecundario}>
                                <ul>
                                    <li className={`${styles["timeline-cardsec"]} ${styles["timeline-preguntaita"]}`}>
                                        {/* <strong className={styles["timeline-preguntaita"]}>Basamiento: </strong> */}
                                        {item.basamento}
                                    </li>
                                    <li className={`${styles["timeline-cardsec"]} ${styles["timeline-titulo"]}`}>
                                        {/* <strong className={styles["timeline-preguntaita"]}>Ejemplificación : </strong> */}
                                        {item.ejemplificacion}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

