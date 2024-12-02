import React from 'react'
import './Cdiv1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import laptop from '../assets/laptop3.jpg'

import { useTheme } from './ThemeProvider'; // Import the custom hook


export const Cdiv1 = () => {

  const { isDarkMode } = useTheme(); // Access the isDarkMode value from the context

  return (
    <>
        <div className={`div1 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

            <label className='label1 formal'>Need an intern or a part timer?</label>

            <label className='label2 formal'>Keen to gain hands-on experience and contribute to impactful work.</label>

            <div className='num'>
                <FontAwesomeIcon icon={faPhone}/> +91 9315284591
            </div>

            <div className='mail'>
                <FontAwesomeIcon icon={faAt} /> syedraiyanali23544@gmail.com
            </div>

            <iframe
                title="Google Map of Delhi Gate"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2082.0775013964208!2d77.23957818177665!3d28.641058661479306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd11e2cd83d7%3A0x825bafe2322e3279!2sDelhi%20Gate!5e0!3m2!1sen!2sin!4v1731916643890!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>

        <div className={`div2 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <img src={laptop} alt="" />
        </div>
    </>
  )
}
