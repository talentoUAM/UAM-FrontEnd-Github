'use client';

//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
import CustomButton from "../buttons/CustomButton";

const HomeAboutSectionComponent = () => {
    const { homeAboutSectionData, locale } = useGlobalState();
    console.log('homeAboutSectionData', homeAboutSectionData)

    return (
        <div className="w-full flex flex-col justify-start items-start gap-[20px] px-[10px] mb-[30px] sm:px-[20px] md:mb-0 xl:px-[50px]">
            <div className="">
            <div className="w-full flex flex-col justify-start items-start gap-4">
                {/* Renderizar el título desde titleContent */}
                {homeAboutSectionData?.titleContent && (
                    <h3
                        className="text-[32px] leading-[36px] font-roboto font-bold text-primary mb-0"
                    >
                        {homeAboutSectionData.titleContent}
                    </h3>
                )}

                {/* Renderizar el contenido del texto desde textContent */}
                {Array.isArray(homeAboutSectionData?.textContent) &&
                    homeAboutSectionData.textContent.map((item, index) => {
                        // Si el tipo es "paragraph", renderizar contenido
                        if (item.type === "paragraph") {
                            return (
                                <div
                                    key={`${index}-${item.type}`}
                                    className="text-[22px] leading-[26px] text-primary font-roboto"
                                >
                                    {item.children?.map((child, childIndex) =>
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
                                            <span
                                                key={`${index}-${childIndex}`}
                                                className={child.bold ? "text-[20px] leading-[22px] text-primary font-roboto font-bold" : ""}
                                            >
                                                {child.text}
                                            </span>
                                        )
                                    )}
                                </div>
                            );
                        }
                        return null;
                    })}
            </div>

            </div>

            {/* Botón para ver todas las noticias */}
            <div className="w-full flex justify-center items-center mt-2 mb-8">
                <CustomButton url="/About">
                    {locale === 'es' ? 'SABER MAS ACERCA DE TALENTO UAM' : 'LEARN MORE ABOUT UAM TALENT'}
                </CustomButton>
            </div>

        </div>
    )
}

export default HomeAboutSectionComponent;