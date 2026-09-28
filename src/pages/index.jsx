// src/pages/index.js
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioSlider from "@/components/PortfolioSlider";
import BannerSection from '@/components/BannerSection';
import About from '@/components/About';
import Services from '@/components/Services';
import ProgressBar from '@/components/ProgressBar';
import Experience from '@/components/Experience';
import GsapCompo from '@/components/Gsap';

import psdToWordpress from '../../public/icon_num_01_f.svg';
import ThemeCustomize from '../../public/icon_num_05_f.svg';
import Webflow from '../../public/icon_num_02_f.svg';
import ReactNext from '../../public/icon_num_08_f.svg';
import CustomTheme from '../../public/icon_num_07_f.svg';

import portfolio1 from '../../public/portfolio-1.jpg';
import portfolio2 from '../../public/portfolio-2.jpg';
import portfolio3 from '../../public/screenshot.png';
import portfolio4 from '../../public/Fundrasing.jpg';

const services = [
  {
    icon: psdToWordpress,
    title: 'PSD To Wordpress',
    detail: 'Nemo enim ipsam voluptatem quia volupta sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.',
  },
  {
    icon: ThemeCustomize,
    title: 'Custom Theme Development',
    detail: 'Nemo enim ipsam voluptatem quia volupta sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.',
  },
  {
    icon: Webflow,
    title: 'Webflow',
    detail: 'Nemo enim ipsam voluptatem quia volupta sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.',
  },
  {
    icon: CustomTheme,
    title: 'Shopify',
    detail: 'Nemo enim ipsam voluptatem quia volupta sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.',
  },
  {
    icon: ReactNext,
    title: 'React / Next js',
    detail: 'Nemo enim ipsam voluptatem quia volupta sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.',
  },

];

const skillsTechnology = [
  {  
    label: "WordPress", 
    detail : "Theme Development, Plugin Development, WooCommerce, Elementor, ACF, WPBakery, Divi, Custom Functionality",
  },
  {  
    label: "Shopify", 
    detail : "Theme Customization, Liquid, Custom Sections, Store Functionality, Product & Collection Setup, App Integrations",
  },
  {
    label: "Laravel & PHP", 
    detail : "Laravel Development, PHP, MySQL, REST APIs, Backend Development, Custom Web Applications",
  },
  {
    label: "Frontend Development", 
    detail : "HTML5, CSS3, JavaScript, jQuery, React, Next.js, Bootstrap, Tailwind CSS",
  },
  { 
    label: "Webflow", 
    detail : "Custom Web Design, CMS, Responsive Development, Interactions & Animations",
  },
  {
    label: "Integrations & APIs", 
    detail : "REST APIs, Third-Party API Integration, Payment Gateways, CRM Integrations, Webhooks, Automation",
  },
  {  
    label: "CRM & Marketing", 
    detail : "Klaviyo, HubSpot, Twilio, Email Automation, SMS Automation, Customer Data Management, Marketing Integrations",
  },
  
  {
    label: "Development Tools", 
    detail : "Git, GitHub, cPanel, SiteGround, Deployment, Version Control, Debugging & Troubleshooting",
    value: "10",
  },

];

const experience = [
  {
    company: 'Perfect Web Solutions Pvt. Ltd.',
    duration: '2023 - Present',
    designation: 'Senior Web Developer',
    responsibilities: [
      'Develop and maintain modern, responsive websites and web applications.',
      'Build custom solutions using Laravel, WordPress and Shopify.',
      'Integrate APIs, payment gateways and optimize website performance.',
    ],
  },
  {
    company: 'OSO Software Outstanding, LLC',
    duration: '2019 - 2023',
    designation: 'WordPress Developer',
    responsibilities: [
      'Developed and customized WordPress websites, themes and plugins.',
      'Created responsive layouts and improved website functionality.',
    ],
  },
  {
    company: 'Digitech Outsourcing Solution, LLC',
    duration: '2015 - 2016',
    designation: 'Data Entry Operator',
    responsibilities: [
      'Managed data entry tasks and maintained accurate digital records.',
      'Organized information and ensured data accuracy.',
    ],
  },
];

const portfolioData = [
  {
    thumbnail:"",
    title:"",
    link:"",
    tools:"",
    bgImage:portfolio1,
  },

  {
    thumbnail:"",
    title:"",
    link:"",
    tools:"",
    bgImage:portfolio2,
  },
  {
    thumbnail:"",
    title:"",
    link:"",
    tools:"",
    bgImage:portfolio3,
  },
  {
    thumbnail:"",
    title:"",
    link:"",
    tools:"",
    bgImage:portfolio4,
  },
]

export default function Home() {




  return (
    <>
      <Header />
      <BannerSection />
      <About />
      <Services serviceData={services} />
      {/* Technologies Skill */}
      <section className='sm:my-24 my-12'>
        <div className="container mx-auto py-8">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="space-y-12 sm:first:w-5/12 sm:sticky sm:top-16 sm:self-start">
              <h2>Technical Skills</h2>
              <div className='space-y-3'>
                <p className="text-base font-light leading-6 text-lightblack">
                  I build modern, responsive, and scalable digital experiences, specializing in WordPress, Shopify, Laravel, and modern frontend development. My experience also includes eCommerce, custom functionality, API integrations, CRM platforms, and website deployment.
                </p>
              </div>
            </div>
            <div className="sm:w-6/12">
              <div className="sm:space-y-8 space-y-8">
                {skillsTechnology.map((skillItem, index) => (
                  <div key={index} className="space-y-8">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h2 className="font-semibold md:text-2xl text-lg">{skillItem.label}</h2>
                        {/* <h3 className="font-semibold md:text-2xl text-lg">{skillItem.value}%</h3> */}
                      </div>
                      <p className="text-base font-light leading-6 text-lightblack">{skillItem.detail}</p>
                    </div>
                    <ProgressBar progress={skillItem.value} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio */}
      <section>
        <PortfolioSlider portfolio={portfolioData} /> 
      </section>

      {/* <section>
        <GsapCompo />
      </section> */}

      {/* My Experiences */}
      <Experience experienceData={experience} />
      
      <Footer></Footer>
    </>
  );
}
