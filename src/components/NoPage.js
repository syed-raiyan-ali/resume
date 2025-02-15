import React from 'react'
import { useTheme } from "./ThemeProvider"; // Dark mode support
import './NoPage.css'

export const NoPage = () => {
    const { isDarkMode } = useTheme(); // Dark mode support
  return (
    <div className={`not-found-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <p className="not-found-text"> 404 <br /> Oops! The page you are looking for does not exist.</p>
      <a href="/" className={`not-found-home-link  ${isDarkMode ? "dark-background" : "light-background"}`}>Go to Home</a>
    </div>
  )
}
