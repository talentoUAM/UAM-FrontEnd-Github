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
import CustomButton from "@/components/buttons/CustomButton";
import { GoArrowRight } from "react-icons/go";
import { ClientPageRoot } from "next/dist/client/components/client-page";
import { TfiDownload } from "react-icons/tfi";
//IMPORTS HOOKS:
//IMPORTS VARIANTS:
//IMPORTS COMPONENTS:
import LoaderComponentInt from "@/components/extraComponents/LoaderComponentInt";
//IMPORT ICONS:
//IMPORTS IMAGES:
//IMPORTS CSS:
//IMPORT ENV:

const Training = () => {
    const { locale, pageTrainingData, trainingProgramsData, trainingPostgradeData  } = useGlobalState();
    const [isLoading, setIsLoading] = useState(true)
     
    useEffect(() => {
        let timer;
        
        if (!pageTrainingData || !trainingProgramsData || !trainingPostgradeData ) {
            setIsLoading(true);
            
        } else {
            // Lógica para cuando pageTrainingData, trainingProgramsData, trainingPostgradeData existe
            timer = setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [pageTrainingData, trainingProgramsData, trainingPostgradeData]);
    
    const sortedTrainingProgramsData = trainingProgramsData.sort((a, b) => b.id - a.id);
    const sortedTrainingPostgradeData = trainingPostgradeData.sort((a, b) => a.id - b.id);
    const { title, image, introTextContent, introTextPosgrado, textContentInCompany, textContentCursosCortos, endTextContent } = pageTrainingData;


    return (
        <>
            {isLoading && <LoaderComponentInt />}
            <motion.section
                className="min-h-[100dvh] flex flex-col justify-start items-start overflow-x-hidden max-w-[1920px] mx-auto pt-[70px] mb-[50px] z-10"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.3 },
                }}
            >   
                {/* Trining HERO */}
                <div className="relative w-full h-[80dvh] flex flex-col justify-end">
                    {/* Hero Image */}
                    {image?.url && (
                        <Image
                            className="w-full h-full object-cover"
                            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`}
                            fill
                            priority
                            loading="eager"
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
                                <h1 className="text-[40px] md:text-[35px] lg:text-[40px] xl:text-[55px] text-white  font-bold leading-tight uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]">
                                    {title}
                                </h1>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* INTRO trainig PAGE */}
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
                
                {/* Programas de Formación posgrado */}
                <div className="w-full flex flex-col justify-center items-start gap-[20px] md:gap-[40px] p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                    <div className="w-full flex flex-col justify-center items-start gap-[40px] md:gap-[60px]">       
                        {/* Programas de Formación posgrado */}
                        
                        <div className="w-full grid grid-cols-1">
                            <div className="w-full min-h-[445px] flex justify-start items-center mb-[30px] md:mb-[40px]">
                                <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]  ">
                                    {locale === 'es' ? 'Programas de Formación posgrado' : 'Postgraduate Training Programs'}
                                </h2>
                            </div>
                            {sortedTrainingProgramsData.map((program, index) => (
                                <div
                                key={index}
                                className={`w-full flex flex-col md:flex-row ${
                                    index % 2 !== 0 ? 'md:flex-row-reverse' : '' // Alternar posición de la imagen
                                } items-start bg-white py-2`}
                                >
                                {/* Image */}
                                {program.image?.url && (
                                    <div className="w-full md:w-1/2 h-full min-h-[300px] md:min-h-[250px] h-full relative overflow-hidden">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${program.image.url}`}
                                        alt={program.title || 'Training Image'}
                                        layout="fill" // Llenar todo el contenedor
                                        objectFit="cover" // Aplicar el comportamiento de "cover"
                                        priority // Asegurar la carga optimizada
                                        loading="eager"
                                    />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="w-full md:w-1/2 h-full bg-accent-blue/70 p-8">
                                    {/* Title */}
                                    <h3 className="text-[28px] leading-[28px] font-bold text-accent mb-4">
                                    {program.title}
                                    </h3>

                                    {/* Text Content */}
                                    {Array.isArray(program.textContent) &&
                                    program.textContent.map((content, contentIndex) => (
                                        <div key={contentIndex} className="w-full flex flex-col justify-center items-start gap-8">
                                            {/* Program text  */}
                                            <p className="text-gray-700 mb-2">
                                                {content.children.map((child, childIndex) => (
                                                <span
                                                    key={childIndex}
                                                    className={
                                                    child.bold
                                                        ? 'text-[20px] leading-[24px] text-white font-roboto font-bold'
                                                        : 'text-[20px] leading-[24px] text-white font-roboto'
                                                    }
                                                >
                                                    {child.text}
                                                </span>
                                                ))}
                                            </p>
                                            {/* Link */}
                                            <div className="w-full flex justify-center items group">
                                                <Link
                                                href={program.href}
                                                className="bg-[#F58634] text-white group-hover:bg-white group-hover:text-accent px-6 py-2 rounded-lg transition-colors duration-300 font-bold inline-flex items-center"
                                                >
                                                <div className="w-full flex justify-start items-start gap-2">
                                                    <span>
                                                    {locale === 'es'
                                                        ? `Consulta más información sobre el Título en ${program.title}`
                                                        : `Find out more about the Title at ${program.title}`}
                                                    </span>
                                                </div>
                                                </Link>
                                            </div>
                                            {/* PDF */}
                                            <div className="w-full flex justify-start items-center">
                                                {program.pdf && program.pdf.url && (
                                                <div className="">
                                                    <a
                                                    href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${program.pdf.url}`}
                                                    className="cursor-pointer"
                                                    target="_blank"
                                                    download
                                                    >
                                                    <div className="w-full flex justify-start items-center gap-2 rounded group ">
                                                        <span className="flex justify-start items-center text-accent group-hover:text-white transition-colors duration-300">
                                                        <TfiDownload size={20} />
                                                        </span>
                                                        <p className="text-[20px] leading-[24px] text-accent font-roboto uppercase transition-all duration-300 group-hover:text-white ">
                                                            {locale === 'es' ? 'Descargar PDF' : 'Download PDF '}
                                                        </p>
                                                        <p className="text-[20px] leading-[24px] text-accent font-roboto uppercase transition-all duration-300 group-hover:text-white group-hover:font-bold">
                                                        {program.file}
                                                        </p>
                                                    </div>
                                                    </a>
                                                </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                </div>
                            ))}
                        </div>

                        

                        {/* Formación de Posgrado */}
                        
                    </div> 
                </div>

                {/* Prosgrados */}
                <div className="w-full flex flex-col justify-center items-start gap-[20px] md:gap-[40px] p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                    <div className="w-full flex flex-col justify-center items-start gap-[40px] md:gap-[60px]">      
                        
                        <div className="w-full grid grid-cols-1">
                            <div className="w-full flex justify-start items-center mb-[30px] md:mb-[40px">
                                <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]  ">
                                    {locale === 'es' ? 'Formación posgrado' : 'Postgraduate Training'}
                                </h2>
                            </div>
                            {/* INTRO Postgrade */}
                            <div className="w-full flex flex-col justify-center items-start gap-[20px] md:gap-[40px] ">
                                {/* Intro Text Section */}
                                <div className="w-full">
                                    {Array.isArray(introTextPosgrado) && (
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
                            {sortedTrainingPostgradeData.map((postgrade, index) => (
                                <div
                                key={index}
                                className={`w-full flex flex-col md:flex-row items-start bg-white py-2`}
                                >
                                {/* Image */}
                                {/* {program.image && program.image.url && (
                                    <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[250px] h-full relative overflow-hidden">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${program.image.url}`}
                                        alt={program.title || 'Training Image'}
                                        layout="fill" // Llenar todo el contenedor
                                        objectFit="cover" // Aplicar el comportamiento de "cover"
                                        priority // Asegurar la carga optimizada
                                    />
                                    </div>
                                )} */}

                                {/* Content */}
                                <div className="w-full  h-full bg-accent-blue/70 p-8">
                                    {/* Title */}
                                    <h3 className="text-[28px] leading-[28px] font-bold text-accent mb-4">
                                    {postgrade.title}
                                    </h3>

                                    {/* Text Content */}
                                    {Array.isArray(postgrade.textContent) ? (
                                        postgrade.textContent.map((content, contentIndex) => (
                                        <div key={contentIndex} className="w-full flex flex-col justify-center items-start gap-2">
                                            {/* Program text */}
                                            <p className="text-gray-700 mb-2">
                                            {content.children.map((child, childIndex) => (
                                                <span
                                                key={childIndex}
                                                className={
                                                    child.bold
                                                    ? 'text-[20px] leading-[24px] text-white font-roboto font-bold'
                                                    : 'text-[20px] leading-[24px] text-white font-roboto'
                                                }
                                                >
                                                {child.text}
                                                </span>
                                            ))}
                                            </p>
                                        </div>
                                        ))
                                    ) : (
                                        <div className="text-gray-700 mb-4"></div>
                                    )}

                                    {/* Link */}
                                    {postgrade.href && (
                                        <div className="w-full flex justify-start items group mt-4">
                                        <Link
                                            href={postgrade.href}
                                            className="w-full sm:max-w-[260px] bg-[#F58634] text-white group-hover:bg-white group-hover:text-accent px-6 py-2 rounded-lg transition-colors duration-300 font-bold inline-flex items-center"
                                        >
                                            <div className="w-full flex justify-start items-start">
                                            <span className="w-full font-roboto font-bold text-[16px] text-center">
                                                {locale === 'es'
                                                ? `Obtener mas información`
                                                : `Learn more`}
                                            </span>
                                            </div>
                                        </Link>
                                        </div>
                                    )}

                                    {/* PDF */}
                                    {postgrade.pdf && postgrade.pd?.url && (
                                        <div className="w-full flex justify-start items-center mt-4">
                                        <a
                                            href={`${process.env.NEXT_PUBLIC_STRAPI_URL}${postgrade.pdf.url}`}
                                            className="cursor-pointer"
                                            target="_blank"
                                            download
                                        >
                                            <div className="w-full flex justify-start items-center gap-2 rounded group ">
                                            <span className="flex justify-start items-center text-accent group-hover:text-white transition-colors duration-300">
                                                <TfiDownload size={20} />
                                            </span>
                                            <p className="text-[20px] leading-[24px] text-accent font-roboto uppercase transition-all duration-300 group-hover:text-white ">
                                                {locale === 'es' ? 'Descargar PDF' : 'Download PDF '}
                                            </p>
                                            <p className="text-[20px] leading-[24px] text-accent font-roboto uppercase transition-all duration-300 group-hover:text-white group-hover:font-bold">
                                                {postgrade.file}
                                            </p>
                                            </div>
                                        </a>
                                        </div>
                                    )}
                                </div>
                                </div>
                            ))}
                        </div>
                    
                        
                    </div> 
                </div>

                {/* Text InCompany */}
                <div className="w-full flex flex-col justify-center items-start gap-[30px] p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] ">
                    <div className="w-full flex justify-start items-center">
                        <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]  ">
                            {locale === 'es' ? 'Formación In-Company' : 'In-Company Training'}
                        </h2>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start gap-[20px]">
                        {/* Intro Text Section */}
                        <div className="w-full">
                            {Array.isArray(textContentInCompany) && (
                                <div className="w-full ">
                                    {textContentInCompany.map((item, index) => (
                                        <div key={index} className="">
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
                </div>

                {/* Text Cursos Cortos */}
                <div className="w-full flex flex-col justify-center items-start gap-[30px] p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                    <div className="w-full flex justify-start items-center">
                        <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]  ">
                            {locale === 'es' ? 'Cursos Cortos de Formación Continua' : 'Short Continuing Education Courses'}
                        </h2>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start gap-[20px]">
                        {/* Intro Text Section */}
                        <div className="w-full">
                            {Array.isArray(textContentCursosCortos) && (
                                <div className="w-full ">
                                    {textContentCursosCortos.map((item, index) => (
                                        <div key={index} className="">
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
                </div>
                
                {/* END TEXT PAGE */}
                {Array.isArray(endTextContent) && endTextContent.length > 0 && (
                <div className="w-full flex flex-col justify-center items-start gap-[20px] md:gap-[40px] p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] md:mt-[50px]">
                    {/* Intro Text Section */}
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
        </>
    );
};

export default Training;