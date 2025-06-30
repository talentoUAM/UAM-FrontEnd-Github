'use client';
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { useGlobalState } from "@/context/GlobalStateContext";
import CustomButton from "@/components/buttons/CustomButton";
import { GoArrowRight } from "react-icons/go";
import { ClientPageRoot } from "next/dist/client/components/client-page";
import { TfiDownload } from "react-icons/tfi";
import LoaderComponentInt from "@/components/extraComponents/LoaderComponentInt";

const Transfer = () => {
    const { locale, pageTransferData } = useGlobalState();
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageInViewport, setImageInViewport] = useState(false);
    const imageRef = useRef(null);
    
    useEffect(() => {
        if (!imageRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setImageInViewport(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        observer.observe(imageRef.current);

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    if (!pageTransferData) {
        return <LoaderComponentInt />;
    }

    const { title, image, introTextContent, inovactionTextContent, conocimientoTextContent, endTextContent } = pageTransferData;

    if (!imageLoaded || !imageInViewport) {
        return <LoaderComponentInt />;
    }

    return (
        <motion.section
            className="min-h-[100dvh] flex flex-col justify-start items-start overflow-x-hidden max-w-[1920px] mx-auto pt-[70px] mb-[50px] z-10"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.3 },
            }}
        >   
            {/* Training HERO */}
            <div className="relative w-full h-[80dvh] flex flex-col justify-end" ref={imageRef}>
                {/* Hero Image */}
                {image?.url && (
                    <Image
                        className="w-full h-full object-cover"
                        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`}
                        fill
                        priority
                        loading="eager"
                        alt="Hero Image"
                        onLoadingComplete={() => setImageLoaded(true)}
                    />
                )}

                {/* Overlay */}
                <div className="absolute flex justify-center items-center w-full h-[200px] xxs:h-[300px] md:w-[45%] md:h-full bottom-0 md:inset-0 ">
                    <div className="relative z-10 w-full h-full flex flex-col items-start justify-center px-5 md:px-10 lg:px-20 py-20 text-white bg-[#35454E]/70">
                        {/* Title Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6"
                        >
                            <h1 className="text-[40px] md:text-[35px] lg:text-[40px] xl:text-[55px] text-white font-bold leading-tight uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]">
                                {title}
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* INTRO training PAGE */}
            <div className="w-full flex flex-col justify-center items-start gap-[20px] md:gap-[40px] p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] md:mt-[50px]">
                {/* Intro Text Section */}
                <div className="w-full">
                    {Array.isArray(introTextContent) && (
                        <div className="w-full ">
                            {introTextContent.map((item, index) => (
                                <div key={index} className="mb-6">
                                    {item.type === 'paragraph' && (
                                        <p className="text-[18px] text-primary leading-[24px]">
                                            {item.children.map((child, childIndex) => (
                                                <span
                                                    key={childIndex}
                                                    className={child.bold ? 'text-[20px] leading-[24px] text-primary font-roboto font-bold' : 'text-[20px] leading-[24px] text-primary font-roboto '}
                                                >
                                                    {child.text}
                                                </span>
                                            ))}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Text InCompany */}
            <div className="w-full flex flex-col justify-center items-start gap-[30px] p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] ">
                <div className="w-full flex justify-start items-center">
                    <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]">
                        {locale === 'es' ? ' Proyectos de Innovación' : 'Innovation Projects'}
                    </h2>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-4">
                    {inovactionTextContent?.map((item, index) => {
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

                        return null;
                    })}
                </div>
            </div>

            {/* Text Cursos Cortos */}
            <div className="w-full flex flex-col justify-center items-start gap-[30px] p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                <div className="w-full flex justify-start items-center">
                    <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]">
                        {locale === 'es' ? 'Transferencia de Conocimiento' : 'Knowledge Transfer'}
                    </h2>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-4">
                    {conocimientoTextContent?.map((item, index) => {
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

                        return null;
                    })}
                </div>
            </div>
            
            {/* END TEXT PAGE */}
            {Array.isArray(endTextContent) && endTextContent.length > 0 && (
                <div className="w-full flex flex-col justify-center items-start gap-[20px] md:gap-[40px] p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] md:mt-[50px]">
                    <div className="w-full">
                        <div className="w-full">
                            {endTextContent.map((item, index) => (
                                <div key={index} className="mb-6">
                                    {item.type === 'paragraph' && (
                                        <p className="text-[18px] text-primary leading-[24px]">
                                            {item.children.map((child, childIndex) => (
                                                <span
                                                    key={childIndex}
                                                    className={
                                                        child.bold
                                                            ? 'text-[20px] leading-[24px] text-primary font-roboto font-bold'
                                                            : 'text-[20px] leading-[24px] text-primary font-roboto'
                                                    }
                                                >
                                                    {child.text}
                                                </span>
                                            ))}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </motion.section>
    );
};

export default Transfer;