'use client';

import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchMenu, fetchHomeHeroSection, fetchHomeHeroDownloadSection, fetchHomeTileSection, fetchHomeAboutSection, fetchPressReleases, fetchHomeCifrasTalento, fetchPageAbout, fetchPageAboutBlocks, fetchPageAboutTeam, fetchPageAboutMembers, fetchPageAboutColoborators, fetchPageResearch, fetchResearchLines, fetchResearchFeatures, fetchResearchPublications, fetchResearchTesis, fetchPageTraining, fetchPageTrainingProgram, fetchPageTrainingPostgrade, fetchPageTransfer, fetchPagePost, fetchPosts, fetchCategories, fetchFooterSections, fetchFooterPanels, fetchFooterLaUam, fetchFooterLaVidaUni, fetchFooterInformacion, fetchPageContact, fetchPageLegalNotice, fetchFooterLegalMenu, fetchPageCookies, fetchPagePrivacyPolicy, fetchPagePrivacyPolicyContent, fetchPageAccessibility, fetchCookiesPolicyPopUp} from "@/lib/api";

// Crear contexto
const GlobalStateContext = createContext();

// Hook para usar el contexto
export const useGlobalState = () => useContext(GlobalStateContext);

// Proveedor de contexto
const GlobalStateContextProvider = ({ children }) => {
    const [locale, setLocale] = useState(null);
    const [currentLocale, setCurrentLocale] = useState("es");
    const [isLoading, setIsLoading] = useState(true);
    const [isOpenNav, setIsOpenNav] = useState(false);
    const [isNavActive, setIsNavActive] = useState(false);
    const [isMobile, setIsMobile] = useState();
    const [mobileNav, setMobileNav] = useState(false);

    //Header
    const [menuData, setMenuData] = useState([]);

    //Home
    const [homeHeroData, setHomeHeroData] = useState([]);
    const [homeHeroDownloadData, setHomeHeroDownloadData] = useState([]);
    const [homeTitleSectionsData, setHomeTitleSectionsData] = useState([]);
    const [homeCifrasTalentoData, setHomeCifrasTalentoData] = useState([]);
    const [homeAboutSectionData, setHomeAboutSectionData] = useState([]);

    //Press Releases
    const [pressReleasesData, setPressReleasesData] = useState([]);

    //Page About
    const [pageAboutData, setPageAboutData] = useState([]);
    const [pageAboutBlocks, setPageAboutBlocksData] = useState([]);
    const [pageAboutTeamData, setPageAboutTeamData] = useState([]);
    const [pageAboutTeamMembersData, setPageAboutTeamMembersData] = useState([]);
    const [pageAboutTeamColaboratorsData, setPageAboutTeamColaboratorsData] = useState([]);
    
    //Page Research
    const [pageResearchData, setPageResearchData] = useState([]);
    const [researchLinesData, setResearchLinesData] = useState([]);
    const [researchFeaturesData, setResearchFeaturesData] = useState([]);
    const [researchPublicationsData, setResearchPublicationsData] = useState([]);
    const [researchTesisData, setResearchTesisData] = useState([]);
    //Page Trining
    const [pageTrainingData, setPageTrainingData] = useState([]);
    const [trainingProgramsData, setTrainingProgramsData] = useState([]);
    const [trainingPostgradeData, setTrainingPostgradeData] = useState([]);
    //Page Transfer
    const [pageTransferData, setPageTransferData] = useState([]);
    //Posts
    const [postsData, setPostsData] = useState([]);
    const [pagePostsData, setPagePostsData] = useState([]);
    const [newsCategoriesData, setNewsCategoriesData] = useState([]);
    const [singlePost, setSinglePost] = useState([]);
    //Footer
    const [footerLegalMenuData, setFooterLegalMenuData] = useState([]);
    const [footerSectiosData, setFooterSectionsData] = useState([]);
    const [footerPanelsData, setFooterPanelsData] = useState([]);
    const [footerLaUamData, setFooterLaUamData] = useState([]);
    const [footerLaVidaUniData, setFooterLaVidaUniData] = useState([]);
    const [footerInformacionData, setFooterInformacionData] = useState([]);
    //Pages:
    const [pageContactData, setPageContactData] = useState([]);
    const [pageLegalNoticeData, setPageLegalNoticeData] = useState([]);
    const [pageCookiesData, setPageCookiesData] = useState([]);
    const [pagePrivacyPolicyData, setPagePrivacyPolicyData] = useState([]);
    const [pagePrivacyPolicyContentData, setPagePrivacyPolicyContentData] = useState([]);
    const [pageAccessibilityData, setPageAccessibilityData] = useState([]);
    //PopUps
    const [popUpCookiesPolicyData, setPopUpCookiesPolicyData] = useState([]);


    // Establecer idioma del navegador una vez en el primer renderizado
    useEffect(() => {
        if (!locale) {
            const browserLanguage = navigator.language.startsWith('en') ? 'en' : 'es';
            setLocale(browserLanguage);
        }
    }, [locale]);

    // Cargar los datos después de que `locale` haya sido definido
    useEffect(() => {
        if (!locale) return; // Solo cargar cuando `locale` esté definido

        const loadContent = async () => {
            setIsLoading(true);
            
            const [menu, homeHeroSection, homeHeroDownloadSection, homeTitleSection, homeAboutSection, pressReleases, homeCifrasTalento, pageAbout, pageAboutBlocks, pageAboutTeam, pageAboutTeamMembers, pageAboutTeamColaborators, pageResearch, researchLines, researchFeatures, researchPublications, researchTesis, pageTraining, trainingPrograms, trainingPostgrade, pageTransfer, pagePosts, posts, newsCategories, footerLegalMenu, footerSections, footerPanels, footerLaUam, footerLaVidaUni, footerInformacion, pageContact, pageLegalNotice, pageCookies, pagePrivacyPolicy, pagePrivacyPolicyContent, pageAccessibility, popUpCookiesPolicy] = await Promise.all([
                fetchMenu(locale),
                fetchHomeHeroSection(locale),
                fetchHomeHeroDownloadSection(locale),
                fetchHomeTileSection(locale),
                fetchHomeAboutSection(locale),
                fetchPressReleases(locale),
                fetchHomeCifrasTalento(locale),
                fetchPageAbout(locale),
                fetchPageAboutBlocks(locale),
                fetchPageAboutTeam(locale),
                fetchPageAboutMembers(locale),
                fetchPageAboutColoborators(locale),
                fetchPageResearch(locale),
                fetchResearchLines(locale),
                fetchResearchFeatures(locale),
                fetchResearchPublications(locale),
                fetchResearchTesis(locale),
                fetchPageTraining(locale),
                fetchPageTrainingProgram(locale),
                fetchPageTrainingPostgrade(locale),
                fetchPageTransfer(locale),
                fetchPagePost(locale),
                fetchPosts(locale),
                fetchCategories(locale),
                fetchFooterLegalMenu(locale),
                fetchFooterSections(locale),
                fetchFooterPanels(locale),
                fetchFooterLaUam(locale),
                fetchFooterLaVidaUni(locale),
                fetchFooterInformacion(locale),
                fetchPageContact(locale),
                fetchPageLegalNotice(locale),
                fetchPageCookies(locale),
                fetchPagePrivacyPolicy(locale),
                fetchPagePrivacyPolicyContent(locale),
                fetchPageAccessibility(locale),
                fetchCookiesPolicyPopUp(locale),
            ]);

            // Asignación de datos a los estados correspondientes
            setMenuData(menu);
            setHomeHeroData(homeHeroSection);
            setHomeHeroDownloadData(homeHeroDownloadSection);
            setHomeTitleSectionsData(homeTitleSection);
            setHomeAboutSectionData(homeAboutSection)
            setPressReleasesData(pressReleases);
            setHomeCifrasTalentoData(homeCifrasTalento);
            setPageAboutData(pageAbout);
            setPageAboutBlocksData(pageAboutBlocks);
            setPageAboutTeamData(pageAboutTeam);
            setPageAboutTeamMembersData(pageAboutTeamMembers);
            setPageAboutTeamColaboratorsData(pageAboutTeamColaborators);
            setPageResearchData(pageResearch);
            setResearchLinesData(researchLines);
            setResearchFeaturesData(researchFeatures);
            setResearchPublicationsData(researchPublications);
            setResearchTesisData(researchTesis);
            setPageTrainingData(pageTraining);
            setTrainingProgramsData(trainingPrograms);
            setTrainingPostgradeData(trainingPostgrade);
            setPageTransferData(pageTransfer)
            setPagePostsData(pagePosts);
            setPostsData(posts);
            setNewsCategoriesData(newsCategories);
            setFooterLegalMenuData(footerLegalMenu);
            setFooterSectionsData(footerSections);
            setFooterPanelsData(footerPanels);
            setFooterLaUamData(footerLaUam);
            setFooterLaVidaUniData(footerLaVidaUni);
            setFooterInformacionData(footerInformacion);
            setPageContactData(pageContact);
            setPageLegalNoticeData(pageLegalNotice);
            setPageCookiesData(pageCookies);
            setPagePrivacyPolicyData(pagePrivacyPolicy);
            setPagePrivacyPolicyContentData(pagePrivacyPolicyContent);
            setPageAccessibilityData(pageAccessibility);
            setPopUpCookiesPolicyData(popUpCookiesPolicy);
            
            setIsLoading(false); // Finaliza la carga
        };

        loadContent();
    }, [locale]);
    
    // Función para cambiar el idioma y recargar el menú
    const changeLanguage = async (newLocale) => {
        setLocale(newLocale);
    };

    // Función para cargar el menú desde Strapi
    // useEffect(() => {
    //     const loadMenu = async () => {
    //         setIsLoading(true); // Opcional: indica que está cargando
    //         const data = await fetchMenu(locale); // Llama a `fetchMenu` con el idioma actual
    //         setMenuData(data);
    //         setIsLoading(false); // Opcional: indica que terminó de cargar
    //     };
    //     const loadfooterLegalMenu = async () => {
    //         setIsLoading(true); // Opcional: indica que está cargando
    //         const data = await fetchFooterLegalMenu(locale); // Llama a `fetchFooterLegalMenu` con el idioma actual
    //         setFooterLegalMenuData(data);
    //         setIsLoading(false); // Opcional: indica que terminó de cargar
    //     };

    //     const loadfooterSections = async () => {
    //         setIsLoading(true); // Opcional: indica que está cargando
    //         const data = await fetchFooterSections(locale); // Llama a `fetchFooterSections` con el idioma actual
    //         setFooterSectionsData(data);
    //         setIsLoading(false); // Opcional: indica que terminó de cargar
    //     };

    //     const loadFooterPanels = async () => {
    //         setIsLoading(true); // Opcional: indica que está cargando
    //         const data = await fetchFooterPanels(locale); // Llama a `fetchMenu` con el idioma actual
    //         setFooterPanelsData(data);
    //         setIsLoading(false); // Opcional: indica que terminó de cargar
    //     };

    //     const loadFooterLaUam = async () => {
    //         setIsLoading(true); // Opcional: indica que está cargando
    //         const data = await fetchFooterLaUam(locale); // Llama a `fetchMenu` con el idioma actual
    //         setFooterLaUamData(data);
    //         setIsLoading(false); // Opcional: indica que terminó de cargar
    //     };

    //     const loadFooterLaVidaUni = async () => {
    //         setIsLoading(true); // Opcional: indica que está cargando
    //         const data = await fetchFooterLaVidaUni(locale); // Llama a `fetchMenu` con el idioma actual
    //         setFooterLaVidaUniData(data);
    //         setIsLoading(false); // Opcional: indica que terminó de cargar
    //     };

    //     const loadFooterInformacion = async () => {
    //         setIsLoading(true); // Opcional: indica que está cargando
    //         const data = await fetchFooterInformacion(locale); // Llama a `fetchMenu` con el idioma actual
    //         setFooterInformacionData(data);
    //         setIsLoading(false); // Opcional: indica que terminó de cargar
    //     };

    //     const loadPageContact = async () => {
    //         setIsLoading(true); // Opcional: indica que está cargando
    //         const data = await fetchPageContact(locale); // Llama a `fetchMenu` con el idioma actual
    //         setPageContactData(data);
    //         setIsLoading(false); // Opcional: indica que terminó de cargar
    //     };

    //     const loadPageLegalNotice = async () => {
    //         setIsLoading(true); // Opcional: indica que está cargando
    //         const data = await fetchPageLegalNotice(locale); // Llama a `fetchMenu` con el idioma actual
    //         setPageLegalNoticeData(data);
    //         setIsLoading(false); // Opcional: indica que terminó de cargar
    //     };

    //     const loadPageCookies = async () => {
    //         setIsLoading(true); // Opcional: indica que está cargando
    //         const data = await fetchPageCookies(locale); // Llama a `fetchMenu` con el idioma actual
    //         setPageCookiesData(data);
    //         setIsLoading(false); // Opcional: indica que terminó de cargar
    //     };

    //     const loadPagePrivacyPolicy = async () => {
    //         setIsLoading(true); // Opcional: indica que está cargando
    //         const data = await fetchPagePrivacyPolicy(locale); // Llama a `fetchMenu` con el idioma actual
    //         setPagePrivacyPolicyData(data);
    //         setIsLoading(false); // Opcional: indica que terminó de cargar
    //     };

    //     const loadPagePrivacyContentPolicy = async () => {
    //         setIsLoading(true); // Opcional: indica que está cargando
    //         const data = await fetchPagePrivacyPolicyContent(locale); // Llama a `fetchMenu` con el idioma actual
    //         setPagePrivacyPolicyContentData(data);
    //         setIsLoading(false); // Opcional: indica que terminó de cargar
    //     };

    //     const loadPageAccessibility = async () => {
    //         setIsLoading(true); // Opcional: indica que está cargando
    //         const data = await fetchPageAccessibility(locale); // Llama a `fetchMenu` con el idioma actual
    //         setPageAccessibilityData(data);
    //         setIsLoading(false); // Opcional: indica que terminó de cargar
    //     };

    //     const loadPopUpCookiesPolicy = async () => {
    //         setIsLoading(true); // Opcional: indica que está cargando
    //         const data = await fetchCookiesPolicyPopUp(locale); // Llama a `fetchMenu` con el idioma actual
    //         setPopUpCookiesPolicyData(data);
    //         setIsLoading(false); // Opcional: indica que terminó de cargar
    //     };

    //     loadMenu();
    //     loadfooterLegalMenu()
    //     loadfooterSections();
    //     loadFooterPanels();
    //     loadFooterLaUam();
    //     loadFooterLaVidaUni();
    //     loadFooterInformacion();
    //     loadPageContact();
    //     loadPageLegalNotice();
    //     loadPageCookies();
    //     loadPagePrivacyPolicy();
    //     loadPagePrivacyContentPolicy();
    //     loadPageAccessibility();
    //     loadPopUpCookiesPolicy();
    // }, [locale]); // Se ejecuta cada vez que cambia el idioma fetchFooterPanels

    return (
        <GlobalStateContext.Provider
            value={{
                locale, setLocale,
                currentLocale, setCurrentLocale,
                setLocale: changeLanguage,
                isLoading, setIsLoading,
                isOpenNav, setIsOpenNav,
                isNavActive, setIsNavActive,
                mobileNav, setMobileNav,
                isMobile, setIsMobile,
                //Header
                menuData, setMenuData, // Incluye `menuData` en el contexto
                //Home
                homeHeroData, setHomeHeroData,
                homeHeroDownloadData, setHomeHeroDownloadData,
                homeTitleSectionsData, setHomeTitleSectionsData,
                homeCifrasTalentoData, setHomeCifrasTalentoData,
                homeAboutSectionData, setHomeAboutSectionData,
                //PressReleases
                pressReleasesData, setPressReleasesData,
                //PageAbout
                pageAboutData, setPageAboutData,
                pageAboutBlocks, setPageAboutBlocksData,
                pageAboutTeamData, setPageAboutTeamData,
                pageAboutTeamMembersData, setPageAboutTeamMembersData,
                pageAboutTeamColaboratorsData, setPageAboutTeamColaboratorsData,
                //PageResearch
                pageResearchData, setPageResearchData,
                researchLinesData, setResearchLinesData,
                researchFeaturesData, setResearchFeaturesData,
                researchPublicationsData, setResearchPublicationsData,
                researchTesisData, setResearchTesisData,
                //PageTraining
                pageTrainingData, setPageTrainingData,
                trainingProgramsData, setTrainingProgramsData,
                trainingPostgradeData, setTrainingPostgradeData,
                //Page Transfer
                pageTransferData, setPageTransferData,
                //Posts
                pagePostsData, setPagePostsData,
                postsData, setPostsData,
                newsCategoriesData, setNewsCategoriesData,
                singlePost, setSinglePost,
                //Footer
                footerLegalMenuData, setFooterLegalMenuData,
                footerSectiosData, setFooterSectionsData,
                footerPanelsData, setFooterPanelsData,
                footerLaUamData, setFooterLaUamData,
                footerLaVidaUniData, setFooterLaVidaUniData,
                footerInformacionData, setFooterInformacionData,
                //Pages
                pageContactData, setPageContactData,
                pageLegalNoticeData, setPageLegalNoticeData,
                pageCookiesData, setPageCookiesData,
                pagePrivacyPolicyData, setPagePrivacyPolicyData,
                pagePrivacyPolicyContentData, setPagePrivacyPolicyContentData,
                pageAccessibilityData, setPageAccessibilityData,
                //PopUps
                popUpCookiesPolicyData, setPopUpCookiesPolicyData,

            }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalStateContextProvider;
