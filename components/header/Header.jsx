'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useLayoutEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
//IMPORTS EXT DEPENDENCIES:
import { motion, AnimatePresence } from 'framer-motion';
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
import NavMobile from "./navbar/NavMobile";
import NavDesktop from "./navbar/NavDesktop";
//IMPORTS HOOKS:
//IMPORTS VARIANTS:
//IMPORTS COMPONENTS:
//IMPORT ICONS:
import { AiOutlineMenu } from "react-icons/ai"
import { FaPhoneAlt, FaWhatsapp  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
//IMPORTS IMAGES:
// import theLionLogoBlack from '../../../public/assets/logos/the-lion-flame-line-black.svg';
//IMPORTS CSS:
//IMPORT ENV:

const header = () => {
    const { mobileNav, setMobileNav } = useGlobalState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header 
            className={`max-w-[1920px] mx-auto w-full py-4 px-[2%] fixed bg-white lg:bg-secondary z-40 transition-shadow duration-300 ${
                isScrolled ? "shadow-lg" : ""
            }`}
        >
            <div className="w-full mx-auto flex items-center justify-between px-0">
                <Link href='/'>
                    {/* <Image 
                        className="hidden xl:block"
                        src='/assets/logos/logo-UAM-horizontal-compuesto.png'
                        width={400}
                        height={60}
                        priority
                        style={{ color: '#473936' }} 
                        alt="Logo Xanasana fisioterapia"
                    /> */}
                    <Image 
                        className="hidden xl:block"
                        src="/assets/logos/logo-UAM-horizontal-compuesto.png"
                        width={400} 
                        height={50}
                        priority
                        style={{ color: '#473936', width: 'auto', height: 'auto' }} 
                        alt="Logo UAM horizontal"
                    />
                  
                    <Image 
                        className="block xl:hidden"
                        src='/assets/logos/logo-UAM-horizontal-compuesto-mobile.png'
                        width={250}
                        height={30}
                        priority
                        style={{ color: '#473936', width: 'auto', height: 'auto' }} 
                        alt="Logo UAM horizontal mbile"
                    />
             
                </Link>

                {/* Mobile Nav Trigger */}
                <div className="lg:hidden cursor-pointer" onClick={() => setMobileNav(!mobileNav)}>
                    {/* Animated Hamburger Icon */}
                    <motion.div initial={false} animate={mobileNav ? "open" : "closed"} className="relative w-8 h-8 flex flex-col justify-center items-center space-y-2">
                        <motion.span
                            className="block h-0.5 w-full bg-primary"
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: 45, y: 10 }
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="block h-0.5 w-full bg-primary"
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="block h-0.5 w-full bg-primary"
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: -45, y: -10 }
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </div>

                {/* Mobile Nav */}
                <motion.div 
                    className="lg:hidden fixed w-[300px] bg-white/90 top-[69px] bottom-0 border-l right-0 z-50"
                    initial={{ right: '-100%' }}
                    animate={{ right: mobileNav ? 0 : '-100%' }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    exit={{ right: '-100%' }}
                >
                    <NavMobile setMobileNav={setMobileNav}/>
                </motion.div>

                {/* Desktop nav */}
                <div className="hidden lg:block">
                    <NavDesktop />
                </div>
            </div>
        </header>
    )
}

export default header;