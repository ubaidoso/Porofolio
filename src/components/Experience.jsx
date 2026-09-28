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
                    { experienceData.map((experienceItem, index) => (
                        <div
                            key={index}
                            className="space-y-4 border-b border-black pb-8"
                            >
                            {/* Designation */}
                            <p className="uppercase lg:text-sm text-xs font-normal tracking-widest leading-6 text-lightblack">
                                {experienceItem.designation}
                            </p>

                            {/* Company & Duration */}
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                                <h2 className="font-semibold lg:text-2xl text-base">
                                {experienceItem.company}
                                </h2>

                                <h3 className="font-normal text-sm whitespace-nowrap">
                                {experienceItem.duration}
                                </h3>
                            </div>

                            {/* Responsibilities */}
                            {experienceItem.responsibilities && (
                                <ul className="space-y-2 list-disc pl-5 text-sm leading-relaxed text-lightblack">
                                {experienceItem.responsibilities.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-y-8 md:w-5/12 sm:w-5/12 sm:sticky sm:top-16 sm:self-start">
            <h2>Experiences</h2>
            <div className='space-y-3'>
                <h3 className="font-medium text-lg">Let's connect and build something meaningful.</h3>
                <p className="text-base font-light leading-6 text-lightblack">
                I'm a Senior Web Developer specializing in creating modern, responsive and user-friendly web experiences. With a strong background in web development and e-commerce, I enjoy turning ideas into functional, high-quality digital solutions.
                </p>
            </div>
            <a href='/Ubaid-Updated-CV-2026.pdf' className='cst_fill btn flex gap-2' download>Download My CV <Image src={download} width={20} /> </a>
            </div>
        </div>
        </div>
  </section>
  )
}

export default Experience
