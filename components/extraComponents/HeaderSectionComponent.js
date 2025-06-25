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
//IMPORTS IMAGES:
//IMPORTS CSS:
//IMPORT ENV:

const HeaderSectionComponent = ({ text, textColor = 'black' }) => {


    return (
        <div className="w-full flex flex-col justify-start items-start gap-6">
            <h2 className={`relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-${textColor} uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]`}>
                {text}
            </h2>
            
        </div>
    )
}

export default HeaderSectionComponent;