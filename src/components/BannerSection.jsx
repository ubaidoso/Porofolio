import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import Google from "../../public/gmail.png";
import Github from "../../public/github.png";
import Linkedin from "../../public/linkedin.png";
import download from '../../public/download.svg'

const myConnections = [
    {
        link: "#",
        icon: Google,
        title: "Email",
    },
    {
        link: "https://github.com/ubaidoso",
        icon: Github,
        title: "Github",
    },
    {
        link: "https://www.linkedin.com/in/ubaid-tahir-65059",
        icon: Linkedin,
        title: "Linkedin",
    },
];


const BannerSection = () => {

    return (
        <>
            <section className="cst_banner_section pt-12">
                <div className="container">
                    <h1>I Build Websites <span className="cst_and">&</span><br />Web Applications That Work.</h1>
                    <div className="mt-8">
                        <div className="xl:max-w-4xl lg:max-w-3xl sm:border-l border-black lg:ml-10 lg:pl-10 sm:ml-6 sm:pl-6 py-1">
                            <p className="xl:text-lg text-base text-lightgrey sm:text-start text-justify">
                                I&apos;m a <strong>Web Developer specializing</strong> in WordPress, Shopify, Laravel, Next.js, WooCommerce, and Webflow. I build responsive websites, eCommerce stores, custom web applications, and business integrations that are designed to be reliable, scalable, and easy to use. Whether you're looking to launch a new website, improve an existing platform, or build a custom solution, I focus on turning ideas and business requirements into practical digital experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='lg:py-36 sm:py-20 py-12 border-b border-lightblack'>
                <div className="container">
                    <div className="flex md:flex-nowrap flex-wrap md:flex-row flex-col-reverse gap-8 items-center justify-between">
                        <ul className='flex flex-wrap items-center lg:gap-10 gap-7 sm:justify-between justify-center'>
                            {myConnections.map((myConnect, index) => (
                                <li key={index}>
                                    <Link href={myConnect.link} className='flex gap-4 items-center uppercase'>
                                        <Image src={myConnect.icon} width={18} height={18} alt={myConnect.icon} />
                                        {myConnect.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link href='/Ubaid-Updated-CV-2026.pdf' className='cst_fill btn flex gap-2' download="">Download My CV <Image src={download} width={20} /> </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerSection;
