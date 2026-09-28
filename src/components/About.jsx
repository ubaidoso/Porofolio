import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import AboutImage from '../../public/ubaid-about.png';
import Image from 'next/image';
import Counter from './Counter';

const counters = [
  { targetCount: 200, title: "Satisfied Clients" },
  { targetCount: 5, title: "Years Experience" },
  { targetCount: 8, title: "Work Collaboration" },
];



const About = () => {

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              "#svg",
              { opacity: 0 },
              { opacity: 1, duration: 1.5 }
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <section ref={sectionRef} className='cst_about_section sm:py-32 py-16'>
      <div className="container">
        <div className="flex lg:flex-nowrap flex-wrap lg:flex-row flex-col-reverse lg:items-end lg:gap-4 gap-16 justify-between">
          <div className='lg:max-w-2xl'>
            <span className='text-sm uppercase font-medium text-lightblack sm:mb-12 mb-8 block'>GET IN TOUCH WITH ME</span>
            <p className='font-medium xl:text-28 xl:leading-normal lg:text-xl lg:leading-8 ms:text-2xl text-xl text-justify leading-10'>
              I am very interested & passionate about everything related to digital & web design. Over 15 years of experience in the design industry I have worked a lot with agencies and passionate people who want to solve problems through beautiful design.
            </p>
            <div className='flex gap-4 justify-between border-t border-black pt-12 mt-12'>
              {
                counters.map((counter, index) => (
                  <Counter key={index} targetCount={counter.targetCount} title={counter.title} />
                ))
              }
            </div>
          </div>

          <div className='bg-linear-gradient flex items-end lg:justify-start justify-between xl:w-[45%] lg:ml-14 relative'>
            <div className='inline-flex flex-col justify-between h-56'>
              <p className='font-semibold text-base text-lightblack uppercase -rotate-90 w-fit'>About Me</p>
              <button className='p-3.5 bg-lightblack rounded-tr-3xl w-fit'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#d3caff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
              </button>
            </div>
            <Image src={AboutImage} alt="About" />
            <svg id='svg' viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <style>
                  {`@import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');`}
                </style>
              </defs>
              <text style={{ fontFamily: 'Homemade Apple', fontSize: '115px', fontStyle: 'italic', fontWeight:'100' }} x="10" y="150">
                M.Ubaid
              </text>
            </svg>
            
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
