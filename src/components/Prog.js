import React from 'react'
import './Prog.css'
import { useTheme } from './ThemeProvider'; // Import the custom hook

export const Prog = () => {
  const { isDarkMode } = useTheme(); // Access the isDarkMode value from the context

  return (
    <div className={`box box4 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="inner-box4">
            <label>Programming Proficiency:-</label>
            <p>I'm passionate about programming and eager to learn more about Python, MySQL, and React. With a strong foundation in HTML, CSS, and JavaScript, I'm dedicated to honing my skills and becoming a proficient programmer.</p>
        </div>
    </div>

  )
}
