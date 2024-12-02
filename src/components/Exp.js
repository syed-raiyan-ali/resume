import React from 'react';
import './Exp.css';
import { useTheme } from './ThemeProvider'; // Import the custom hook

export const Exp = () => {
  const { isDarkMode } = useTheme(); // Access the isDarkMode value from the context

  return (
    <div className={`box box5 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="inner-box5">
        <label>Experience:</label>
        <p>Currently none. <br /> Open to short internships, preferably paid.</p>
      </div>
    </div>
  );
};