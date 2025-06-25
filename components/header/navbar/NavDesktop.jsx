'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGlobalState } from "@/context/GlobalStateContext";
import { IoTriangle } from "react-icons/io5";

const NavDesktop = () => {
    const pathname = usePathname();
    const { menuData, isLoading, locale, setLocale } = useGlobalState();
    const [selectedLocale, setSelectedLocale] = useState(locale); 
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isLocaleDropdownOpen, setLocaleDropdownOpen] = useState(false);


    let timer;
    // Sincronizar el valor del select con `locale` cuando el componente se monta o `locale` cambia
    useEffect(() => {
        setSelectedLocale(locale);
    }, [locale]);


    const handleMouseEnter = () => {
        clearTimeout(timer);
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timer = setTimeout(() => setDropdownOpen(false), 200);
    };

    // Cambiar idioma desde el menú select
    const handleLanguageChange = (newLocale) => {
        setLocale(newLocale);
        setSelectedLocale(newLocale);
        setLocaleDropdownOpen(false);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const menuItems = Array.isArray(menuData.data) ? menuData.data : [];

    return (
        <nav className="w-[95%] h-full mx-auto flex flex-row justify-end items-center gap-4 min-w-[580px]">
            
            {/* Renderiza los primeros elementos del menú */}
            {/* {menuItems.slice(0, 3).map((link, index) => ( */}
            {menuItems.map((link, index) => ( 
                <div key={index}>
                    <Link
                        href={link.url} // No añadimos `locale` en la URL
                        className={`text-[16px] font-roboto uppercase hover:text-accent transition-all duration-300 ${
                            pathname === link.url ? 'text-accent font-semibold' : ''
                        }`}
                    >
                        {link.title}
                    </Link>
                </div>
            ))}

            {/* <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="uppercase hover:text-accent transition-all duration-300 cursor-pointer">
                    {locale === "es" ? "Servicios" : "Services"}
                </div>

                {isDropdownOpen && (
                    <div
                        className="absolute flex flex-col justify-center gap-4 items-start min-w-[300px] top-full right-[-75px] pl-4 pr-4 pb-4 mt-2 bg-white shadow-md rounded-md"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {menuItems.slice(3).map((link, index) => (
                            <Link
                                key={index + 3}
                                href={link.url} // No añadimos `locale` en la URL
                                className={`text-[16px] font-roboto uppercase hover:text-accent transition-all duration-300 ${
                                    pathname === link.url ? 'text-accent font-semibold' : ''
                                }`}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div> */}

            {/* Menú de selección de idioma personalizado */}
            <div className="relative">
                <div
                    onClick={() => setLocaleDropdownOpen(!isLocaleDropdownOpen)}
                    className="flex items-center cursor-pointer text-[16px] lg:text-[18px] font-roboto px-1 transition-all duration-300"
                >
                    <span className={`mr-3 ${locale === selectedLocale ? 'text-accent font-semibold' : ''}`}>
                        {selectedLocale === "es" ? "Es" : "En"}
                    </span>
                    <IoTriangle
                        size={10}
                        className={`transition-transform duration-300 ${
                            isLocaleDropdownOpen ? 'rotate-0' : '-rotate-180'
                        }`}
                    />
                </div>
                {isLocaleDropdownOpen && (
                    <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-20 z-10">
                        <div
                            onClick={() => handleLanguageChange("es")}
                            className={`px-4 py-2 cursor-pointer ${
                                selectedLocale === "es" ? "text-accent font-semibold" : ""
                            } hover:bg-gray-100`}
                        >
                            Es
                        </div>
                        <div
                            onClick={() => handleLanguageChange("en")}
                            className={`px-4 py-2 cursor-pointer ${
                                selectedLocale === "en" ? "text-accent font-semibold" : ""
                            } hover:bg-gray-100`}
                        >
                            En
                        </div>
                    </div>
                )}
            </div> 
        </nav>
    );
};

export default NavDesktop;
