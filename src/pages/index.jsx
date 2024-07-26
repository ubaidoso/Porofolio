// src/pages/index.js
import React from 'react';
import Header from "@/components/Header";
import PortfolioSlider from "@/components/PortfolioSlider";
import BannerSection from '@/components/BannerSection';
import About from '@/components/About';
import Services from '@/components/Services';
import ProgressBar from '@/components/ProgressBar';
import Experience from '@/components/Experience';
import psdToWordpress from '../../public/icon_num_01_f.svg';
import ThemeCustomize from '../../public/icon_num_05_f.svg';
import Webflow from '../../public/icon_num_02_f.svg';
import ReactNext from '../../public/icon_num_08_f.svg';
import CustomTheme from '../../public/icon_num_07_f.svg';

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
    label: "Programming Languages", 
    value: 80, 
    detail : "JavaScript, TypeScript, PHP",
  },
  {  
    label: "Frontend Technologies", 
    value: 98, 
    detail : "HTML, CSS, Bootstrap, Tailwind CSS, Material-UI, React, Next.js, jQuery",
  },
  {  
    label: "Wordpress", 
    value: 97, 
    detail : "Theme development, Theme Customization, Woocommerce Customization, Elementor, Elementor widgets development, Avada, Wp-Bakery, ACF, Oxygen, Divi, Beaver",
  },
  { 
    label: "Shopify", 
    value: 86, 
    detail : "Theme Customization, Store Functionalities",
  },
  {
    label: "Webflow", 
    value: 80, 
    detail : "Sed ut perspiciatis unde omnis iste natus error voluptatem dolorem laudantis totamrem aperiam, eaque ipsa quae ab illo inventore veritatis quasi.",
  },
  {
    label: "React", 
    value: 70, 
    detail : "Sed ut perspiciatis unde omnis iste natus error voluptatem dolorem laudantis totamrem aperiam, eaque ipsa quae ab illo inventore veritatis quasi.",
  },
  {
    label: "Design Platform", 
    value: 70, 
    detail : "Figma, PSD, Adobe XD, Invision, Etc",
  },

];

const experience = [
  {
    company: 'Perfect Web Solutions Pvt. Ltd.',
    duration:'2023 - Present',
    designation:'Senior Web Developer',
  },
  {
    company: 'OSO Software Outstanding',
    duration:'2019 - 2023',
    designation:'Wordpress Developer',
  },
  {
    company: 'Digitech Outsourcing Solution, LLC',
    duration:'2015 - 2016',
    designation:'Data Entry Operator',
  },
  {
    company: 'Home Tutor',
    duration:'2014 - 2016',
    designation:'Home Tutor',
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
              <h2>Special Skills</h2>
              <div className='space-y-3'>
                <h3 className="font-medium text-lg">I am very open to learn new things</h3>
                <p className="text-base font-light leading-6 text-lightblack">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam aperiam eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta.
                </p>
              </div>
            </div>
            <div className="sm:w-6/12">
              <div className="sm:space-y-20 space-y-12">
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
      </section>
      {/* My Experiences */}
      <Experience experienceData={experience} />
    </>
  );
}
