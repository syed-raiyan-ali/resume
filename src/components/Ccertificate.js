import React from 'react';
import './Ccertificate.css';
// import { useTheme } from './ThemeProvider'; // Import the custom hook

import certificate1 from '../assets/react-nsdc.pdf'; // Include the file extension

export const Ccertificate = () => {
  // const { isDarkMode } = useTheme(); // Access the isDarkMode value from the context

  return (
    <iframe src={`${certificate1}#zoom=70`} loading="eager" className='certificate1' title='react certificate'></iframe>
  );
};
