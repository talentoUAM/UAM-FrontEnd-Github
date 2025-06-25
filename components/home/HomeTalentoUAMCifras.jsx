'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
import HeaderSectionComponent from "../extraComponents/HeaderSectionComponent";

// Variantes para la animación del contenedor y los elementos
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5, // Retraso progresivo para los hijos
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Estado inicial oculto
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } },
};

const HomeTalentoUAMCifras = () => {
    // Estados globales
    const { homeTitleSectionsData } = useGlobalState();
    const { homeCifrasTalentoData } = useGlobalState();

    // Depuración para verificar los datos
    // console.log('homeCifrasTalentoData:', homeCifrasTalentoData);

    // Función para manejar el contador
    const Counter = ({ endValue, startCounting }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!startCounting) return; // Solo empieza a contar cuando el componente es visible

            let start = 0;
            const end = parseInt(endValue, 10); // Convertimos el valor final a número
            const duration = 2000; // Duración en milisegundos
            const incrementTime = 20; // Intervalo de tiempo para incrementar el valor

            const step = Math.ceil(end / (duration / incrementTime));

            const interval = setInterval(() => {
                start += step;
                if (start >= end) {
                    start = end;
                    clearInterval(interval);
                }
                setCount(start);
            }, incrementTime);

            return () => clearInterval(interval); // Limpieza al desmontar
        }, [startCounting, endValue]);

        return <>{count.toLocaleString()}</>; // Formatea el número con separadores
    };

    return (
        <section className="w-full flex flex-col justify-start items-center gap-[30px] p-[10px] pb-[20px] sm:p-[20px] sm:pb-[40px] xl:p-[40px] xl:pb-[80px] bg-accent-blue/70">
            <div className="w-full flex flex-col justify-center items-center gap-8">
                {/* Título de la sección */}
                <HeaderSectionComponent text={homeTitleSectionsData?.cifrasSection || "Cifras"} textColor="white" />

                <motion.div
                    className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }} // Activa la animación al entrar un 30% en el viewport
                    variants={containerVariants}
                >
                    {/* Renderizado de los datos */}
                    {homeCifrasTalentoData && homeCifrasTalentoData.length > 0 ? (
                        homeCifrasTalentoData.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col justify-center items-center p-4 border border-accent shadow-md rounded-md"
                                variants={itemVariants}
                            >
                                {/* Animación del número */}
                                <div className="text-accent text-4xl font-bold mb-2">
                                    <span className="text-[40px] font-roboto font-bold text-accent">{stat.preSymbol}</span>
                                    <Counter endValue={stat.value} startCounting={true} />
                                    <span className="text-[40px] font-roboto font-bold text-accent">{stat.postSymbol}</span>
                                </div>
                                <p className="text-[18px] text-center text-white font-roboto font-bold">{stat.label}</p>
                            </motion.div>
                        ))
                    ) : (
                        // Si no hay datos disponibles
                        <p className="text-white">Cargando datos...</p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default HomeTalentoUAMCifras;
