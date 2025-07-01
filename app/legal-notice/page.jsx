'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';
//IMPORTS EXT DEPENDENCIES:
import { motion, AnimatePresence } from 'framer-motion';
import AccordionItem from "@/components/extraComponents/AccordionItem";
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
//IMPORTS HOOKS:
//IMPORTS VARIANTS:
//IMPORTS COMPONENTS:
//IMPORTS IMAGES:
import { IoTriangle } from "react-icons/io5";
import { FaSquare } from "react-icons/fa";
//IMPORTS CSS:
//IMPORT ENV:

const page = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);
    
    const router = useRouter();
    const { locale } = router; // Obtén el `locale` actual
    const { pageLegalNoticeData } = useGlobalState([]);
    // console.log('pageLegalNoticeData', pageLegalNoticeData);
    // console.log('Content:', pageLegalNoticeData.content);
    // Aquí puedes filtrar o usar el contenido correcto basado en `locale`
   

    return (
        <motion.section
            className="min-h-screen flex flex-col justify-start items-start overflow-x-hidden max-w-[1920px] mx-auto pt-[70px] z-10"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: .3 },
            }}
        >
            <div className="w-full flex flex-col justify-start items-start gap-6 p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                
                <div className="-full flex flex-col justify-start items-start gap-4 md:gap-10">
                    <h2 className="text-[16px] leading-[20px] md:text-[28px] mdleading-[32px] text-primary font-playfair">
                        {pageLegalNoticeData.subtitle}
                    </h2>
                    <h1 className="text-primary text-[36px] md:leading-[40px] lg:text-[50px] lg:leading-[54px]   font-roboto font-bold uppercase">
                    {pageLegalNoticeData.title}
                    </h1>
                    <div className="w-full flex justify-start items-start xs:items-center gap-2">
                        <IoTriangle size="14" className="text-primary font-semibold mt-[5px] xs:mt-0" style={{ transform: 'rotate(-90deg)' }} />
                        <Link href="/" className="text-[18px] leading-[22px] font-roboto font-semibold text-primary hover:underline">
                            {pageLegalNoticeData.forwardLink}
                        </Link>
                    </div>
                </div>
                {/* Renderizando el contenido */}
                <div className="w-full flex flex-col justify-start items-start gap-4">
                    {pageLegalNoticeData.content?.map((paragraph, index) => (
                        <p key={index} className="text-[18px] leading-[22px] text-primary font-roboto">
                            {paragraph.children?.map((child, childIndex) => (
                                <span key={childIndex} className={child.bold ? "font-bold" : ""}>
                                    {child.text}
                                </span>
                            ))}
                        </p>
                    ))}
                </div>
               
            </div>
 
        </motion.section>
    )
}

export default page;