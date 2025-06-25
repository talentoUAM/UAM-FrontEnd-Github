'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
//IMPORTS EXT DEPENDENCIES:
import { motion, AnimatePresence } from 'framer-motion';
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

    const { pageCookiesData } = useGlobalState([]);
    // console.log('pageCookiesData', pageCookiesData);

    return (
        <motion.section
            className="min-h-screen flex flex-col justify-start items-start overflow-x-hidden max-w-[1920px] mx-auto pt-[70px] z-10"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: .3 },
            }}
        >
            <div className="w-full flex flex-col justify-start items-start gap-4 p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                <h1 className="text-primary text-[28px] leading-[32px] md:text-[36px] lg:text-[50px] lg:leading-[54px]  md:leading-[40px] font-roboto font-bold uppercase">
                    {pageCookiesData.title}
                </h1>
                <div className="w-full flex justify-start items-start xs:items-center gap-2">
                    <IoTriangle size="14" className="text-primary font-semibold mt-[5px] xs:mt-0" style={{ transform: 'rotate(-90deg)' }} />
                    <Link href="/privacy-policy" className="text-[18px] leading-[22px] font-roboto font-semibold text-primary hover:underline">
                    {pageCookiesData.forwardLink}
                    </Link>
                </div>
                <p className="text-[18px] leading-[22px] text-primary font-roboto">
                    {pageCookiesData.titleTextContent}
                </p>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-6 p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] ">
                <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]  ">
                    {pageCookiesData.sectionTitle1}
                </h2>
                <p className="text-[18px] leading-[22px] text-primary font-roboto">
                    {pageCookiesData.sectionText1}
                </p>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-6 p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] ">
                <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]  ">
                    {pageCookiesData.sectionTitle2}
                </h2>
                
                <div className="text-[18px] leading-[22px] text-primary font-roboto ">
                    {/* Sección a) */}
                    {/* Renderizando el contenido */}
                    <div className="w-full flex flex-col justify-start items-start gap-4">
                        {pageCookiesData.sectionText2?.map((item, index) => {
                            // Renderizar párrafos
                            if (item.type === "paragraph") {
                                return (
                                    <p key={`${index}-${item.type}`} className="text-[18px] leading-[22px] text-primary font-roboto">
                                        {item.children?.map((child, childIndex) => (
                                            <span key={`${index}-${childIndex}`} className={child.bold ? "font-bold" : ""}>
                                                {child.text}
                                            </span>
                                        ))}
                                    </p>
                                );
                            }

                            // Renderizar listas (comprobando tanto listas no ordenadas como ordenadas)
                            if (item.type === "list") {
                                const listType = item.format === "unordered" ? "ul" : "ol";
                                return (
                                    <div key={`${index}-${item.type}`} className="ml-5">
                                        {React.createElement(
                                            listType,
                                            { className: "list-disc" },
                                            item.children?.map((listItem, listItemIndex) => (
                                                <li key={`${index}-${listItemIndex}`} className="text-[18px] leading-[22px] text-primary font-roboto">
                                                    {listItem.children?.map((child, childIndex) => (
                                                        <span key={`${index}-${listItemIndex}-${childIndex}`} className={child.bold ? "font-bold" : ""}>
                                                            {child.text}
                                                        </span>
                                                    ))}
                                                </li>
                                            ))
                                        )}
                                    </div>
                                );
                            }

                            return null; // Asegura que solo se rendericen los tipos 'paragraph' y 'list'
                        })}
                    </div>
                </div>

            </div>

            <div className="w-full flex flex-col justify-start items-start gap-6 p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]  ">
                    {pageCookiesData.sectionTitle3}
                </h2>
                <div className="w-full flex flex-col justify-start items-start gap-4">
                    {pageCookiesData.sectionText3?.map((item, index) => {
                        // Renderizar párrafos
                        if (item.type === "paragraph") {
                            return (
                                <p key={`${index}-${item.type}`} className="text-[18px] leading-[22px] text-primary font-roboto">
                                    {item.children?.map((child, childIndex) => (
                                        child.type === "link" ? (
                                            <a 
                                                key={`${index}-${childIndex}`} 
                                                href={child.url} 
                                                className="text-accent font-semibold hover:underline" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                {child.children[0]?.text || child.url}
                                            </a>
                                        ) : (
                                            <span key={`${index}-${childIndex}`} className={child.bold ? "font-bold" : ""}>
                                                {child.text}
                                            </span>
                                        )
                                    ))}
                                </p>
                            );
                        }

                        // Renderizar listas (comprobando tanto listas no ordenadas como ordenadas)
                        if (item.type === "list") {
                            const listType = item.format === "unordered" ? "ul" : "ol";
                            return (
                                <div key={`${index}-${item.type}`} className="ml-5">
                                    {React.createElement(
                                        listType,
                                        { className: "list-disc" },
                                        item.children?.map((listItem, listItemIndex) => (
                                            <li key={`${index}-${listItemIndex}`} className="text-[18px] leading-[22px] text-primary font-roboto">
                                                {listItem.children?.map((child, childIndex) => (
                                                    child.type === "link" ? (
                                                        <a 
                                                            key={`${index}-${listItemIndex}-${childIndex}`} 
                                                            href={child.url} 
                                                            className="text-accent font-semibold hover:underline" 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                        >
                                                            {child.children[0]?.text || child.url}
                                                        </a>
                                                    ) : (
                                                        <span key={`${index}-${listItemIndex}-${childIndex}`} className={child.bold ? "font-bold" : ""}>
                                                            {child.text}
                                                        </span>
                                                    )
                                                ))}
                                            </li>
                                        ))
                                    )}
                                </div>
                            );
                        }

                        return null; // Asegura que solo se rendericen los tipos 'paragraph' y 'list'
                    })}
                </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-6 p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]  ">
                {pageCookiesData.sectionTitle4}
                </h2>
                
                <div className="w-full flex flex-col justify-start items-start gap-4">
                    {pageCookiesData.sectionText4?.map((item, index) => {
                        // Renderizar párrafos
                        if (item.type === "paragraph") {
                            return (
                                <p key={`${index}-${item.type}`} className="text-[18px] leading-[22px] text-primary font-roboto">
                                    {item.children?.map((child, childIndex) => (
                                        child.type === "link" ? (
                                            <a 
                                                key={`${index}-${childIndex}`} 
                                                href={child.url} 
                                                className="text-accent font-semibold hover:underline" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                {child.children[0]?.text || child.url}
                                            </a>
                                        ) : (
                                            <span key={`${index}-${childIndex}`} className={child.bold ? "font-bold" : ""}>
                                                {child.text}
                                            </span>
                                        )
                                    ))}
                                </p>
                            );
                        }

                        // Renderizar listas (comprobando tanto listas no ordenadas como ordenadas)
                        if (item.type === "list") {
                            const listType = item.format === "unordered" ? "ul" : "ol";
                            return (
                                <div key={`${index}-${item.type}`} className="ml-5">
                                    {React.createElement(
                                        listType,
                                        { className: "list-disc" },
                                        item.children?.map((listItem, listItemIndex) => (
                                            <li key={`${index}-${listItemIndex}`} className="text-[18px] leading-[22px] text-primary font-roboto">
                                                {listItem.children?.map((child, childIndex) => (
                                                    child.type === "link" ? (
                                                        <a 
                                                            key={`${index}-${listItemIndex}-${childIndex}`} 
                                                            href={child.url} 
                                                            className="text-accent font-semibold hover:underline" 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                        >
                                                            {child.children[0]?.text || child.url}
                                                        </a>
                                                    ) : (
                                                        <span key={`${index}-${listItemIndex}-${childIndex}`} className={child.bold ? "font-bold" : ""}>
                                                            {child.text}
                                                        </span>
                                                    )
                                                ))}
                                            </li>
                                        ))
                                    )}
                                </div>
                            );
                        }

                        return null; // Asegura que solo se rendericen los tipos 'paragraph' y 'list'
                    })}
                </div>
            </div>
            
 
        </motion.section>
    )
}

export default page