// src/components/ProgressBar.js
import React, { useEffect, useRef, useState } from 'react';

const ProgressBar = ({ progress }) => {
  const [isInView, setIsInView] = useState(false);
  const progressBarRef = useRef(null);

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

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full bg-gray-300 rounded-full h-3px" ref={progressBarRef}>
      <div
        className={`cst_progress ${isInView ? 'w-full' : 'w-0'}`}
        style={{ width: isInView ? `${progress}%` : '0%' }}
      ></div>
    </div>
  );
};

export default ProgressBar;
