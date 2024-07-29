import React, { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';


const Loader = () => {

  useEffect(() => {
    gsap.fromTo(
        ".loader",
        { opacity: 1 },
        {
          opacity: 0,
          display: "none",
          duration: 1.5,
          delay: 3.5,
        }
      );
      
      gsap.fromTo(
        ".loader_footer",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          delay: 0.5,
        }
      );

  }, []);

  return (
    <div className="loader">
      <svg id="loader_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
            d="M415.44 512h-95.11L212.12 357.46v91.1L125.69 512H28V29.82L68.47 0h108.05l123.74 176.13V63.45L386.69 0h97.69v461.5zM38.77 35.27V496l72-52.88V194l215.5 307.64h84.79l52.35-38.17h-78.27L69 13zm82.54 466.61l80-58.78v-101l-79.76-114.4v220.94L49 501.89h72.34zM80.63 10.77l310.6 442.57h82.37V10.77h-79.75v317.56L170.91 10.77zM311 191.65l72 102.81V15.93l-72 53v122.72z" />
      </svg>
      <div className="loader_footer space-y-4">
        <svg viewBox="0 0 1500 200" xmlns="http://www.w3.org/2000/svg" >
      <defs>
          <style>
              {`
              @import url(https://fonts.googleapis.com/css2?family=Bilbo+Swash+Caps%3Aital%2Cwght%400%2C400&amp;display=swap);
              `}
          </style>
      </defs>
      <text x="190" y="150">
          Full Stack Web Developer
      </text>
        </svg>
        <ul className='flex sm:gap-4 gap-2 items-center justify-center'>
          <li>
            <Image src="/html-5.png" width={40} height={40} />
          </li>
          <li>
            <Image src="/css-3.png" width={40} height={40} />
          </li>
          <li>
            <Image src="/bootstrap.png" width={40} height={40}/>
          </li>
          <li>
            <Image src="/wordpress.png" width={40} height={40} className='bg-white rounded-full' />
          </li>
          <li>
            <Image src="/react.png" width={40} height={40} />
          </li>
          <li>
            <Image src="/shopify.png" width={40} height={40} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Loader;
