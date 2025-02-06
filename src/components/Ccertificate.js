import React from 'react';
import './Ccertificate.css';

import certificate1 from '../assets/app-certi.jpg';
import certificate2 from '../assets/react-certi.jpg';

import zip from '../assets/certificates.zip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const Ccertificate = () => {

  return (
    <>
      <div className='c-pic'>
        <img src={certificate1} alt=" android app development certificate" className='certi1'/>
        <img src={certificate2} alt="raect certificate" className='certi2'/>
      
        <div className="btns">
          <button className='c-btn'>
            <a href={zip} download='certificates.zip'>
              <FontAwesomeIcon icon={faDownload}/>Download 
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
