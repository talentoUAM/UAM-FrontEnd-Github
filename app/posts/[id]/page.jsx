'use client';

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoTriangle } from "react-icons/io5";
import { useGlobalState } from "@/context/GlobalStateContext";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const SinglePost = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const { postsData, locale, pagePostsData } = useGlobalState();
    const pathname = usePathname();
    const router = useRouter();

    const [singlePost, setSinglePost] = useState(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    

    const postId = parseInt(pathname.split("/").pop()); // Obtener el ID del post desde la URL

    useEffect(() => {
      // Validar que postsData esté cargado antes de proceder
      if (!postsData || postsData.length === 0 || !postId) {
        return;
      }

      // Buscar el post base
      const basePost = postsData.find((p) => p.id === postId);

      if (!basePost) {
        // console.warn(`Post base con ID ${postId} no encontrado.`);
        setSinglePost(null);
        return;
      }

      // Si el idioma actual coincide con el del post base
      if (basePost.locale === locale) {
        setSinglePost(basePost);
      } else {
        // Buscar traducción en `localizations`
        const translatedPost = basePost.localizations?.find(
          (loc) => loc.locale === locale
        );

        if (translatedPost) {
          // Navegar al nuevo ID en la URL para reflejar la traducción
          setSinglePost(null); // Limpiar el estado para evitar datos obsoletos
          router.replace(`/posts/${translatedPost.id}`);
        } else {
          console.warn(
            `No se encontró una traducción para el post con ID ${postId} en idioma ${locale}.`
          );
          setSinglePost(basePost); // Usar post base como fallback
        }
      }
    }, [postsData, locale, postId, router]);

    if (!singlePost) {
      return (
        <p className="text-center mt-20 text-red-500">
          Cargando el contenido o no se pudo encontrar el post.
        </p>
      );
    }

    // Desestructurar datos del post
    const {
      title,
      text,
      heroImage,
      news_category,
      postDate,
      ImageAlt,
      textContent,
      postGallery,
    } = singlePost;

    // Definir las imágenes de la galería o un array vacío
    const galleryImages =
      postGallery?.map((image) => ({
        src: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`,
        alt: image.alternativeText || `Imagen de galería`,
      })) || [];

    return (
      <motion.section
        className="min-h-[100dvh] flex flex-col justify-start items-start max-w-[1920px] mx-auto pt-[70px] z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
      >
        <div className="w-full flex flex-col gap-6 p-10">
          {/* Botón para volver */}
          <div className="flex items-center gap-2">
            <IoTriangle size="14" className="rotate-[-90deg] text-primary" />
            <Link href="/posts" className="text-primary font-bold hover:underline">
              {pagePostsData?.btnAllPost || "Todas las noticias"}
            </Link>
          </div>
          <div className="w-full flex flex-col justify-start items-start lg:flex-row lg:justify-between lg:items-start gap-8">
          {/* Imagen principal */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
          {heroImage && (
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${heroImage.url}`}
              alt={heroImage.alternativeText || "Imagen del post"}
              width={800}
              height={400}
            />
          )}
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
          {/* Categoría */}
          <span className="text-gray-700">
            {news_category?.category || "Sin categoría"}
          </span>

          {/* Título */}
          <h1 className="text-3xl font-bold">{title}</h1>

          {/* Fecha */}
          <p className="text-gray-600">
            {postDate ? new Date(postDate).toLocaleDateString() : "Fecha no disponible"}
          </p>

          {/* Contenido */}
          <p className="text-lg text-gray-800">{text}</p>
          </div>
          
          </div>
          {/* TextContent */}
          <div className="w-full flex flex-col justify-start items-start gap-4">
            {Array.isArray(textContent) &&
              textContent.map((item, index) => {
                if (item.type === "paragraph") {
                  return (
                    <p
                      key={`${index}-${item.type}`}
                      className="text-[18px] leading-[22px] text-primary font-roboto"
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
                            className={child.bold ? "text-[18px] leading-[22px] text-primary font-roboto font-bold" : ""}
                          >
                            {child.text}
                          </span>
                        )
                      )}
                    </p>
                  );
                }
                return null;
              })}
          </div>

          {/* Galería */}
          {galleryImages.length > 0 && (
            <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-start md:items-center gap-4 mt-8">
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex justify-center items-center">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={200}
                    className="rounded-md cursor-pointer"
                    onClick={() => {
                      setLightboxIndex(index);
                      setLightboxOpen(true);
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Lightbox */}
          {lightboxOpen && (
            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              slides={galleryImages}
              currentIndex={lightboxIndex}
              onIndexChange={setLightboxIndex}
            />
          )}
        </div>
      </motion.section>
    );
};

export default SinglePost;
