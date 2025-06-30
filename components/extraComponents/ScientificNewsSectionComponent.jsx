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
import CustomButton from '../buttons/CustomButton';
import HeaderSectionComponent from './HeaderSectionComponent';
//IMPORT ICONS:
//IMPORTS IMAGES:
//IMPORTS CSS:
//IMPORT ENV:


//Filtado por categoria de 'scientific'
// const ScientificNewsSectionComponent = () => {
//     const { postsData } = useGlobalState();
//     const { homeTitleSectionsData } = useGlobalState();

//     // Ordenar los posts por fecha de publicación (descendente)
//     const sortedPosts = [...postsData].sort((a, b) => new Date(b.postDate) - new Date(a.postDate));

//     // Obtener el artículo principal (el más reciente) y los secundarios
//     const mainPost = sortedPosts[0];
//     const secondaryPosts = sortedPosts.slice(1, 5); // Los siguientes 4 posts

//     return (
//         <section className="w-full flex flex-col justify-start items-center gap-[30px] p-[10px] sm:p-[20px] xl:p-[40px]">
//             <HeaderSectionComponent text={homeTitleSectionsData.newsUAMsection} />

//             <div className="w-full grid lg:grid-rows-2 gap-8">
//                 {/* Artículo principal */}
//                 {mainPost && (
//                     <Link  href={`/posts/${mainPost.id}`}>
//                         <div className="md:max-h-[415px] flex flex-col md:flex-row gap-4">
//                             <div className="w-full h-full md:max-h-[350px] lg:w-1/2 overflow-hidden">
//                                 <Image
//                                     src={
//                                         mainPost.heroImage?.url
//                                         ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${mainPost.heroImage.url}`
//                                         : "/assets/home/poster/hero-video-poster.jpg"
//                                     }
//                                     alt={mainPost.heroImage?.alternativeText || mainPost.title || "Imagen del artículo principal"}
//                                     width={400}
//                                     height={300}
//                                     className="object-cover w-full h-full min-h-[300px] md:max-h-[350px]"
//                                 />
//                             </div>
//                             <div className="w-full lg:w-1/2 md:max-h-[350px] flex flex-col justify-start gap-2 p-4 pt-0 overflow-hidden">
//                                 <div className="w-full flex flex-col justify-start items-start">
//                                     <span className="text-[16px] leading-[24px] font-roboto text-black-700">
//                                         {mainPost.news_category?.category || "Sin categoría"}
//                                     </span>
//                                     {/* Fecha */}
//                                     <p className="text-gray-600">
//                                         {mainPost.postDate ? new Date(mainPost.postDate).toLocaleDateString() : "Fecha no disponible"}
//                                     </p>
//                                 </div>
//                                 <h3 className="text-[20px] leading-[24px] font-playfair font-bold text-black hover:text-accent transition-all duration-300">
//                                     {mainPost.title}
//                                 </h3>
//                                 <p className="text-[18px] leading-[22px] font-roboto text-gray-700">
//                                     {mainPost.text || "Descripción no disponible"}
//                                 </p>
//                             </div>
//                         </div>
//                     </Link>
//                 )}

//                 {/* Artículos secundarios */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                     {secondaryPosts.map((post) => (
//                         <div key={post.id} className="bg-white flex flex-col gap-[10px] group">
//                             <Link key={post.id} href={`/posts/${post.id}`}>
//                                 <div className="overflow-hidden">
//                                     <Image
//                                         src={
//                                             post.heroImage?.url
//                                             ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.heroImage.url}`
//                                             : "/assets/home/poster/hero-video-poster.jpg"
//                                         }
//                                         alt={post.heroImage?.alternativeText || post.title || "Imagen de artículo secundario"}
//                                         width={400}
//                                         height={300}
//                                         className="object-cover w-full h-[225px]"
//                                     />
//                                 </div>
//                                 <div className="w-full flex flex-col justify-start items-start">
//                                     {/* Categoria */}
//                                     <span className="text-[16px] leading-[24px] font-roboto text-gray-700">
//                                         {post.news_category?.category || "Sin categoría"}
//                                     </span>
//                                     {/* Fecha */}
//                                     <p className="text-gray-600">
//                                         {post.postDate ? new Date(post.postDate).toLocaleDateString() : "Fecha no disponible"}
//                                     </p>
//                                 </div>
//                                 {/* Título del post */}
//                                 <h4 className="text-[18px] leading-[24px] font-playfair font-semibold text-black group-hover:text-accent">
//                                     {post.title}
//                                 </h4>
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Botón para ver todas las noticias */}
//             <div className="mt-2 mb-8">
//                 <CustomButton url="/posts">
//                     VER TODAS LAS NOTICIAS
//                 </CustomButton>
//             </div>
//         </section>
//     )
// }

