//IMPORTS REACT/NEXT DEPENDENCIES:
'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState,} from "react";
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


const About = () => {
    const { locale, pageAboutData, pageAboutBlocks, pageAboutTeamData, pageAboutTeamMembersData, pageAboutTeamColaboratorsData } = useGlobalState();
    // console.log('pageAboutBlocks', pageAboutBlocks);
    // console.log('pageAboutTeamData', pageAboutTeamData);
    // console.log('pageAboutTeamColaboratorsData', pageAboutTeamColaboratorsData);
    const sortedMembersData = pageAboutTeamMembersData.sort((a, b) => a.id - b.id);
    const sortedColaboratorsData = pageAboutTeamColaboratorsData.sort((a, b) => a.id - b.id);
    
    // Validación de datos antes de renderizar
    if (!pageAboutData || !pageAboutBlocks) {
        return <p>Loading...</p>;
    }

    const { title, image, introTextContent } = pageAboutData;

    return (
        <motion.section
            className="min-h-[100dvh] flex flex-col justify-start items-start overflow-x-hidden max-w-[1920px] mx-auto pt-[70px] mb-[50px] z-10"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.3 },
            }}
        >   
            {/* ABOUT HERO */}
            <div className="relative w-full h-[80dvh] flex flex-col justify-end">
                {/* Hero Image */}
                {image && (
                    <Image
                        className="w-full h-full object-cover"
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${pageAboutData.image.url}`} 
                        fill
                        priority
                        alt="Hero Image"
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

            {/* INTRO ABOUT PAGE */}
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
                {/* Page About Blocks Section */}
                <div className="w-full grid grid-cols-1  ">
                    
                    {pageAboutBlocks.map((block, index) => (
                        <div
                            key={index}
                            className={`w-full flex flex-col md:flex-row ${
                                index % 2 !== 0 ? 'md:flex-row-reverse' : '' // Alternar posición de la imagen
                            } items-start  bg-white py-2 `}
                        >
                            {/* Image */}
                            {block.Image && (
                                <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[250px] h-full relative overflow-hidden">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${block.Image.url}`}
                                        alt={block.title}
                                        layout="fill" // Llenar todo el contenedor
                                        objectFit="cover" // Aplicar el comportamiento de "cover"
                                        priority // Asegurar la carga optimizada
                                    />
                                </div>
                            )}
                            
                            {/* Content */}
                            <div className="w-full md:w-1/2 h-full bg-accent-blue/70 p-8">
                                {/* Title */}
                                <h3 className="text-[28px] leading-[28px] font-bold text-accent mb-4">
                                    {block.title}
                                </h3>

                                {/* Text Content */}
                                {Array.isArray(block.textContent) &&
                                    block.textContent.map((content, contentIndex) => (
                                        <p key={contentIndex} className="text-gray-700 mb-2">
                                            {content.children.map((child, childIndex) => (
                                                <span
                                                    key={childIndex}
                                                    className={child.bold ? 'text-[20px] leading-[24px] text-white font-roboto font-bold' : 'text-[20px] leading-[24px] text-white font-roboto '}
                                                >
                                                    {child.text}
                                                </span>
                                            ))}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* TEAM */}
            <div className="w-full flex flex-col justify-center items-start p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                <div className="w-full flex justify-start items-center mb-[30px] md:mb-[40px">
                    <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]  ">
                        {locale === 'es' ? 'Nuestro Equipo' : 'Our Team'}
                    </h2>
                </div>
                <div className="w-full grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 gap-6">
                    {pageAboutTeamData.map((member, index) => (
                        <div
                            key={index}
                            className="w-full bg-accent-blue/70 shadow-md  p-6 flex flex-col items-center text-center"
                        >
                            {/* Avatar */}
                            <div className="w-48 h-48 border-4  border-accent-blue rounded-full overflow-hidden mb-4">
                                <img
                                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${member.avatar.url}`}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Name */}
                            <h3 className="text-accent-blue text-[24px] font-roboto font-bold mb-2">{member.name}</h3>

                            {/* Cargo */}
                            <p className="text-accent-blue font-bold mb-2">{member.cargo}</p>

                            {/* Email */}
                            <a
                                href={`mailto:${member.email}`}
                                className="text-white text-[18px] font-roboto font-bold hover:underline mb-2"
                            >
                                {member.email}
                            </a>

                            {/* Teléfono */}
                            <a
                                href={`tel:${member.tel}`}
                                className="text-white text-[18px] font-roboto font-bold hover:underline mb-2"
                            >
                                {member.tel}
                            </a>

                            {/* Portal Link */}
                            <a
                                href={member.portalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent text-[22px] font-roboto font-semibold hover:underline"
                            >
                                Portal UAM
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* MEMBERS */}
            <div className="w-full flex flex-col justify-center items-start p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                <div className="w-full flex justify-start items-center mb-[30px] md:mb-[40px">
                    <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]  ">
                        {locale === 'es' ? ' Miembros del Centro:' : 'Members of the Center:'}
                    </h2>
                </div>
                <div className="w-full flex justify-start items-center">
                    <div className="w-full py-6">
                        {/* Encabezado */}
                        <div className="grid grid-cols-2 border-b-2 mb-4">
                            <div className="text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] font-bold text-accent-blue font-roboto fontbold bg-accent pl-4 py-2">Nombre y Apellidos del miembro</div>
                            <div className="text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] font-bold text-accent-blue font-roboto fontbold bg-accent pl-4 py-2">Departamento / Universidad</div>
                        </div>

                        {/* Listado de miembros */}
                        {sortedMembersData.map((member) => (
                            <div
                                key={member.id}
                                className="w-full grid grid-cols-2 gap-4 py-2 border-b border-accent-blue  last:border-none"
                            >
                                {/* Nombre */}
                                <div className="w-full text-[14px] leading-[18px] sm:text-[16px] sm:leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] text-Primary font-roboto font-bold px-4">{member.name}</div>

                                {/* Departamento */}
                                <div className="w-full text-[14px] leading-[18px] sm:text-[16px] sm:leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] text-Primary font-roboto pr-4">{member.Departament || 'Sin especificar'}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* MEMBERS NO PERMANETES */}
            <div className="w-full flex flex-col justify-center items-start p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                <div className="w-full flex justify-start items-center mb-[30px] md:mb-[40px">
                    <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]  ">
                        {locale === 'es' ? 
                            ' Miembros colaboradores (no permanentes de Instituciones no universitarias):' 
                            :
                            'Collaborating members (non-permanent from non-university institutions):'}
                    </h2>
                </div>
                <div className="w-full flex justify-start items-center">
                    <div className="w-full py-6">
                        {/* Encabezado */}
                        <div className="w-full grid grid-cols-2 border-b-2 mb-4">
                            <div className="text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] font-bold text-accent font-roboto fontbold bg-accent-blue pl-4 py-2">Nombre y Apellidos del miembro</div>
                            <div className="w-full text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] font-bold text-accent font-roboto fontbold bg-accent-blue pl-4 py-2">Departamento / Universidad</div>
                        </div>

                        {/* Listado de miembros */}
                        {sortedColaboratorsData.map((member) => (
                            <div
                                key={member.id}
                                className="grid grid-cols-2 gap-4 py-2 border-b border-accent-blue  last:border-none"
                            >
                                {/* Nombre */}
                                <div className="text-[14px] leading-[18px] sm:text-[16px] sm:leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] text-Primary font-roboto font-bold px-4">{member.name}</div>

                                {/* Departamento */}
                                <div className="text-[14px] leading-[18px] sm:text-[16px] sm:leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] text-Primary font-roboto pr-4">{member.department || 'Sin especificar'}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            {/* END TEXT */}
            <div className="w-full flex flex-col justify-center items-start p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                <p className="text-[18px] leading-[22px] text-primary font-roboto font-bold">
                    {locale === 'es' ? 
                        'Para más información sobre cómo formar parte de nuestro equipo, visita la sección "Quiero ser miembro del centro".'
                        :
                        'For more information on how to become part of our team, visit the "I want to be a member of the center" section.'
                    }
                </p>
            </div>

        </motion.section>
    );
};

export default About;