'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState } from "react";
import Image from "next/image";
//IMPORTS EXT DEPENDENCIES:
import { motion, AnimatePresence } from 'framer-motion';
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
//IMPORTS HOOKS:
//IMPORTS VARIANTS:
//IMPORTS COMPONENTS:
import HeroHomeComponent from '@/components/home/HeroHomeComponent'
import HomeDownloadPDFComponent from "@/components/home/HomeDownloadPDFComponent";
import NewsSectionComponent from "@/components/extraComponents/NewsSectionComponent";
import ComunicationsSectionComponent from "@/components/extraComponents/ComunicationsSectionComponent";
//IMPORTS IMAGES:

//IMPORT  ICONS;
import { GoArrowDown, GoArrowDownLeft, GoArrowDownRight, GoArrowLeft, GoArrowRight, GoArrowSwitch, GoArrowUp, GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import ScientificNewsSectionComponent from "@/components/extraComponents/ScientificNewsSectionComponent";
import HomeTalentoUAMCifras from "@/components/home/HomeTalentoUAMCifras";
import HomeAboutSectionComponent from "@/components/home/HomeAboutSectionComponent";
import Loader from "@/components/extraComponents/LoaderComponent";
//IMPORTS CSS:
//IMPORT ENV:

export default function Home() {

  const { isMobile, setIsMobile, isLoading, setIsLoading } = useGlobalState();

  

    useEffect(() => {
        // Detectar si es móvil
        const checkIfMobile = () => {
            const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
            const isMobileDevice = /android|iphone|ipad|ipod|windows phone|blackberry|mobile/i.test(userAgent);
            setIsMobile(isMobileDevice);
        };

        checkIfMobile();
    }, []);

    const handleClick = () => {
        if (isMobile) {
            // Redirigir a WhatsApp
            window.open('https://wa.me/34666666666', '_blank'); // Reemplaza con tu número de WhatsApp
        } else {
            // Abrir el cliente de correo electrónico
            window.location.href = 'mailto:hola@talento-uam.com'; // Reemplaza con tu correo electrónico
        }
    };


    return (
      <motion.section
            className="min-h-[100dvh] flex flex-col justify-start items-start overflow-x-hidden max-w-[1920px] mx-auto pt-[70px] gap-[40px]  z-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: .3 },
            }}
        >
        {/* <h1 className="pt-[75px] px-[3.5%]">hola</h1>
        <div className="w-full o flex justify-center items-center gap-2">
          <GoArrowDown />
          <GoArrowDownLeft />
          <GoArrowDownRight />
          <GoArrowLeft />
          <GoArrowRight />
          <GoArrowSwitch />
          <GoArrowUp />
          <GoArrowUpLeft />
          <GoArrowUpRight />
        </div> */}
        {isLoading && <Loader />} 
        <HeroHomeComponent />
        <HomeAboutSectionComponent />
        <HomeDownloadPDFComponent />
        <NewsSectionComponent />
        <ComunicationsSectionComponent />
        <ScientificNewsSectionComponent />
        <HomeTalentoUAMCifras />
      </motion.section>
    );
}