// export default ScientificNewsSectionComponent

// Filtrado por categoría 'scientific' o equivalente en español
const ScientificNewsSectionComponent = () => {
    const { postsData } = useGlobalState();
    const { homeTitleSectionsData } = useGlobalState();

    // Filtrar los posts que pertenecen a la categoría científica y investigacion
    const filteredPosts = postsData.filter(post => 
        post.news_category?.category?.toLowerCase() === 'scientific' || 
        post.news_category?.category?.toLowerCase() === 'científica' ||
        post.news_category?.category?.toLowerCase() === 'investigation' || 
        post.news_category?.category?.toLowerCase() === 'investigacion' ||
    );

    // Ordenar los posts filtrados por fecha de publicación (descendente)
    const sortedPosts = [...filteredPosts].sort((a, b) => new Date(b.postDate) - new Date(a.postDate));

    // Obtener el artículo principal (el más reciente) y los secundarios
    const mainPost = sortedPosts[0];
    const secondaryPosts = sortedPosts.slice(1, 5); // Los siguientes 4 posts

    return (
        <section className="w-full flex flex-col justify-start items-center gap-[30px] p-[10px] sm:p-[20px] xl:p-[40px]">
            <HeaderSectionComponent text={homeTitleSectionsData.scientificNewsSection} />

            <div className="w-full grid lg:grid-rows-2 gap-8">
                {/* Artículo principal */}
                {mainPost && (
                    <Link href={`/posts/${mainPost.id}`}>
                        <div className="md:max-h-[415px] flex flex-col md:flex-row gap-4">
                            <div className="w-full h-full md:max-h-[350px] lg:w-1/2 overflow-hidden">
                                <Image
                                    src={
                                        mainPost.heroImage?.url
                                            ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${mainPost.heroImage.url}`
                                            : "/assets/home/poster/hero-video-poster.jpg"
                                    }
                                    alt={mainPost.heroImage?.alternativeText || mainPost.title || "Imagen del artículo principal"}
                                    width={400}
                                    height={300}
                                    className="object-cover w-full h-full min-h-[300px] md:max-h-[350px]"
                                />
                            </div>
                            <div className="w-full lg:w-1/2 md:max-h-[350px] flex flex-col justify-start gap-2 p-4 pt-0 overflow-hidden">
                                <div className="w-full flex flex-col justify-start items-start">
                                    <span className="text-[16px] leading-[24px] font-roboto text-black-700">
                                        {mainPost.news_category?.category || "Sin categoría"}
                                    </span>
                                    {/* Fecha */}
                                    <p className="text-gray-600">
                                        {mainPost.postDate ? new Date(mainPost.postDate).toLocaleDateString() : "Fecha no disponible"}
                                    </p>
                                </div>
                                <h3 className="text-[20px] leading-[24px] font-playfair font-bold text-black hover:text-accent transition-all duration-300">
                                    {mainPost.title}
                                </h3>
                                <p className="text-[18px] leading-[22px] font-roboto text-gray-700">
                                    {mainPost.text || "Descripción no disponible"}
                                </p>
                            </div>
                        </div>
                    </Link>
                )}

                {/* Artículos secundarios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {secondaryPosts.map((post) => (
                        <div key={post.id} className="bg-white flex flex-col gap-[10px] group">
                            <Link key={post.id} href={`/posts/${post.id}`}>
                                <div className="overflow-hidden">
                                    
                                    <Image
                                        src={
                                            post.heroImage?.url
                                            ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.heroImage.url}`
                                            : "/assets/home/poster/hero-video-poster.jpg"
                                        }
                                        alt={post.heroImage?.alternativeText || post.title || "Imagen de artículo secundario"}
                                        width={400}
                                        height={300}
                                        className="object-cover w-full h-[225px]"
                                    />
                                </div>
                                <div className="w-full flex flex-col justify-start items-start">
                                    {/* Categoria */}
                                    <span className="text-[16px] leading-[24px] font-roboto text-gray-700">
                                        {post.news_category?.category || "Sin categoría"}
                                    </span>
                                    {/* Fecha */}
                                    <p className="text-gray-600">
                                        {post.postDate ? new Date(post.postDate).toLocaleDateString() : "Fecha no disponible"}
                                    </p>
                                </div>
                                {/* Título del post */}
                                <h4 className="text-[18px] leading-[24px] font-playfair font-semibold text-black group-hover:text-accent">
                                    {post.title}
                                </h4>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Botón para ver todas las noticias */}
            <div className="mt-2 mb-8">
                <CustomButton url="/posts">
                    VER TODAS LAS NOTICIAS
                </CustomButton>
            </div>
        </section>
    );
};

export default ScientificNewsSectionComponent;
