import React from 'react';


const PortfolioSlider = ({ portfolio }) => {


  return (
    <div>
      {
        portfolio.map((portfolios, index) => (
          <section key={index} >
            <div className="bg-cover bg-center bg-no-repeat h-screen bg-fixed" style={{ backgroundImage: `url(${portfolios.bgImage.src})` }}>
              <h1>ubaid</h1>
            </div>
          </section>
        ))
      }
    </div>
  );
};

export default PortfolioSlider;
