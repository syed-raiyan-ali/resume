import React from 'react'
import pfp from '../assets/Pfp.png'
import './Profile.css'
import { useTheme } from './ThemeProvider'; // Import the custom hook

export const Profile = () => {
  const { isDarkMode } = useTheme(); // Access the isDarkMode value from the context

  return (
    <div className={`box box2 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <img src={pfp} alt='profile'/>
        <div className="name"><label>Syed <br /> Raiyan <br /> Ali</label></div>
    </div>
  )
}
