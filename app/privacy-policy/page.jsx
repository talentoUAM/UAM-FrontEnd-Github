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
//IMPORTS CSS:
//IMPORT ENV:

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const [openIndex, setOpenIndex] = useState(null);
    const { pagePrivacyPolicyData } = useGlobalState([]);
    const { pagePrivacyPolicyContentData } = useGlobalState([]);

    // console.log('pagePrivacyPolicyData', pagePrivacyPolicyData);
    // console.log('pagePrivacyPolicyContentData', pagePrivacyPolicyContentData);

    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };


    return (
        <motion.section
            className="min-h-screen flex flex-col justify-start items-start overflow-x-hidden max-w-[1920px] mx-auto pt-[70px]  z-10"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: .3 },
            }}
        >
            <div className="w-full min-h-[180px] md:w-[550px] md:h-auto lg:w-[750px] flex justify-start items-center bg-[#35454E] p-[10px] mb-[30px] sm:p-[20px] md:p-[30px] md:mb-0 lg:p-[40px] xl:p-[50px] md:mt-[50px]">
                <h1 className="w-[80%] h-full text-left text-accent text-[28px] leading-[32px] md:text-[36px] lg:text-[50px] lg:leading-[54px] md:leading-[40px] font-roboto font-bold uppercase">
                    {pagePrivacyPolicyData.title}
                </h1>
            </div>
            <div className="w-full p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]">
                <p className="text-[16px] leading-[20px] text-primary font-roboto">
                {pagePrivacyPolicyData.subtitle}
                </p>
                <p className="text-[20px] leading-[24px] text-primary font-roboto font-bold mt-[30px]">
                    {pagePrivacyPolicyData.dateText}
                </p>
                <p className="text-[18px] leading-[22px] text-primary font-roboto mt-[30px]">
                {pagePrivacyPolicyData.textContent}
                La Universidad Autónoma de Madrid (UAM) se compromete a asegurar que su información personal se encuentra protegida y no se utiliza de forma indebida. En la UAM asumimos la responsabilidad de cumplir con la legislación nacional y europea vigente en materia de protección de datos, y tenemos el objetivo de tratar sus datos personales de manera lícita, leal y transparente al acceder a través de su web. 
                <br /><br />
                Mediante la presente Política de Privacidad, la UAM informa a los usuarios de la website  www.uam.es en lo referente al tratamiento y usos a los que se someten los datos de carácter personal que se recaban en el portal web, con el fin de que decidan, libre y voluntariamente, si desean facilitar o no la información solicitada.
                </p>
            </div>

 
            <div className="w-full  p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] ">
                {pagePrivacyPolicyContentData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                        dataContent={pagePrivacyPolicyContentData}
                    />
                ))}
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-6 bg-[#9ab8c9] p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] md:mt-[50px]">
                <h2 className="relative inline-block text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[48px] font-roboto font-semibold text-primary uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]  ">
                {pagePrivacyPolicyData.footerPageTitle}
                </h2>

                <div className="w-full flex flex-col justify-start items-start gap-4">
                    {pagePrivacyPolicyData.footerPageContent?.map((item, index) => {
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

                {/* <p className="text-[18px] leading-[22px] text-primary font-roboto">
                Si tiene cualquier tipo de consulta, comentario o si desea realizar alguna sugerencia sobre cómo usamos la información personal, puede dirigirse a la Delegada de Protección de Datos de la UAM
                </p>
                <div className="w-full">
                    <p className="text-[18px] leading-[22px] font-roboto text-primary">Para contactar con nosotros, puede enviar un correo a nuestra delegada de protección de datos.</p>
                    <Link href="mailto:delegada.protecciondedatos@uam.es" className="text-[18px] leading-[22px] font-roboto font-semibold text-primary hover:underline">
                        delegada.protecciondedatos@uam.es
                    </Link>
                </div> */}
            </div>
 
        </motion.section>
    );
};

export default PrivacyPolicy;