import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ targetCount, title }) => {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const counterRef = useRef(null);
    const incrementTime = 2;
    const incrementAmount = targetCount / (1000 / incrementTime);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            },
            { threshold: 0.1 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInView && count < targetCount) {
            const interval = setInterval(() => {
                setCount((prevCount) => {
                    const newCount = prevCount + incrementAmount;
                    return newCount > targetCount ? targetCount : newCount;
                });
            }, incrementTime);

            return () => clearInterval(interval);
        }
    }, [isInView, count, incrementAmount, incrementTime, targetCount]);

    return (
        <div ref={counterRef} className="sm:mb-0 mb-4">
            <h2><span id="counter">{Math.floor(count)}</span><sub>+</sub></h2>
            <strong className="xl:text-lg text-base text-lightgrey font-semibold mt-2 inline-block">{title}</strong>
        </div>
    );
};

export default Counter;
