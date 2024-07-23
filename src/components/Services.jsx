import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Services = ({serviceData}) => {
  return (
    <section>
        <div className="container">
            <h2 className='text-center mb-16'>What I Do ?</h2>
            <div className="grid grid-cols-3 gap-10 ">
              {
                serviceData.map((serviceItem , index)=> (
                  <div key={index} className="border p-8 border-lightblack space-y-8">
                  <Image src={serviceItem.icon} alt={serviceItem.icon} width={90} />
                  <div className='space-y-5'>
                      <h3 className='font-semibold text-xl'>{serviceItem.title}</h3>
                      <p className='text-base font-light leading-6 text-lightblack'>{serviceItem.detail}</p>
                  </div>
              </div>
                ))
              }
              <div className="bg-purple p-8 flex flex-col justify-between">
                <div className='space-y-2'>
                  <p className='text-sm uppercase'>REQUEST FOR MORE</p>
                  <h3 className='font-semibold text-2xl'>Give me feedback, I really enjoy learning ne things.</h3>
                </div>
                <Button title={'Give me Feedback'} link={'#'} btnClass={'cst_fill w-fit'} />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Services
