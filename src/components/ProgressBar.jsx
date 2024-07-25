// src/components/ProgressBar.js
import React, { useEffect, useRef, useState } from 'react';

const ProgressBar = ({ progress }) => {
  const [isInView, setIsInView] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full bg-gray-300 rounded-full h-3px" ref={skillRef}>
      <div
        className={`cst_progress ${isInView ? 'w-full' : 'w-0'}`}
        style={{ width: isInView ? `${progress}%` : '0%' }}
      ></div>
    </div>
  );
};

export default ProgressBar;
