'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useLayoutEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
//IMPORTS EXT DEPENDENCIES:
import { motion, AnimatePresence } from 'framer-motion';
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
//IMPORTS HOOKS:
//IMPORTS VARIANTS:
//IMPORTS COMPONENTS:
import HeaderSectionComponent from "./HeaderSectionComponent";
import { TfiDownload } from "react-icons/tfi";
//IMPORT ICONS:
//IMPORTS IMAGES:
//IMPORTS CSS:
//IMPORT ENV:

const ComunicationsSectionComponent = () => {
    const { pressReleasesData } = useGlobalState();
    const { homeTitleSectionsData } = useGlobalState();
//    console.log('homeTitleSectionsData', homeTitleSectionsData);

    // Base URL para archivos desde Strapi
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL?.replace("/api", "") || "http://localhost:1337";

    return (
        <section className="w-full flex flex-col justify-start items-center gap-[50px] p-[10px] sm:p-[20px] xl:p-[40px] ">
            <HeaderSectionComponent text={homeTitleSectionsData.pressReleasesSection} />
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {pressReleasesData.map((comunicado) => {
                    const fileUrl = comunicado.file?.url ? `${baseUrl}${comunicado.file.url}` : null;

                    return (
                        <div key={comunicado.id} className="w-full flex flex-col justify-between items-start p-8 bg-accent-blue/70 gap-4">
                            <div className="w-full flex flex-col justify-between items-start gap-4">
                                <span className="text-[18px] leading-[22px] text-white font-roboto ">
                                    {comunicado.preTitle}
                                </span>
                                <p className="text-[26px] leading-[28px] text-white font-playfair font-bold ">
                                    {comunicado.title}
                                </p>
                                <span className="text-[18px] tleading-[22px] text-white font-roboto ">
                                    {comunicado.description}
                                </span>
                            </div>
                            {fileUrl ? (
                                <a href={fileUrl} className="flex flex-col justify-start items-start gap-2 cursor-pointer" target="_blank" download>
                                    <div className="w-full flex justify-start items-start gap-2 group">
                                        <span className="flex justify-start items-center text-accent group-hover:text-white transition-colors duration-300">
                                            <TfiDownload size={20} />
                                        </span>
                                        <p className="text-[20px] leading-[24px] text-accent font-roboto uppercase transition-all duration-300 group-hover:text-white group-hover:font-bold">
                                            {comunicado.fileTitle || "Descargar"}
                                        </p>
                                    </div>
                                    {comunicado.file?.size && (
                                        <p className="text-[14px] leading-[24px] text-accent font-roboto uppercase transition-all duration-300 group-hover:text-white group-hover:font-bold">
                                            {comunicado.file.size} KB
                                        </p>
                                    )}
                                </a>
                            ) : (
                                <p className="text-[18px] text-white font-roboto">No hay archivo disponible</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ComunicationsSectionComponent;