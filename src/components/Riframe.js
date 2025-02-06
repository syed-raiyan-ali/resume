import React from 'react';
import './Riframe.css';
import pg1 from "../assets/cv1.jpg";
import pg2 from "../assets/cv2.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


import cv from '../assets/cv.pdf'; // Include the file extension

export const Riframe = () => {

  return (
    <>
      <div className="r-pic">
        <img src={pg1} alt="cv-page1" className='pg1'/>
        <img src={pg2} alt="cv-page2" className='pg2'/>

        <div className="btns">
          <button className='cv-btn'>
            <a href={cv} download='cv.pdf'>
              <FontAwesomeIcon icon={faDownload} />Download CV
            </a>
          </button>
        </div>
        
      </div>
    </>
  );
};
