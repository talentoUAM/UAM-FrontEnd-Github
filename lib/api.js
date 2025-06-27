console.log("ENTORNO:", process.env.NEXT_PUBLIC_STRAPI_API_URL)

// Cache en memoria
const cache = {};
const CACHE_TTL = 5 * 60 * 1000;

// Función reutilizable con caché
const fetchWithCache = async (url) => {
  const now = Date.now();
  if (cache[url] && (now - cache[url].timestamp < CACHE_TTL)) {
    return cache[url].data;
  }
  const res = await fetch(url);
  const json = await res.json();
  cache[url] = {
    data: json,
    timestamp: now
  };
  return json;
};

// Helpers para devolver data o array vacío
const extractData = (res) => res.data || [];


export const fetchMenu = async (lang) => {
    console.log("ENTORNO NEXT_PUBLIC_STRAPI_API_URL:", process.env.NEXT_PUBLIC_STRAPI_API_URL) 
    console.log("ENTORNO STRAPI_API_URL:", process.env.STRAPI_API_URL) 
 

  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/menus?locale=${lang}`;
  try {
    return await fetchWithCache(url);
  } catch (error) {
    console.error('Error fetching menu:', error);
    return [];
  }
};

export const fetchFooterSections = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/footer-sections?locale=${lang}`;
  try {
    return await fetchWithCache(url);
  } catch (error) {
    console.error('Error fetching footer-sections:', error);
    return [];
  }
};

export const fetchFooterPanels = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/footer-panels?locale=${lang}`;
  try {
    return extractData(await fetchWithCache(url));
  } catch (error) {
    console.error('Error fetching footer panels:', error);
    return [];
  }
};

export const fetchFooterLaUam = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/footer-la-uams?locale=${lang}`;
  // console.log("Fetching footer-la-uams from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || []; // Devuelve solo 'data' o un array vacío si no está presente
  } catch (error) {
    console.error('Error fetching footer La uam:', error);
    return [];
  }
};


export const fetchFooterLaVidaUni = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/footer-vida-universitarias?locale=${lang}`;
  // console.log("Fetching footer-vida-universitarias from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching footer-vida-universitarias:', error);
    return [];
  }
};


export const fetchFooterInformacion = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/footer-informacions?locale=${lang}`;
  // console.log("Fetching footer-informacions from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching footer-informacions:', error);
    return [];
  }
};


export const fetchPageContact = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/page-contact?locale=${lang}`;
  // console.log("Fetching page-contact from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching page-contact:', error);
    return [];
  }
};


export const fetchPageLegalNotice = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/page-legal-notice?locale=${lang}`;
  // console.log("Fetching page-legal-notice from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching page-legal-notice:', error);
    return [];
  }
};


export const fetchFooterLegalMenu = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/footer-legal-menus?locale=${lang}`;
  // console.log("Fetching footer-legal-menus from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching footer-legal-menus:', error);
    return [];
  }
};


export const fetchPageCookies = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/page-cookie?locale=${lang}`;
  // console.log("Fetching page-cookie from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching page-cookie:', error);
    return [];
  }
};


export const fetchPagePrivacyPolicy = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/page-privacy-policy?locale=${lang}`;
  // console.log("Fetching page-privacy-policy from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching page-privacy-policy:', error);
    return [];
  }
};


export const fetchPagePrivacyPolicyContent = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/privacy-policy-contents?locale=${lang}`;
  // console.log("Fetching privacy-policy-contents from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching privacy-policy-contents:', error);
    return [];
  }
};


export const fetchPageAccessibility = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/page-accessibility?locale=${lang}`;
  // console.log("Fetching page-accessibility from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching page-accessibility:', error);
    return [];
  }
};

export const fetchCookiesPolicyPopUp = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/pop-up-cookies-policy?locale=${lang}`;
  // console.log("Fetching cookies-policy-pop-up from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching cookies-policy-pop-up:', error);
    return [];
  }
};


//SECTION HERO-HOME:

export const fetchHomeHeroSection = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home-hero-section?locale=${lang}`;
  // console.log("Fetching home-hero-section from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching home-hero-section:', error);
    return [];
  }
};


export const fetchHomeHeroDownloadSection = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home-hero-download-section?locale=${lang}&populate=*`;
  // console.log("Fetching home-hero-download-section from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching home-hero-download-section:', error);
    return [];
  }
};


