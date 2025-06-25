'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

    const { pageContactData } = useGlobalState([]);
    // console.log('pageContactData', pageContactData);

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
                        {pageContactData.subtitle}
                    </h2>
                    <h1 className="text-primary text-[36px] md:leading-[40px] lg:text-[50px] lg:leading-[54px]   font-roboto font-bold uppercase">
                    {pageContactData.title}
                    </h1>
                    <div className="w-full flex justify-start items-start xs:items-center gap-2">
                        <IoTriangle size="14" className="text-primary font-semibold mt-[5px] xs:mt-0" style={{ transform: 'rotate(-90deg)' }} />
                        <Link href="/" className="text-[18px] leading-[22px] font-roboto font-semibold text-primary hover:underline">
                            {pageContactData.forwardLink}
                        </Link>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-start items-start  gap-2">
                    <p className="text-[18px] leading-[22px] text-primary font-roboto">
                        {pageContactData.name}
                    </p>
                    <p className="text-[18px] leading-[22px] text-primary font-roboto">
                        {pageContactData.name2}
                    </p>
                    <p className="text-[18px] leading-[22px] text-primary font-roboto">
                        {pageContactData.adress}
                    </p>
                    
                    <p className="text-[18px] leading-[22px] text-primary font-roboto">
                        <span>{pageContactData.postcode}</span>
                        <span>{pageContactData.city}</span>
                    </p>
                </div>
                <div className="w-full flex flex-col justify-start items-start  gap-2">
                    <p className="text-[18px] leading-[22px] text-primary font-roboto font-bold">
                        {pageContactData.sectionTitle}
                    </p>
                    <div className="w-full flex flex-wrap justify-start items-center gap-2">
                        <p className="text-[18px] leading-[22px] text-primary font-roboto">
                            Tel:
                        </p>
                        <Link href={`tel:${pageContactData.tel}`} className="text-[18px] leading-[22px] font-roboto text-accent-blue hover:underline">
                            {pageContactData.tel}
                        </Link>
                    </div>
                    <div className="w-full flex flex-wrap justify-start items-center gap-2">
                        <p className="text-[18px] leading-[22px] text-primary font-roboto">
                            Email:
                        </p>
                        <Link href={`mailto:${pageContactData.email}`}className="text-[18px] leading-[22px] font-roboto text-accent-blue hover:underline">
                            {pageContactData.email}
                        </Link>
                    </div>
                </div>
            </div>
 
        </motion.section>
    )
}

export default page