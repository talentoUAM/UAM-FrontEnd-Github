'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { IoTriangle } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useGlobalState } from "@/context/GlobalStateContext";

const VidaUniversitaria = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { footerSectiosData } = useGlobalState();
    const { footerLaVidaUniData } = useGlobalState();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Vista de escritorio */}
            <div className="hidden w-full max-w-[270px] lg:flex flex-col justify-center items-start">
                <h1 className="text-[16px] leading-[28px] font-bold mb-4">
                    {footerSectiosData?.data?.[2]?.sectionTitle || 'Título no disponible'}
                </h1>
                <ul className="w-full flex flex-col justify-start items-start text-[16px] leading-[28px] text-primary gap-4">
                    {footerLaVidaUniData && footerLaVidaUniData.length > 0 ? (
                        footerLaVidaUniData
                            .sort((a, b) => a.id - b.id)
                            .map((link, index) => (
                                <li key={link.id || index}>
                                    <Link
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='hover:text-accent transition-all duration-300'
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))
                    ) : (
                        <li className="text-gray-500">No hay enlaces disponibles</li>
                    )}
                </ul>
            </div>

            {/* Vista móvil */}
            <div className="lg:hidden w-full border-b border-gray-200">
                {/* Encabezado del desplegable */}
                <div
                    className="flex justify-between items-center cursor-pointer py-4"
                    onClick={toggleDropdown}
                >
                    <h1 className="font-bold">Vida Universitaria</h1>
                    <IoTriangle
                        size={14}
                        className={`transition-transform duration-300 mr-4 ${
                            isOpen ? 'rotate-0' : '-rotate-90'
                        }`}
                    />
                </div>

                {/* Contenido del desplegable con animación */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <div className="flex flex-col gap-4 py-4 border-t border-gray-200">
                        <ul className="w-full flex flex-col justify-start items-start text-[16px] leading-[28px] text-primary gap-4">
                            {footerLaVidaUniData && footerLaVidaUniData.length > 0 ? (
                                footerLaVidaUniData
                                    .sort((a, b) => a.id - b.id)
                                    .map((link, index) => (
                                        <li key={link.id || index}>
                                            <Link
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='hover:text-accent transition-all duration-300'
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))
                            ) : (
                                <li className="text-gray-500">No hay enlaces disponibles</li>
                            )}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default VidaUniversitaria;
