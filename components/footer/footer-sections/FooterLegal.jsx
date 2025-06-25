'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
// IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";

const FooterLegal = () => {
    const { footerLegalMenuData, locale } = useGlobalState([]); // Asegúrate de obtener el `locale` del contexto global
    const pathname = usePathname();
    // Valida que `footerLegalMenuData` sea un array
    if (!Array.isArray(footerLegalMenuData)) {
        console.error("footerLegalMenuData no es un array:", footerLegalMenuData);
        return null; // O renderiza algo alternativo
    }

    return (
        <div>
            <div className="w-full h-full flex flex-col lg:flex-row justify-center items-start">
                <ul className="w-full flex flex-col lg:flex-row justify-start items-start text-[16px] leading-[28px] text-primary gap-4 lg:gap-8">
                    {
                        footerLegalMenuData.map((item, index) => (
                            <li key={index}>
                                <Link 
                                    href={`${item.href}`}// Usa `es` como valor por defecto si `locale` es undefined
                                    className="hover:text-accent transition-all duration-300"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default FooterLegal;

