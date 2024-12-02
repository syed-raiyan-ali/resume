import React from 'react';
import './Social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from './ThemeProvider';

export const Social = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`box box6 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div>
        <FontAwesomeIcon icon={faGithub} className="fa-xl social" />
        <a href="https://github.com/syed-raiyan-ali" target="_blank" className="social" rel="noopener noreferrer">syed-raiyan-ali</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faInstagram} className="fa-xl social" />
        <a href="https://www.instagram.com/syed.raiyan.ali/" target="_blank" className="social" rel="noopener noreferrer">@syed.raiyan.ali</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faLinkedin} className="fa-xl social" />
        <a href="https://www.linkedin.com/in/syed-raiyan-ali-4449751b4/" target="_blank" className="social" rel="noopener noreferrer">syed-raiyan-ali</a>
      </div>
    </div>
  );
};
