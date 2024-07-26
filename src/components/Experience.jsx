import React from 'react'
import Image from 'next/image'
import download from '../../public/download.svg'

const Experience = ({experienceData}) => {
  return (
    <section className='sm:my-24'>
        <div className="container mx-auto sm:py-8">
        <div className="flex flex-wrap sm:flex-row flex-col-reverse justify-between sm:gap-8 gap-16">
            <div className="md:w-6/12 sm:w-6/12 w-full">
            <div className="space-y-8">
                {experienceData.map((experienceItem, index) => (
                <div key={index} className="space-y-8 border-b border-black pb-8">
                    <div className="lg:space-y-3 space-y-2">
                        <p className="uppercase lg:text-sm text-xs font-normal tracking-widest leading-6 text-lightblack">{experienceItem.designation}</p>
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold lg:text-2xl text-base">{experienceItem.company}</h2>
                        <h3 className="font-normal text-sm ">{experienceItem.duration}</h3>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
            <div className="space-y-8 md:w-5/12 sm:w-5/12 sm:sticky sm:top-16 sm:self-start">
            <h2>My Experiences</h2>
            <div className='space-y-3'>
                <h3 className="font-medium text-lg">Lets work together, I am open for part time / freelance</h3>
                <p className="text-base font-light leading-6 text-lightblack">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam aperiam eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta.
                </p>
            </div>
            <a href='/Ubaid-Tahir-Resume.pdf' className='cst_fill btn flex gap-2' download>Download CV <Image src={download} width={20} /> </a>
            </div>
        </div>
        </div>
  </section>
  )
}

export default Experience
