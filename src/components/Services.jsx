import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Services = ({serviceData}) => {
  return (
    <section>
        <div className="container">
            <h2 className='text-center mb-16'>What I Do ?</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 xl:gap-10 sm:gap-4 gap-8">
              {
                serviceData.map((serviceItem , index)=> (
                  <div key={index} className="border xl:p-8 sm:p-4 p-8 border-lightblack space-y-8">
                  <Image src={serviceItem.icon} alt={serviceItem.icon} width={90} />
                  <div className='space-y-5'>
                      <h3 className='font-semibold text-xl'>{serviceItem.title}</h3>
                      <p className='text-base font-light leading-6 text-lightblack'>{serviceItem.detail}</p>
                  </div>
              </div>
                ))
              }
              <div className="bg-purple xl:p-8 sm:p-4 p-8 flex flex-col justify-between">
                <div className='sm:space-y-2 space-y-8'>
                  <p className='text-sm uppercase'>REQUEST FOR MORE</p>
                  <h3 className='font-semibold text-2xl'>Give me feedback, I really enjoy learning ne things.</h3>
                </div>
                <Button title={'Give me Feedback'} link={'#'} btnClass={'cst_fill w-fit text-center sm:mt=0 mt-8'} />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Services
