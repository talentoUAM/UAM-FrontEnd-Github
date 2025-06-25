
import { Playfair_Display, Roboto } from 'next/font/google';
// import { motion, AnimatePresence } from 'framer-motion';

import GlobalStateContextProvider, { useGlobalState } from "@/context/GlobalStateContext";
import LoaderWrapper from "@/components/extraComponents/LoaderWrapper"; 
import Header from "@/components/header/Header";
import CookiesPolicy from '@/components/extraComponents/CookiesPolicy';
import FooterUAM from '@/components/footer/FooterUAM';
import "./globals.css";


 

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair'
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto'
});

export const metadata = {
  title: "Talento UAM",
  description: "Universidad Autonoma de Madrid",
  icons: {
    icon: '/favicon.ico', // Ruta al favicon en la carpeta public
  },
};

export default function RootLayout({ children }) {


  return (
    <GlobalStateContextProvider>
      <html lang="es">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="icon" href="/favicon.png" />
        </head>
        <body
          className={`${playfairDisplay.variable} ${roboto.variable} max-w-[1920px] mx-auto antialiased overflow-x-hidden`}
          style={{ position: 'relative' }}
        >
          <Header />
          <LoaderWrapper>{children}</LoaderWrapper>
          <FooterUAM />
          <CookiesPolicy />
        </body>
      </html>
    </GlobalStateContextProvider>
  );
}
