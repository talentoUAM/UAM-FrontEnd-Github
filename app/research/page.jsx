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
//IMPORTS HOOKS:
//IMPORTS VARIANTS:
//IMPORTS COMPONENTS:
import LoaderComponentInt from "@/components/extraComponents/LoaderComponentInt";
//IMPORT ICONS:
//IMPORTS IMAGES:
//IMPORTS CSS:
//IMPORT ENV:

const Investigation = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);
    const { locale, pageResearchData, researchLinesData, researchFeaturesData, researchPublicationsData, researchTesisData  } = useGlobalState();
    // console.log('pageAboutBlocks', pageAboutBlocks);
    // console.log('pageAboutTeamData', pageAboutTeamData);
    // console.log('pageResearchData', pageResearchData);
    // console.log('researchTesisData', researchTesisData );
     
    
  

    const [isLoading, setIsLoading] = useState(true)
     
    useEffect(() => {
        let timer;
        
        if (!pageResearchData || !researchLinesData || !researchFeaturesData || !researchPublicationsData || !researchTesisData) {
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
    }, [pageResearchData, researchLinesData, researchFeaturesData, researchPublicationsData,researchTesisData]);

    const { title, image, introTextContent, introScientificPublication, doctoralTheses, endTextContent } = pageResearchData;

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
                {/* RESEARC HERO */}
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
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-[40px] md:gap-[60px]">       
                    {/* RESEARCH LINES */}
                    <div className="w-full flex flex-col justify-center items-start px-[10px] sm:px-[20px] md:px-[30px] lg:px-[40px] xl:px-[50px]">
                        <div className="w-full flex justify-start items-center mb-[30px] md:mb-[40px">
                            <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]  ">
                                {locale === 'es' ? 'Líneas de Investigación' : 'Research Lines'}
                            </h2>
                        </div>

                        {/* Page About Blocks Section */}
                        <div className="w-full flex flex-col lg:flex-row items-start lg:justify-center lg:items-stretch gap-4  ">
                            
                            {researchLinesData.map((line, index) => (
                                <div
                                    key={index}
                                    className={`w-full flex flex-col lg:flex-row items-start lg:justify-center lg:items-center bg-white py-2 `}
                                >
                                    {/* Content */}
                                    <div className="w-full  h-full bg-accent-blue/70 p-8">
                                        {/* Title */}
                                        <h3 className="text-[28px] leading-[28px] font-bold text-accent mb-4">
                                            {line.title}
                                        </h3>

                                        {/* Text Content */}
                                        {Array.isArray(line.textContent) &&
                                            line.textContent.map((content, contentIndex) => (
                                                <p key={contentIndex} className="text-accent-blue/70 mb-2">
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

                    {/* RESEARCH FEATURES */}
                    <div className="w-full flex flex-col justify-center items-start px-[10px] sm:px-[20px] md:px-[30px] lg:px-[40px] xl:px-[50px]">
                        <div className="w-full flex justify-start items-center mb-[30px] md:mb-[40px">
                            <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]  ">
                                {locale === 'es' ? 'Proyectos de Investigación Destacados' : 'Featured Research Projects'}
                            </h2>
                        </div>

                        {/* Proyects Blocks Section */}
                        <div className="w-full flex flex-col xl:flex-row items-start xl:justify-center xl:items-stretch gap-4  ">
                            
                            {researchFeaturesData.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`w-full flex flex-col lg:flex-row items-start lg:justify-center lg:items-center bg-accent py-2 `}
                                >
                                    {/* Content */}
                                    <div className="w-full  h-full p-8">
                                        {/* Title */}
                                        <h3 className="text-[28px] leading-[28px] font-bold text-accent-blue mb-4">
                                            {feature.title}
                                        </h3>
                                        <div className="w-full flex flex-col justify-start items-start gap-2">
                                            <div className="w-full grid grid-cols-1 md:grid-cols-[220px_1fr] xl:grid-cols-1 justify-start gap-2">
                                                <span className="md:w-[220px] text-[20px] leading-[24px] text-white font-roboto font-bold">{locale === 'es' ? 'Entidad Financiadora' : 'Funding Entity'}</span>
                                                <span className="text-[20px] leading-[24px] text-white font-roboto ">{feature.entity}</span>
                                            </div>
                                            <div className="w-full grid grid-cols-1 md:grid-cols-[220px_1fr] xl:grid-cols-1 gap-2">
                                                <span className="text-[20px] leading-[24px] text-white font-roboto font-bold">{locale === 'es' ? 'Duración' : 'Duration'}</span>
                                                <span className="text-[20px] leading-[24px] text-white font-roboto">{feature.duration}</span>
                                            </div>
                                            <div className="w-full grid grid-cols-1 md:grid-cols-[220px_1fr] xl:grid-cols-1 gap-2">
                                                <span className="text-[20px] leading-[24px] text-white font-roboto font-bold">{locale === 'es' ? 'Investigador Principal' : 'Principal Investigator'}</span>
                                                <span className="text-[20px] leading-[24px] text-white font-roboto">{feature.responsible}</span>
                                            </div>
                                            <div className="w-full grid grid-cols-1 md:grid-cols-[220px_1fr] xl:grid-cols-1 gap-2">
                                                <span className="text-[20px] leading-[24px] text-white font-roboto font-bold">{locale === 'es' ? 'Miembro del Centro' : 'Center Member'}</span>
                                                <span className="text-[20px] leading-[24px] text-white font-roboto">{feature.member}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scientific Publications */}
                    <div className="w-full flex flex-col justify-center items-start px-[10px] sm:px-[20px] md:px-[30px] lg:px-[40px] xl:px-[50px]">
                        <div className="w-full flex justify-start items-center mb-[30px] md:mb-[40px">
                            <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]  ">
                                {locale === 'es' ? ' Publicaciones Científicas' : 'Scientific Publications'}
                            </h2>
                        </div>
                        <div className="w-full ">
                    
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
                        <div className="w-full grid grid-cols-1 xs:grid-cols-2 justify-center items-stretch gap-4 ">
                            {researchPublicationsData.map((publication, index) => (  
                                <div
                                    key={index}
                                    className={`w-full min-h-[269px] grid justify-center items-center border border-accent-blue gap-0 bg-accent-blue/10 group hover:bg-accent-blue p-2 transition-all duration-300`}
                                >
                                    {/* Image */}
                                    <div className="w-full h-full flex justify-center items-center">
                                        {publication.avatar?.url && (
                                            <div className="w-[150px] h-[150px]  relative flex justify-start items-center border-2 border-accent rounded-full overflow-hidden">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${publication.avatar.url}`}
                                                    alt={publication.title}
                                                    layout="fill" // Llenar todo el contenedor
                                                    objectFit="cover" // Aplicar el comportamiento de "cover"
                                                    priority // Asegurar la carga optimizada
                                                    loading="eager"
                                                /> 
                                            </div>
                                            
                                        )}
                                    </div>
                                    {/* Content */}
                                    <div className="w-full h-full flex flex-col justify-center items-center p-2">
                                        {/* Title */}
                                        <h3 className=" text-center text-[28px] leading-[28px] font-bold text-accent group-hover:text-white mb-4">
                                            {publication.name}
                                        </h3>

                                        {/* link */}
                                        <motion.div
                                            whileHover="hover" // Aplica animación al contenedor completo
                                            className="inline-flex"
                                        >
                                            <Link href={publication.href} className="bg-accent-blue group-hover:bg-accent text-white px-6 py-2 rounded-lg transition-colors duration-300 font-bold inline-flex items-center">
                                                <span>{locale === 'es' ? 'Ver más' : 'See more'}</span>
                                                <motion.div
                                                    className="ml-2"
                                                    variants={{
                                                        hover: { x: 10 } // Mover icono cuando se hace hover en el botón completo
                                                    }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                                >
                                                    <GoArrowRight size={25} />
                                                </motion.div>
                                            </Link>
                                        </motion.div>
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tesis Doctorales */}
                    <div className="w-full flex flex-col justify-center items-start px-[10px] sm:px-[20px] md:px-[30px] lg:px-[40px] xl:px-[50px]">
                        <div className="w-full flex justify-start items-center mb-[30px] md:mb-[40px">
                            <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]  ">
                                {locale === 'es' ? '  Tesis Doctorales' : 'Doctoral Theses'}
                            </h2>
                        </div>
                        <div className="w-full ">
                    
                            {Array.isArray(doctoralTheses) && (
                                <div className="w-full ">
                                    {doctoralTheses.map((item, index) => (
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

                        <div className="w-full grid grid-cols-1 xs:grid-cols-2 justify-center items-stretch gap-4 ">
                        
                        {researchTesisData.map((tesis, index) => (
                                <div
                                    key={index}
                                    className={`w-full flex flex-col lg:flex-row items-start lg:justify-center lg:items-center border bg-accent-blue/10 border-accent  py-2 `}
                                >
                                    {/* Content */}
                                    <div className="w-full  h-full p-8">
                                        {/* Title */}
                                        <h3 className="text-[30px] leading-[32px] font-bold text-accent mb-4">
                                            {tesis.title}
                                        </h3>
                                        <div className="w-full flex flex-col justify-start items-start gap-2">
                                            <div className="w-full grid grid-cols-1 md:grid-cols-[150px_1fr] xl:grid-cols-1 justify-start gap-2">
                                                <span className="text-[20px] leading-[24px] text-primary font-roboto font-bold">{locale === 'es' ? 'Doctorando:' : 'PhD candidate:'}</span>
                                                <span className="text-[20px] leading-[24px] text-primary font-roboto ">{tesis.doctorado}</span>
                                            </div>
                                            <div className="w-full grid grid-cols-1 md:grid-cols-[150px_1fr] xl:grid-cols-1 gap-2">
                                                <span className="text-[20px] leading-[24px] text-primary font-roboto font-bold">{locale === 'es' ? 'Directoror/a:' : 'Director:'}</span>
                                                <span className="text-[20px] leading-[24px] text-primary font-roboto">{tesis.directores}</span>
                                            </div>
                                            <div className="w-full grid grid-cols-1 md:grid-cols-[150px_1fr] xl:grid-cols-1 gap-2">
                                                <span className="text-[20px] leading-[24px] text-primary font-roboto font-bold">{locale === 'es' ? 'Fecha:' : 'Date:'}</span>
                                                <span className="text-[20px] leading-[24px] text-primary font-roboto">{tesis.date}</span>
                                            </div>
                                            <div className="w-full grid grid-cols-1 md:grid-cols-[150px_1fr] xl:grid-cols-1 gap-2">
                                                <span className="text-[20px] leading-[24px] text-primary font-roboto font-bold">{locale === 'es' ? 'Calificación:' : 'Grade:'}</span>
                                                <span className="text-[20px] leading-[24px] text-primary font-roboto">{tesis.calificacion}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    
                </div> 









                {/* END TEXT */}
                {/* INTRO ABOUT PAGE */}
                <div className="w-full flex flex-col justify-center items-start gap-[20px] md:gap-[40px] p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] md:mt-[50px]">
                    {/* Intro Text Section */}
                    <div className="w-full">
                        {Array.isArray(endTextContent) && (
                            <div className="w-full ">
                                {endTextContent.map((item, index) => (
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

            </motion.section>
        </>
    );
};

export default Investigation;