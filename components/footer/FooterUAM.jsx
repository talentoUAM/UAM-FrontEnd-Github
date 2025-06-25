import React from 'react'
import FooterSocials from './FooterSocials';
import FooterLogos from './FooterLogos';
import FooterLegal from './footer-sections/FooterLegal';
import LaUAM from './footer-sections/LaUAM';
import VidaUniversitaria from './footer-sections/VidaUniversitaria';
import Informacion from './footer-sections/Informacion';
import Paneles from './footer-sections/Paneles';

function FooterUAM() {


    return ( 
        <footer className="">
            <div className="w-full border-t border-[#dee2de]">
                <div className="flex flex-col lg:flex-row justify-start items-start lg:border-b border-[#dee2de] ">
                    <div className="w-full lg:w-[30%] xl:w-[20%] h-full flex justify-start items-start p-[10px] sm:p-[20px] xl:p-[40px]  ">
                        <Paneles />
                    </div>
                    <div className="w-full lg:w-[70%] xl:w-[80%] flex flex-col lg:flex-row justify-start items-start gap-0 lg:gap-14  border-l border-[#dee2de] px-[10px] sm:px-[20px] lg:py-[20px] xl:p-[40px] my-0 lg:my-0">
                        <LaUAM />
                        <VidaUniversitaria />
                        <Informacion />
                    </div>
                </div>
                <div className="w-full flex justify-start items-start  border-b border-[#dee2de]">   
                    <div className="w-full lg:w-[30%] xl:w-[20%] h-full hidden lg:flex justify-start items-start p-[10px] sm:p-[20px] xl:p-[40px]">
                        <FooterSocials />
                    </div>
                    <div className="w-full lg:w-[70%] xl:w-[80%] h-full flex justify-start items-start border-l border-[#dee2de] p-[10px] sm:p-[20px] xl:p-[40px] my-8 lg:my-0">
                        <FooterLegal />
                    </div>
                </div>
                <div className="w-full flex justify-center items-center  border-b border-[#dee2de] p-[40px]"> 
                    <FooterLogos />
                </div>
            </div>
            <div className="w-full flex flex-col justify-center md:justify-start items-start gap-1 mt-[10px] mb-[10px] xl:mt-[20px] xl:mb-[20px] xxl:mt-[30px] xxl:mb-[30px]">
                <p className="w-full text-center text-black text-[12px] xl:text-[14px] font-archiaLight">
                    © Neway Digital Studios, 2024. Todos los derechos reservados
                </p>
                
            </div>
        </footer>
    )
}

export default FooterUAM;