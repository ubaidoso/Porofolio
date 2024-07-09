import React from 'react'

const BannerSection = () => {
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
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="flex items-center">
            <p>@ 2024</p>
            <div class="mouse"></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default BannerSection
