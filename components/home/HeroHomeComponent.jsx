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

//IMPORT  ICONS;
import { GoArrowDown, GoArrowDownLeft, GoArrowDownRight, GoArrowLeft, GoArrowRight, GoArrowSwitch, GoArrowUp, GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";

const HeroHomeComponent = () => {

    const { homeHeroData, setHomeHeroData } = useGlobalState(false);
    // console.log(homeHeroData);

    return (
        <section
            className=" w-full flex flex-col justify-start items-start overflow-x-hidden max-w-[1920px] z-10 overflow-hidden"
            
        >
            <div className="relative w-full h-[80dvh] flex flex-col justify-end">
                {/* Video Background */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    loop
                    muted
                    autoPlay
                    playsInline
                    src="/assets/home/video/hero-home-video.mp4"
                    poster="/assets/home/poster/hero-video-poster.jpg"
                    type="video/mp4"
                ></video>

                {/* Overlay */}
                <div className="absolute flex justify-center items-center w-full h-[200px] xxs:h-[300px] md:w-[45%] md:h-full bottom-0 md:inset-0 ">
                    {/* Content */}
                    <div className="relative z-10 w-full h-full flex flex-col items-start justify-center px-5 md:px-10 lg:px-20 py-20 text-white bg-[#35454E]/70 ">
                        {/* Title Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6"
                        >
                            <h1 className="text-[40px] md:text-[35px] lg:text-[40px] xl:text-[55px] text-white font-bold leading-tight uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]">
                                {homeHeroData.title}
                            </h1>
                        
                        </motion.div>

                        {/* Info Cards Section */}
                        
                    </div>
                </div>

            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full flex flex-col md:flex-row justify-end items-center gap-2 text-black p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] sm:mt-[-100px] lg:mt-[-150px] xl:mt-[-150px] right-0 z-20"
            >
              <div className="w-full h-auto sm:w-[100%] md:w-[75%] flex flex-col sm:flex-row justify-stretch items-stretch gap-2 z-20">
                {/* Card 1 */}
                <div className="w-full min-h-[100px] sm:min-h-[150px] bg-white p-4 rounded-md shadow-md flex flex-col justify-between flex-1">
                  <Link href={`${homeHeroData.CardUrl1}`} className="w-full h-full flex flex-col justify-between items-start gap-2">
                    <h2 className="text-[18px] leading-[22px] font-roboto font-bold">{homeHeroData.CardTitle1}</h2>
                    <GoArrowUpRight size={35} color="#F58634" />
                  </Link>
                </div>
                {/* Card 2 */}
                <div className="w-full min-h-[100px] sm:min-h-[150px] bg-white p-4 rounded-md shadow-md flex flex-col justify-between flex-1">
                  <Link href={`${homeHeroData.CardUrl2}`} target="_blank" rel="noopener" className="w-full h-full flex flex-col justify-between items-start gap-2">
                    <h2 className="text-[18px] leading-[22px] font-roboto font-bold">{homeHeroData.CardTitle2}</h2>
                    <GoArrowRight size={35} color="#F58634" />
                  </Link>
                </div>
                {/* Card 3 */}
                <div className="w-full  min-h-[100px] sm:min-h-[150px] bg-white p-4 rounded-md shadow-md flex flex-col justify-between flex-1">
                  <Link href={`${homeHeroData.CardUrl3}`} target="_blank" rel="noopener" className="w-full h-full flex flex-col justify-between items-start gap-2">
                    <h2 className="text-[18px] leading-[22px] font-bold">{homeHeroData.CardTitle3}</h2>
                    <GoArrowRight size={35} color="#F58634" />
                  </Link>
                </div>
              </div>
            </motion.div>
        </section>
    );
};

export default HeroHomeComponent;
