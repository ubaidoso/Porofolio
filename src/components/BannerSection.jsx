import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import Counter from './Counter';
import Behance from "../../public/behance.png";
import Dribble from "../../public/basketball.png";
import Github from "../../public/github.png";
import Linkedin from "../../public/linkedin.png";
import Button from './Button';

const myConnections = [
    {
        link: "#",
        icon: Behance,
        title: "Behance",
    },
    {
        link: "#",
        icon: Dribble,
        title: "Dribble",
    },
    {
        link: "#",
        icon: Github,
        title: "Github",
    },
    {
        link: "#",
        icon: Linkedin,
        title: "Linkedin",
    },
];

const counterData = [
  { targetCount: 200, title: "Satisfied Clients" },
];

const BannerSection = () => {

    return (
        <>
            <section className="cst_banner_section pt-12">
                <div className="container">
                    <h1>Digital Designer <span className="cst_and">&</span><br />Fr <span className="sm:-ml-3 -ml-1 xl:w-46rem w-28 border-lightblack xl:border-9 sm:border-8 border-6 xl:h-16 sm:h-9 h-7 inline-block rounded-full cst_stylish_zero"></span>nt-End Developer</h1>
                    <div className="sm:flex items-center mt-8">
                        {counterData.map((counter, index) => (
                            <Counter key={index} targetCount={counter.targetCount} title={counter.title} />
                        ))}
                        <div className="xl:max-w-4xl lg:max-w-3xl sm:border-l border-black lg:ml-10 lg:pl-10 sm:ml-6 sm:pl-6 py-1">
                            <p className="xl:text-lg text-base text-lightgrey sm:text-start text-justify">
                                I am a <strong>Professional Digital Designer and Front-End Developer.</strong> This website contains design works that I have produced over the past few years. Find various types of design projects such as logo designs, brochure designs, product packaging designs, website designs, and many more.
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
                        <Button title={'Scroll Down'} link={'#one_step_down'} btnClass={'cst_bg_tran'} icon={true} down={true} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerSection;
