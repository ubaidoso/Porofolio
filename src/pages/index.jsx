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

import portfolio1 from '../../public/project-1-img.png';
import portfolio2 from '../../public/project-2-img.png';
import portfolio3 from '../../public/project-3-img.png';
import portfolio4 from '../../public/project-4-img.png';

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
    label: "Web Development", 
    detail : "WordPress, Webflow, PHP, Laravel, React, Next.js",
  },
  {  
    label: "E-commerce", 
    detail : "Shopify · WooCommerce · Custom Stores",
  },
  {
    label: "Frontend", 
    detail : "HTML5, CSS3, JavaScript, jQuery, Tailwind CSS, Responsive Design",
  },
  {
    label: "Integrations & APIs", 
    detail : "REST APIs, Third-Party API Integration, Payment Gateways, CRM, Automation",
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
    thumbnail: portfolio1,
    title: "Coordinates",
    link: "https://shopcoordinates.com/",
    tools: "Shopify / e-Commerce",
    bgImage: portfolio1,

    description:
      "A customised Shopify storefront built around the brand's requirements, with custom Liquid sections with all the controls, responsive layouts, product functionality and third-party app integrations.",

    tags: [
      "E-Commerce",
      "Shopify Development",
      "Theme Customization",
      "Pre-Order Functionality",
      "Third-Party App Integrations",
    ],
  },

  {
    thumbnail: portfolio2,
    title: "M.I.Y Candle Co.",
    link: "https://miycandleco.com/",
    tools: "Shopify / e-Commerce",
    bgImage: portfolio2,

    description:
      "A customised Shopify storefront with responsive theme development, advanced product functionality and integrations across marketing, CRM, subscriptions, memberships, accounting and workshop management.",

    tags: [
      "E-opmmerce",
      "Klaviyo",
      "POS",
      "Hubspot",
      "Wishlist Plus",
      "AI Automation",
      "BookThatApp",
      "PoptinApp",
      "Shopify Development",
      "Theme Customization",
      "QuickBooks Online",
      "Subscription & Membership",
    ],
  },

  {
    thumbnail: portfolio2,
    title: "Beautiful Books",
    link: "https://beautifulbooks.com/",
    tools: "Shopify / e-Commerce",
    bgImage: portfolio2,

    description:
      "A customised Shopify storefront built with tailored theme development, reusable Liquid sections, responsive controls and custom form functionality to create a flexible and user-friendly shopping experience.",

    tags: [
      "E-opmmerce",
      "Shopify Storefront Customisation",
      "Custom Form Integration",
    ],
  },

  {
    thumbnail: portfolio1,
    title: "HausOfAnabel Black",
    link: "https://hausofanabelblack.com/",
    tools: "WordPress Development",
    bgImage: portfolio1,

    description:
      "A custom WordPress website developed with Elementor Pro, combining responsive layouts with advanced form handling, analytics tracking, reliable email delivery, and Square API integration.",

    tags: [
      "Gravity Forms Integration",
      "Elementor Pro ",
      "SEO",
      "Google Analytics",
      "Google Tag Manager",
      "Square API Integration",

    ],
  },

  {
    thumbnail: portfolio1,
    title: "Midwell",
    link: "#",
    tools: "WordPress Development",
    bgImage: portfolio1,

    description:
      "A custom WordPress platform built with Elementor Pro and ACF, enhanced with custom PHP functionality, booking and search systems, authentication, memberships, dashboards, live chatbot functionality, and tailored host and travel features.",

    tags: [
      "PHP",
      "Theme Development",
      "Custom Live ChatBox",
      "Custom Booking Integration",
      "Advanced Search",
      "User Authentication",
      "Custom Dashboard",
      "Membership & Subscription",
      "ACF + Elementor Pro"
    ],
  },

  {
    thumbnail: portfolio1,
    title: "CommunityMFG",
    link: "https://communitymfg.com/",
    tools: "WordPress Development",
    bgImage: portfolio1,

    description:
      "A custom WordPress and WooCommerce platform built with PHP and ACF, featuring advanced product customisation, custom authentication, quote requests, PDF generation and tailored eCommerce functionality.",

    tags: [
      "PHP",
      "Theme Development",
      "Woocommerce",
      "Advanced Search",
      "User Authentication",
      "Custom Dashboard",
      "Custom PDF Generation",
      "ACF + Elementor Pro",
      "Gravity Forms",
    ],
  },


  {
    thumbnail: portfolio4,
    title: "Safe Generations",
    link: "https://www.safegenerations.org/",
    tools: "WordPress Development",
    bgImage: portfolio4,

    description:
      "A responsive WordPress website built with Elementor Pro, focused on a clean, accessible and user-friendly experience.",

    tags: [
      "Performance & UX Optimisation",
      "Elementor Pro",
      "SEO",
      "Google Tag Manager",
    ],
  },
];

export default function Home() {

  return (
    <>
      <Header />

      <BannerSection />

      {/* <About /> */}

      {/* <Services serviceData={services} /> */}

      {/* Technologies Skill */}
      {/* <section className='sm:my-24 my-12'>
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
                        <h3 className="font-semibold md:text-2xl text-lg">{skillItem.value}%</h3>
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
      </section> */}
      
      {/* Portfolio */}
      <section className='py-20'>
        <div className="container">
          <div className="w-26rem mb-12">
            <h2 className="mb-6">Things 1&apos;ve built</h2>
            <p>A selection of websites, eCommerce stores, plugins and web applications I've designed, developed and maintained.</p>
          </div>
          <PortfolioSlider portfolio={portfolioData} /> 
        </div>
      </section>

      {/* <section>
        <GsapCompo />
      </section> */}

      {/* My Experiences */}
      {/* <Experience experienceData={experience} /> */}
      
      <Footer></Footer>
    </>
  );
}
