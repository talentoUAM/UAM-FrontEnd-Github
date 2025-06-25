'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { useGlobalState } from "@/context/GlobalStateContext";

const CookiesPolicy = () => {
    const [showBanner, setShowBanner] = useState(false);
    const { popUpCookiesPolicyData } = useGlobalState();
    // console.log('popUpCookiesPolicyData', popUpCookiesPolicyData);

    useEffect(() => {
        const cookieAccepted = localStorage.getItem('cookieAccepted');
        if (!cookieAccepted || new Date().getTime() - new Date(cookieAccepted).getTime() > 15 * 24 * 60 * 60 * 1000) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieAccepted', new Date().toISOString());
        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <div className="fixed inset-0 w-screen h-screen  z-50 flex items-end">
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ duration: 0.5 }}
                        className="w-full flex flex-col justify-start items-center gap-6 bg-black bg-opacity-80 p-6 text-center"
                    >
                        {/* <p className="w-full text-[16px] leading-[24px] text-left text-white font-roboto font-semibold mb-4">
                        Esta web utiliza cookies propias para facilitar la navegación y cookies analíticas de terceros para obtener información de uso de sus visitantes. Sin embargo, contiene enlaces a sitios web de terceros con políticas de privacidad ajenas a la de la AEPD que usted podrá decidir si acepta o no cuando acceda a ellos. Puede obtener más información en nuestra nuestra política de cookies..
                        </p> */}
                        <div className="w-full flex flex-col justify-start items-start gap-4">
                            {popUpCookiesPolicyData.textContent?.map((item, index) => {
                                // Renderizar párrafos
                                if (item.type === "paragraph") {
                                    return (
                                        <p key={`${index}-${item.type}`} className="text-[18px] leading-[22px] text-white font-roboto text-left">
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
                        <button
                            onClick={handleAccept}
                            className="text-[16px] font-roboto text-white rounded border border-white hover:text-primary hover:font-semibold hover:bg-white px-10 py-2 transition-colors duration-300"
                        >
                            Aceptar
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CookiesPolicy;
