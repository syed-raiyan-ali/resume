import React from 'react';
import './Home.css';

import { ThemeProvider } from '../ThemeProvider';
import { Hcontact } from '../Hcontact';
import { Hcertificate } from '../Hcertificate';
import { Hoverview } from '../Hoverview';
import { Hresume } from '../Hresume';
import { FAQs } from '../FAQs';

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 18) {
    return "afternoon";
  } else if (hour >= 18 && hour < 22) {
    return "evening";
  } else {
    return "Welcome";
  }
};

export const Home = () => {
  console.log('home.js');

  return (
    <ThemeProvider>
      <div className='outer'>
        <div className='inner'>
          <div className="h4 formal">A Warm {getGreeting()},</div>
          <h1 className='formal'>Syed Raiyan Ali</h1>
          <p className='formal'>Frontend Web Developer</p>
          <p className='formal'>Creating beautiful and engaging <br /> digital experiences in Delhi, India</p>
          <FAQs />
        </div>
        <div className='inner2'>
          <Hresume />
          <Hcontact />
          <Hoverview />
          <Hcertificate />
        </div>
      </div>
    </ThemeProvider>
  );
};