export const fetchHomeTileSection = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home-title-section?locale=${lang}`;
  // console.log("Fetching home-title-section from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching home-title-section:', error);
    return [];
  }
};

export const fetchHomeAboutSection = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home-about-section?locale=${lang}`;
  // console.log("Fetching home-about-section from:", url);

  try {
    const result = await fetchWithCache(url);
    // console.log('homeAboutSectionData', result);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching home-about-section:', error);
    return [];
  }
};


export const fetchPressReleases = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/press-releases?locale=${lang}&populate=*`;
  // console.log("Fetching press-releases from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching press-releases:', error);
    return [];
  }
};


export const fetchPosts = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts?locale=${lang}&populate=*`;
  // console.log("Fetching Posts from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching Posts', error);
    return [];
  }
};

export const fetchCategories = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/news-categories?locale=${lang}&populate=*`;
  // console.log("Fetching news-categories from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching news-categories', error);
    return [];
  }
};


export const fetchPagePost = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/page-post?locale=${lang}&populate=*`;
  // console.log("Fetching page-post from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching page-post', error);
    return [];
  }
};


export const fetchPostById = async (id, locale) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts/${id}?locale=${locale}&populate=*`;
  console.log('Fetching single post from:', url);

  try {
    const result = await fetchWithCache(url);
    return result.data || null;
  } catch (error) {
    console.error('Error fetching single post:', error);
    return null;
  }
};

export const fetchHomeCifrasTalento = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home-cifra-talentos`;
  // console.log("Fetching home-cifra-talentos from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || null;
  } catch (error) {
    console.error('Error fetching home-cifra-talentos:', error);
    return null;
  }
};


export const fetchPageAbout = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/page-about?locale=${lang}&populate=*`;
  // console.log("Fetching fetchPageAbout from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching fetchPageAbout', error);
    return [];
  }
};

export const fetchPageAboutBlocks = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/page-about-blocks?locale=${lang}&populate=*`;
  // console.log("Fetching page-about-blocks from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching page-about-blocks', error);
    return [];
  }
};

export const fetchPageAboutTeam = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/page-about-teams?locale=${lang}&populate=*`;
  // console.log("Fetching page-about-teams from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching page-about-teams', error);
    return [];
  }
};

export const fetchPageAboutMembers = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/page-about-members?locale=${lang}&populate=*`;
  // console.log("Fetching PageAboutMembers from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching PageAboutMembers', error);
    return [];
  }
};


export const fetchPageAboutColoborators = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/page-about-colaborators?locale=${lang}&populate=*`;
  // console.log("Fetching PageAboutColoborators from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching PageAboutColoborators', error);
    return [];
  }
};

export const fetchPageResearch = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/page-research?locale=${lang}&populate=*`;
  // console.log("Fetching PageResearch from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching PageResearch', error);
    return [];
  }
};

export const fetchResearchLines = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/research-lines?locale=${lang}&populate=*`;
  // console.log("Fetching ResearchLines from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching ResearchLines', error);
    return [];
  }
};

export const fetchResearchFeatures = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/research-features?locale=${lang}&populate=*`;
  // console.log("Fetching ResearchFeatures from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching ResearchFeatures', error);
    return [];
  }
};


export const fetchResearchPublications = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/research-scientific-publications?locale=${lang}&populate=*`;
  // console.log("Fetching ResearchPublications from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching ResearchPublications', error);
    return [];
  }
};

export const fetchResearchTesis = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/research-teses?locale=${lang}&populate=*`;
  // console.log("Fetching research-teses from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching research-teses', error);
    return [];
  }
};

export const fetchPageTraining = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/page-training?locale=${lang}&populate=*`;
  // console.log("Fetching PageTraining from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching PageTraining', error);
    return [];
  }
};

export const fetchPageTrainingProgram = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/page-training-programs?locale=${lang}&populate=*`;
  // console.log("Fetching page-training-programs from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching page-training-programs', error);
    return [];
  }
};


export const fetchPageTrainingPostgrade = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/page-training-postgrades?locale=${lang}&populate=*`;
  // console.log("Fetching PageTrainingPostgrade from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching PageTrainingPostgrade', error);
    return [];
  }
};


export const fetchPageTransfer = async (lang) => {
  const url = `${ process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/page-transfer?locale=${lang}&populate=*`;
  // console.log("Fetching PageTransfer from:", url);

  try {
    const result = await fetchWithCache(url);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching PageTransfer', error);
    return [];
  }
};
