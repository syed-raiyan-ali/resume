import { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import './ThemeProvider.css';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize state with the value from the cookie or default to light mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = Cookies.get('theme');
    return savedTheme === 'dark'; // true for dark mode, false for light mode
  });

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    // Save the new preference in cookies
    Cookies.set('theme', newTheme ? 'dark' : 'light', { expires: 1 });
  };

  useEffect(() => {
    // Sync theme class on mount
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={isDarkMode ? 'dark-background' : 'light-background'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
