import React from 'react';
import './Riframe.css';
// import { useTheme } from './ThemeProvider'; // Import the custom hook

import cv from '../assets/cv.pdf'; // Include the file extension

export const Riframe = () => {
  // const { isDarkMode } = useTheme(); // Access the isDarkMode value from the context

  return (
      <iframe src={cv} loading="eager" className='iframe' title='cv'></iframe>
    // <div className={`iframe ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    // </div>
  );
};
