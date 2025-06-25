'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useLayoutEffect, useState, useContext } from "react";
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
import { IoCloseOutline } from "react-icons/io5";
//IMPORTS IMAGES:
// import Socials from "./Socials";
//IMPORTS CSS:
//IMPORT ENV:

const NavMobile = () => {

    const {mobileNav, setMobileNav } = useGlobalState(false);
    const { menuData, isLoading, locale, setLocale } = useGlobalState();
    const [selectedLocale, setSelectedLocale] = useState(locale);
    const pathname = usePathname();

    // Sincronizar el valor del select con `locale` cuando el componente se monta o `locale` cambia
    useEffect(() => {
        setSelectedLocale(locale);
    }, [locale]);

    // Cambiar idioma desde el menú select
    const handleLanguageChange = (e) => {
        const newLocale = e.target.value;
        setLocale(newLocale);  // Cambia el idioma en el contexto global
        setSelectedLocale(newLocale);  // Cambia el idioma en el select
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const menuItems = Array.isArray(menuData.data) ? menuData.data : [];

    return (
        <nav className="relative h-ful flex flex-col justify-start gap-[50px] p-8 z-100">
            {/* <div className="cursor-pointer text-white" onClick={() => setMobileNav(false)}>
            <IoCloseOutline className="text-4xl hover:rotate-180 hover:scale-[1.2] transition-all duration-1000"/>

            </div> */}
            <div className="flex justify-start itemms-center">
            <Link href='/'>
                        <Image 
                            src='/assets/logos/logo-talento-uam-color.png'
                            width={400} // Define un valor numérico en pixeles
                            height={60} // Define un valor numérico en pixeles
                            priority
                            style={{ color: '#473936' }} 
                            alt="Logo Xanasana fisioterapia"
                        />
                    </Link>
            </div>
            <ul className="flex flex-col gap-6 text-primary text-[16px] leading-[20px]">
                {
                    menuItems.map((link, index) => {
                        return (
                            <li key={index} className="" onClick={() => setMobileNav(false)}>
                                <Link  
                                    href={link.url} 
                                    className={`text-[16px] font-roboto uppercase hover:text-accent transition-all duration-300 ${
                                        pathname === link.url ? 'text-accent font-semibold' : ''
                                    }`}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            {/* <Socials 
                containerStyles="text-white text-2xl flex gap-4 justify-center" 
                // setMobileNav={setMobileNav}
            />  */}
            <div className="flex space-x-2 text-primary text-[18px] font-roboto">
                <span 
                    className={`${locale === "es" ? "text-accent font-semibold transition-all duration-300" : "cursor-pointer"}`} 
                    onClick={() => setLocale("es")}
                >
                    Es
                </span>
                <span>|</span>
                <span 
                    className={`${locale === "en" ? "text-accent font-bold transition-all duration-300" : "cursor-pointer"}`} 
                    onClick={() => setLocale("en")}
                >
                    En
                </span>
            </div>
        </nav>
    )
}

export default NavMobile;