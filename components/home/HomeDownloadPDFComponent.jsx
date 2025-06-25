'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState,} from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
//IMPORTS EXT DEPENDENCIES:
import { motion, AnimatePresence } from 'framer-motion';
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
//IMPORTS HOOKS:
//IMPORTS VARIANTS:
//IMPORTS COMPONENTS:
//IMPORT ICONS:
import { TfiDownload } from "react-icons/tfi";
//IMPORTS IMAGES:
// import Socials from "./Socials";
//IMPORTS CSS:
//IMPORT ENV:

const HomeDownloadPDFComponent = () => {

    const { homeHeroDownloadData } = useGlobalState();
    // console.log(homeHeroDownloadData);

    // Construcción de la URL correcta
   // Construcción de la URL
   // Validación inicial
  if (!homeHeroDownloadData?.file?.url) {
    // console.error("El archivo no está disponible o no tiene una URL válida.");
    return null; // Renderiza algo alternativo o simplemente no muestra nada
  }

  // Construcción de la URL
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL?.replace("/api", "") || "http://localhost:1337";
  const fileUrl = `${baseUrl}${homeHeroDownloadData.file.url}`;
  

  return (
    <section className="w-full flex justify-center items-center  p-[10px] sm:p-[20px] xl:p-[40px]">
        <div className="w-full flex flex-col justify-center items-start p-8 bg-accent-blue/70 gap-4">
            <span className="text-[18px] leading-[22px] text-white font-roboto ">
                { homeHeroDownloadData.preTitle }
            </span>
            <p className="text-[24px] leading-[24px] text-white font-playfair font-bold ">
                { homeHeroDownloadData.title }
            </p>
            <span className="text-[18px] tleading-[22px] text-white font-roboto ">
                { homeHeroDownloadData.description }
            </span>
            <a href={`${fileUrl}`} className="cursor-pointer" target="_blank" download>
                <div className="w-full flex justify-start items-center gap-2 group">
                    <span className="flex justify-start items-center text-accent group-hover:text-white transition-colors duration-300">
                        <TfiDownload size={20} />
                    </span>
                    <p className="text-[20px] leading-[24px] text-accent font-roboto uppercase transition-all duration-300 group-hover:text-white group-hover:font-bold">
                        { homeHeroDownloadData.fileTitle }
                    </p>
                    <p className="text-[20px] leading-[24px] text-accent font-roboto uppercase transition-all duration-300 group-hover:text-white group-hover:font-bold">
                        { homeHeroDownloadData.file.size }
                    </p>

                </div>
            </a>
        </div>
    </section>
  )
}

export default HomeDownloadPDFComponent