import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Right from '../../public/right.svg'

const footerData = [
    {
        label: "Email me:",
        title:"ubaidoso04@gmail.com",
        link:"mailto:ubaidoso04@gmail.com",
    },
    {
        label: "Call me:",
        title:"03235873252",
        link:"tel:03235873252",
    },
    {
        label: "LinkedIn:",
        title:"linkedin.com/in/ubaid-tahir-65059",
        link:"https://www.linkedin.com/in/ubaid-tahir-65059",
    },
    {
        label: "GitHub:",
        title:"github.com/ubaidoso",
        link:"https://github.com/ubaidoso",
    },
]

const Footer = () => {

  return (
    <>
        <footer className='bg-lightblack pt-20 pb-8'>
          <div className="container border-b border-lightgrey pb-12">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-2">
                <p className='uppercase sm:text-sm text-xs font-medium text-white'>HAVE PROJECT IN MIND ?</p>
                <h1 className='text-white'>Lets Talk!</h1>
              </div>
              <div className="flex items-center gap-4">
                <p className='uppercase text-sm font-medium text-white w-64 md:inline-block hidden'>ITS TIME TO START MAKING SOMETHING AMAZING TOGETHER.</p>
                <div className="bg-purple flex items-center justify-center lg:w-36 lg:h-36 w-28 h-28 rounded-full px-8 hover:rotate-12 hover:bg-white hover:scale-90 transition-all duration-300">
                  <p className='uppercase text-sm font-semibold text-center tracking-widest'>Start A Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-8">
            <div className="flex flex-wrap gap-8 justify-between">
              {footerData.map((footeritem, index) => (
                <div key={index}>
                  <label className="text-gray-500 text-sm font-semibold uppercase block">{footeritem.label}</label>
                  <Link className='inline-flex gap-2 font-medium border-b-2 border-purple pb-1 text-white' href={footeritem.link}>{footeritem.title}<Image src={Right} width={15} alt='footer-icon' /> </Link>
                </div>
              ))}
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer
