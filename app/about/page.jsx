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
import LoaderComponentInt from "@/components/extraComponents/LoaderComponentInt";
//IMPORT ICONS:
//IMPORTS IMAGES:
//IMPORTS CSS:
//IMPORT ENV:


const About = () => {
  const {
    locale,
    pageAboutData,
    pageAboutBlocks,
    pageAboutTeamData,
    pageAboutTeamMembersData,
    pageAboutTeamColaboratorsData,
  } = useGlobalState();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const dataReady =
      pageAboutData &&
      pageAboutBlocks &&
      pageAboutTeamData &&
      pageAboutTeamMembersData &&
      pageAboutTeamColaboratorsData;

    if (!dataReady) return;

    const onLoad = () => setIsReady(true);

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, [
    pageAboutData,
    pageAboutBlocks,
    pageAboutTeamData,
    pageAboutTeamMembersData,
    pageAboutTeamColaboratorsData
  ]);

  if (!isReady) return <LoaderComponentInt />;

  const title = pageAboutData?.title || "";
  const image = pageAboutData?.image || null;
  const introTextContent = pageAboutData?.introTextContent || [];
  const sortedMembersData = pageAboutTeamMembersData?.sort((a, b) => a.id - b.id) || [];
  const sortedColaboratorsData = pageAboutTeamColaboratorsData?.sort((a, b) => a.id - b.id) || [];

  return (
    <motion.section
      className="min-h-[100dvh] flex flex-col justify-start items-start overflow-x-hidden max-w-[1920px] mx-auto pt-[70px] mb-[50px] z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 } }}
    >
      {/* ABOUT HERO */}
      <div className="relative w-full h-[80dvh] flex flex-col justify-end">
        {image?.url && (
          <Image
            className="w-full h-full object-cover"
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`}
            fill
            priority
            alt="Hero Image"
          />
        )}
        <div className="absolute flex justify-center items-center w-full h-[200px] xxs:h-[300px] md:w-[45%] md:h-full bottom-0 md:inset-0 ">
          <div className="relative z-10 w-full h-full flex flex-col items-start justify-center px-5 md:px-10 lg:px-20 py-20 text-white bg-[#35454E]/70">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-[40px] md:text-[35px] lg:text-[40px] xl:text-[55px] text-white font-bold leading-tight uppercase after:content-[''] after:block after:w-[80px] after:h-[4px] after:bg-accent after:mt-[10px]">
                {title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Resto del contenido... (no se modifica) */}

    </motion.section>
  );
};

export default About;