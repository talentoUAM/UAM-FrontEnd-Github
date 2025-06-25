// src/context/HomeContext.jsx
'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import {
  fetchHomeHeroSection,
  fetchHomeHeroDownloadSection,
  fetchHomeTileSection,
  fetchHomeAboutSection,
  fetchPressReleases,
  fetchHomeCifrasTalento
} from '@/lib/api';

const HomeContext = createContext();
export const useHomeContext = () => useContext(HomeContext);

export const HomeContextProvider = ({ locale, children }) => {
  const [homeHeroData, setHomeHeroData] = useState([]);
  const [homeHeroDownloadData, setHomeHeroDownloadData] = useState([]);
  const [homeTitleSectionsData, setHomeTitleSectionsData] = useState([]);
  const [homeCifrasTalentoData, setHomeCifrasTalentoData] = useState([]);
  const [homeAboutSectionData, setHomeAboutSectionData] = useState([]);
  const [pressReleasesData, setPressReleasesData] = useState([]);

  useEffect(() => {
    if (!locale) return;

    const load = async () => {
      const [hero, download, title, cifras, about, press] = await Promise.all([
        fetchHomeHeroSection(locale),
        fetchHomeHeroDownloadSection(locale),
        fetchHomeTileSection(locale),
        fetchHomeCifrasTalento(locale),
        fetchHomeAboutSection(locale),
        fetchPressReleases(locale),
      ]);
      setHomeHeroData(hero);
      setHomeHeroDownloadData(download);
      setHomeTitleSectionsData(title);
      setHomeCifrasTalentoData(cifras);
      setHomeAboutSectionData(about);
      setPressReleasesData(press);
    };
    load();
  }, [locale]);

  return (
    <HomeContext.Provider
      value={{
        homeHeroData,
        homeHeroDownloadData,
        homeTitleSectionsData,
        homeCifrasTalentoData,
        homeAboutSectionData,
        pressReleasesData,
      }}>
      {children}
    </HomeContext.Provider>
  );
};
