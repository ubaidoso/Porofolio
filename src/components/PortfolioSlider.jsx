import React from 'react';

const PortfolioSlider = ({ portfolio }) => {
  return (
    <>
        {
          portfolio.map((portfolios, index) => (
            <article>
              <div className="bg-cover bg-center bg-no-repeat h-screen bg-fixed" key={index} style={{ backgroundImage: `url(${portfolios.bgImage.src})` }}>
                <h1>ubaid</h1>
              </div>
            </article>
          ))
        }
    </>
  );
};

export default PortfolioSlider;
