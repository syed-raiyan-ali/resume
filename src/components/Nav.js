import React from 'react';
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import { useTheme } from './ThemeProvider'; // Importing the custom hook

export const Nav = () => {
  // Access the 'isDarkMode' value and 'toggleTheme' function from the ThemeContext
  const { isDarkMode, toggleTheme } = useTheme();

  // Log the current theme mode to the console
  console.log('isDarkMode value in Nav component:', isDarkMode);

  return (
    <nav className={`box nav ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <NavLink to={'/'} className={'link'}>
        <div className="box11 boxx formal">My Web Presence</div>
      </NavLink>
      {/* Toggling dark mode on button click */}
      

      <div className='nav1'>

        <button className="box12 boxx" id="box12" onClick={toggleTheme}><FontAwesomeIcon icon={isDarkMode ?faMoon : faSun} id="night_logo"/>
        </button> 

        <button className="box16 boxx">
          <NavLink to={'/overview'} className={'link'}>
            OVERVIEW
          </NavLink>
        </button>

        <button className="box13 boxx">
          <NavLink to={'/resume'} className={'link'}>
            CV/RESUME
          </NavLink>
        </button>

        <button className="box14 boxx">
          <NavLink to={'/certificate'} className={'link'}>
            CERTIFICATES
          </NavLink>
        </button>

        <button className="box15 boxx">
          <NavLink to={'/contact'} className={'link'}>
            CONTACT
          </NavLink>
        </button>
        </div>
    </nav>
  );
};
