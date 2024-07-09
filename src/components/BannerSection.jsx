import React, { useState, useEffect } from 'react';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';
import Behance from "../../public/behance.png";
import Dribble from "../../public/basketball.png";
import Github from "../../public/github.png";
import Linkedin from "../../public/linkedin.png";


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

  ]

    const BannerSection = () => {

    const [count , setCound] = useState(0);
    const target = 200;
    const incrementTime = 10;
    const incrementAmount = target / (1000 / incrementTime);
  
    useEffect(()=> {
      if (count<target) {
        const interval = setInterval(()=> {
          setCound((prevCount)=> {
            const newCount = prevCount + incrementAmount ;
            return newCount > target ? target : newCount; 
          });
        },incrementTime);
        return ()=> clearInterval(interval);
      }
    }, [count, incrementAmount, incrementTime, target]);

  return (
    <>
        <section className="cst_banner_section pt-20">
      <div className="container">
        <h1 className="">Digital Designer <span className="cst_and">&</span><br />Fr <span className="-ml-3 w-46rem border-lightblack border-9 h-16 inline-block rounded-full"></span>nt-End Developer</h1>
        <div className="flex items-center mt-8">
          <div className="">
            <h2><sup>#</sup><span id="counter">{Math.floor(count)}</span><sub>+</sub></h2>
            <strong className="text-lg text-lightgrey font-semibold">Successful Project</strong>
          </div>
          <div className="max-w-4xl border-l border-lightblack ml-10 pl-10 py-1">
            <p className="text-lg text-lightgrey">I am a <strong>Professional Digital Designer and Front-End Developer.</strong> This website contains design works that I have produced over the past few years. Find various types of design projects such as logo designs, brochure designs, product packaging designs, website designs, and many more.          </p>
          </div>
          {/* <a className="scroll_down" href="/#one_step_down"></a> */}
        </div>
      </div>
    </section>
    <section className='one_step_down py-16 border-b border-lightblack'>
      <div className="container">
        <div className="flex items-center justify-between">
            <ul className='flex items-center gap-10 justify-between'>
                {
                    myConnections.map((myConnect,index)=> (
                        <li key={index}>
                        <Link href={myConnect.link} className='flex gap-4 items-center'>
                            <Image src={myConnect.icon} width={18} height={18} />
                            {myConnect.title}
                        </Link>
                    </li>
                    ))
                }
            </ul>
            <Button title={'Scroll Down'} link={'#one_step_down'} btnClass={'cst_bg_tran'} icon={true} down={true} />
        </div>
      </div>
    </section>
    </>
  )
}

export default BannerSection
