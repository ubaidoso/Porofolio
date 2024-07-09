import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import PortfolioSlider from "@/components/PortfolioSlider";
import BannerSection from '@/components/BannerSection';


export default function Home() {

  const [count , setCound] = useState(0);
  const target = 200;
  const incrementTime = 10;
  const incrementAmount = target / (1000 / incrementTime);

  useEffect(()=> {
    if (count<target) {
      const interval = setInterval(()=> {
        setCound((prevCount)=> {
          const newCount = prevCount + incrementAmount ;
          return newCount > target ? target : newCount; 
        });
      },incrementTime);
      return ()=> clearInterval(interval);
    }
  }, [count, incrementAmount, incrementTime, target]);

  return (
  <>
    <Header />
    <BannerSection />
  </>
  );
}
