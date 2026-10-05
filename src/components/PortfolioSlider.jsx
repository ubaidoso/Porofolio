'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from './Button';

const PortfolioSlider = ({ portfolio }) => {
  const portfolioRef = useRef(null);

  useEffect(() => {
    const container = portfolioRef.current;

    if (!container) return;

    const cards = container.querySelectorAll('article');
    let ticking = false;

    const updateCards = () => {
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const stickyTop = 80;

        if (rect.top <= stickyTop) {
          let cardsAhead = 0;

          for (let i = index + 1; i < cards.length; i++) {
            const nextRect = cards[i].getBoundingClientRect();

            if (nextRect.top <= stickyTop + 100) {
              cardsAhead++;
            }
          }

          const scale = 1 - cardsAhead * 0.05;
          const translateY = cardsAhead * -10;
          const brightness = 1 - cardsAhead * 0.25;

          card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
          card.style.filter = `brightness(${brightness})`;
        } else {
          card.style.transform = 'scale(1) translateY(0px)';
          card.style.filter = 'brightness(1)';
        }
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateCards);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Run once when component loads
    updateCards();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={portfolioRef}
      className="w-full space-y-7"
    >
      {portfolio.map((project, index) => (
        <article
          key={project.title || index}
          className="
            flex items-center justify-between gap-8
            bg-lightpurple p-2 rounded-lg
            [transition:transform_0.3s_cubic-bezier(0.2,0,0,1),filter_0.3s_ease]
            sticky top-16
            origin-top
          "
        >
          {/* Project Image */}
          <div className="block rounded-lg bg-white shadow-lg w-6/12">
            <Image
              src={project.bgImage}
              width={1200}
              height={900}
              alt={`${project.title} screenshot`}
              className="w-full h-auto"
            />
          </div>

          {/* Project Content */}
          <div className="w-6/12">
            <div className="pb-4">
              {project.tools}
            </div>

            <div className="space-y-10 border-y border-purple py-8">
              <h3 className="text-4xl font-semibold">
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="cst_buttons_group">
                {project.link && (
                  <Button
                    title="Explore Design"
                    link={project.link}
                    btnClass="cst_fill w-fit text-center"
                  />
                )}

                {project.gitHubLink && (
                  <Button
                    title="Github"
                    link={project.gitHubLink}
                    btnClass="cst_fill w-fit text-center sm:mt-0 mt-8"
                  />
                )}
              </div>
            </div>

            {/* Dynamic Tags */}
            {project.tags?.length > 0 && (
              <ul className="flex flex-wrap gap-2 pt-4">
                {project.tags.map((tag, tagIndex) => (
                  <li
                    key={tagIndex}
                    className="
                      flex items-center gap-2
                      before:content-['◆']
                      before:text-[10px]
                      before:text-darkpurple
                    "
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default PortfolioSlider;