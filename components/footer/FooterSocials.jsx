import React from 'react';
import Link from 'next/link';
import { MdOutlineFacebook } from 'react-icons/md';
import { FiInstagram } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { AiFillYoutube } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const FooterSocials = () => {
    return (
        <div className="w-full flex justify-center lg:justify-end items-center gap-4">
            <Link href="https://es-es.facebook.com/universidadautonomademadrid" target="_blank" rel="noopener noreferrer">
                <div className="flex justify-center items-center bg-primary hover:bg-accent rounded-full p-1">
                    <MdOutlineFacebook size={20} color="white" />
                </div>
            </Link>
            <Link href="https://www.instagram.com/uammadrid/?hl=es" target="_blank" rel="noopener noreferrer">
                <div className="flex justify-center items-center bg-primary hover:bg-accent rounded-full p-1">
                    <FiInstagram size={20} color="white" />
                </div>
            </Link>
            <Link href="https://www.linkedin.com/school/universidad-autonoma-de-madrid/" target="_blank" rel="noopener noreferrer">
                <div className="flex justify-center items-center bg-primary hover:bg-accent rounded-full p-1">
                    <FaLinkedinIn size={20} color="white" />
                </div>
            </Link>
            <Link href="https://x.com/UAM_Madrid" target="_blank" rel="noopener noreferrer">
                <div className="flex justify-center items-center bg-primary hover:bg-accent rounded-full p-1">
                    <FaXTwitter size={20} color="white" />
                </div>
            </Link>
            <Link href="https://www.youtube.com/channel/UCuV08OGxvz80SQvcj4ZBfKw" target="_blank" rel="noopener noreferrer">
                <div className="flex justify-center items-center bg-primary hover:bg-accent rounded-full p-1">
                    <AiFillYoutube size={20} color="white" />
                </div>
            </Link>
        </div>
    );
};

export default FooterSocials;
