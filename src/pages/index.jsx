// src/pages/index.js
import React, { useState } from 'react';
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

export default function Home() {
  const [progress, setProgress] = useState(50);

  return (
    <>
      <Header />
      <BannerSection />
      <About />
      <Services serviceData={services} />
      <section>
        <div className="container">
          <div className="flex gap-4 justify-between">
            <div className="detail">
              <h2>Special Skills</h2>
              <h3 className="font-medium text-lg">I am very open to learn new things</h3>
              <p className="text-base font-light leading-6 text-lightblack">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam aperiam eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta.
              </p>
            </div>
            <div className="list">
              <ul>
                <li>
                  <h3 className="font-medium text-lg">I am very open to learn new things</h3>
                  <p className="text-base font-light leading-6 text-lightblack">
                    Sed ut perspiciatis unde omnis iste natus error voluptatem dolorem laudantis totamrem aperiam, eaque ipsa quae ab illo inventore veritatis quasi.
                  </p>
                  <div className="p-4">
                    <h1 className="text-2xl mb-4">React Progress Bar with Tailwind CSS</h1>
                    <ProgressBar progress={progress} />
                    <div className="mt-4">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        onClick={() => setProgress(progress + 10)}
                      >
                        Increase
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => setProgress(progress - 10)}
                      >
                        Decrease
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
