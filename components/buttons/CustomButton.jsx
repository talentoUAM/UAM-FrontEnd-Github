import Link from 'next/link';
import { GoArrowRight } from "react-icons/go";
import { motion } from 'framer-motion';

const CustomButton = ({ url, children }) => {
    return (
        <motion.div
            whileHover="hover" // Aplica animación al contenedor completo
            className="inline-flex"
        >
            <Link href={url} className="bg-[#F58634] text-white px-6 py-2 rounded-lg transition-colors duration-300 font-bold inline-flex items-center">
                <span>{children}</span>
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
    );
};

export default CustomButton;


