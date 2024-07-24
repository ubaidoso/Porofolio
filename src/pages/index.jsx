// src/pages/index.js
import React from 'react';
import Header from "@/components/Header";
import PortfolioSlider from "@/components/PortfolioSlider";
import BannerSection from '@/components/BannerSection';
import About from '@/components/About';
import Services from '@/components/Services';
import ProgressBar from '@/components/ProgressBar';
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

const progressData = [
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
    label: "Wordpress Technologies", 
    value: 97, 
    detail : "Elementor, Avada, Wp-Bakery, ACF, Oxygen, Divi, Beaver",
  },
  { 
    label: "Wordpress Themes/Plugins", 
    value: 90, 
    detail : "Custom Theme development, Theme Customization, Woocommerce Customization, Elementor widgets development",
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

];

export default function Home() {
  return (
    <>
      <Header />
      <BannerSection />
      <About />
      <Services serviceData={services} />
      <section>
        <div className="container mx-auto py-8">
          <div className="flex justify-between gap-8">
            <div className="space-y-12 w-5/12 sticky top-16 self-start">
              <h2>Special Skills</h2>
              <div className='space-y-3'>
                <h3 className="font-medium text-lg">I am very open to learn new things</h3>
                <p className="text-base font-light leading-6 text-lightblack">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam aperiam eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta.
                </p>
              </div>
            </div>
            <div className="w-6/12">
              <div className="space-y-14">
                {progressData.map((progressItem, index) => (
                  <div key={index} className="space-y-8">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h2 className="font-semibold text-2xl">{progressItem.label}</h2>
                        <h3 className="font-semibold text-2xl">{progressItem.value}%</h3>
                      </div>
                      <p className="text-base font-light leading-6 text-lightblack">{progressItem.detail}</p>
                    </div>
                    <ProgressBar progress={progressItem.value} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
