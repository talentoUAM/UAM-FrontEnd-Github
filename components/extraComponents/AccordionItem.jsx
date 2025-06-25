'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

// Componente AccordionItem
const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="px-[10px] first:pt-[20px] sm:px-[20px] last:pb-[20px] bg-[#9ab8c9]">
            <div
                className="group flex justify-between items-center cursor-pointer border-b border-primary hover:border hover:border-primary transition-all duration-300 p-4"
                onClick={onClick}
            >
                <h2 className="w-full text-[20px] leading-[24px] text-primary font-roboto font-semibold">{title}</h2>
                {isOpen ? <FiMinus size='24' className="text-primary font-semibold" /> : <FiPlus size='24' className="text-primary font-semibold" />}
            </div>

            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{ height: { duration: 0.5 }, opacity: { duration: 0.3 } }}
                className="w-full overflow-hidden"
            >
                <div className="text-[18px] leading-[22px] text-primary font-roboto bg-white  py-4 p-6 mt-[20px]">
                    {content}
                </div>
            </motion.div>
        </div>

    );
};


export default AccordionItem;
