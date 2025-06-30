import React from "react";
import { motion } from "framer-motion";
import { PropagateLoader } from 'react-spinners'
import { useGlobalState } from "@/context/GlobalStateContext";
import LogoTalentoUAM from '@/public/assets/logos/logo-talento-uam.svg';
import Image from "next/image";

const Loader = () => {
    const { locale, pageTransferData } = useGlobalState();
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center gap-8 bg-white/98 z-30">
            <h1>LOADER COMPONENT INT</h1>
            <Image
                src="/assets/logos/logo-talento-uam.svg" // Ruta dentro de la carpeta public
                width={120}
                height={120}
                alt="Logo Talento UAM"
            />
            <PropagateLoader size='25' color='#F58634'/>
        </div>
    );
};

export default Loader;