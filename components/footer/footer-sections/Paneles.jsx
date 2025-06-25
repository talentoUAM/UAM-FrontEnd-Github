'use client';

import React from 'react';
import Link from 'next/link';
import FooterSocials from '../FooterSocials';
import { useGlobalState } from "@/context/GlobalStateContext";

const Paneles = () => {
    const { footerSectiosData } = useGlobalState();
    const { footerPanelsData } = useGlobalState();

    return (
        <div className="w-full flex flex-col justify-center items-end">
            {/* Verifica si footerSectiosData tiene datos antes de acceder a ellos */}
            <h1 className="w-full lg:w-[90%] text-[16px] leading-[28px] mb-4 font-bold">
                {footerSectiosData?.data?.[0]?.sectionTitle || 'Título no disponible'}
            </h1>
            
            <ul className="w-full lg:w-[90%] flex flex-col justify-start items-start text-[16px] leading-[28px] text-primary gap-4">
                {/* Verifica si footerPanelsData está disponible antes de intentar ordenarlo y mapearlo */}
                {footerPanelsData && footerPanelsData.length > 0 ? (
                    footerPanelsData
                        .sort((a, b) => a.id - b.id) // Ordena por 'id' ascendente
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

            <div className="w-full flex lg:hidden mt-8 mb-8 lg:mt-0 lg:mb-0">
                <FooterSocials />
            </div>
            <div className="lg:hidden w-full mb-[-10px] border-b border-[#dee2de] lg:border-none"></div>
        </div>
    );
};

export default Paneles;

