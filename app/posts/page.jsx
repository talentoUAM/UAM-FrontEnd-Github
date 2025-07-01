'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
//IMPORTS EXT DEPENDENCIES:
import { motion, AnimatePresence } from 'framer-motion';
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
import LoaderComponentInt from "@/components/extraComponents/LoaderComponentInt";
//IMPORT ICONS:
import { IoTriangle } from "react-icons/io5";
import Pagination from "@/components/extraComponents/PaginationComponent";

const PostsPage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const { pagePostsData } = useGlobalState();
  const { newsCategoriesData } = useGlobalState();
  const { postsData } = useGlobalState();
//   console.log('postsData', postsData);

  // Estados
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);

  // Configuración de la paginación
  const postsPerPage = 12;
  const filteredPosts = selectedCategory === "all"
    ? postsData
    : postsData.filter(
        (post) => post.news_category?.category === selectedCategory
      );

  const totalPages = Math.ceil(filteredPosts?.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Manejar el cambio de categoría
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reinicia la paginación
    setIsDropdownOpen(false); // Cierra el menú desplegable
    setIsCategoriesDropdownOpen(true);
  };

  // Manejar el cambio de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Reinicia el filtro al cambiar el idioma
  useEffect(() => {
    setSelectedCategory("all");
    setCurrentPage(1); // Reinicia la paginación al cambiar el idioma
  }, [pagePostsData]); // Cambiar a "all" cuando pagePostsData cambie (indica cambio de idioma)

  return (
    <motion.section
      className="min-h-[100dvh] flex flex-col justify-start items-start overflow-x-hidden max-w-[1920px] mx-auto pt-[70px] z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3 },
      }}
    >
      {/* Título */}
      <div className="w-full min-h-[180px] md:w-[550px] md:h-auto lg:w-[750px] flex justify-start items-center bg-[#35454E] p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] md:mt-[50px]">
        <h1 className="w-[80%] h-full text-left text-accent text-[28px] leading-[32px] md:text-[36px] lg:text-[50px] lg:leading-[54px] md:leading-[40px] font-roboto font-bold uppercase">
          {pagePostsData?.title || "Título no disponible"}
        </h1>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-[50px] p-[10px] mb-[30px] sm:p-[20px] md:p-[30px] md:mb-0 lg:p-[40px] xl:p-[50px]">
        {/* Categorías - Menú desplegable */}
        <div className="relative w-full flex flex-col justify-start items-start gap-4 max-w-[300px] my-4">
          <button
            className="w-full flex justify-between items-center px-4 py-2 bg-accent-blue text-white text-[16px] font-roboto font-bold rounded-md text-left"
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
              setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen);
            }}
          >
            {selectedCategory === "all"
              ? pagePostsData.allCategories
              : selectedCategory}

            <IoTriangle
              size={10}
              className={`transition-transform duration-300 ${
                isCategoriesDropdownOpen ? 'rotate-0' : '-rotate-180'
              }`}
            />
          </button>
          {isDropdownOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute w-full bg-white border border-gray-200 rounded-md shadow-md mt-[38px] z-10"
            >
              {["all", ...newsCategoriesData.map((cat) => cat.category)].map(
                (category, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 hover:bg-accent hover:text-white font-roboto font-bold ${
                      selectedCategory === category ? "bg-white" : ""
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category === "all"
                      ? pagePostsData.allCategories
                      : category}
                  </li>
                )
              )}
            </motion.ul>
          )}
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10">
          {paginatedPosts.map((post, index) => (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <div className="w-full bg-white flex flex-col gap-[10px] group hover:text-accent overflow-hidden">
                <div className="overflow-hidden relative w-full h-[220px]">
                  <Image
                    src={
                      post.heroImage?.url
                        ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.heroImage.url}`
                        : "/assets/home/poster/hero-video-poster.jpg"
                    }
                    alt={
                      post.heroImage?.alternativeText ||
                      post.title ||
                      "Imagen de post"
                    }
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                    className="object-cover w-full h-[260px] xxs:h-[310px] sm:h-[240px] md:h-[260px] lg:h-[160px] xl:h-[260px] xxl:h-[320px]"
                  />
                </div>
                <span className="text-[16px] leading-[24px] font-roboto text-gray-700">
                  {post.news_category?.category || "Sin categoría"}
                </span>
                <h4 className="text-[18px] leading-[24px] font-playfair font-bold text-black group-hover:text-accent transition duration-300">
                  {post.title || "Título no disponible"}
                </h4>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          {/* Paginación */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default PostsPage;
