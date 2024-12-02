import React from 'react'
import './Home.css'

import { ThemeProvider } from '../ThemeProvider'
import {Hcontact} from '../Hcontact'
import {Hcertificate} from '../Hcertificate'
import {Hoverview} from '../Hoverview'
import {Hresume} from '../Hresume'


export const Home = () => {

  console.log('home.js')

  return (
    <ThemeProvider>
        <div className='outer'>
          <div className='inner'>
            <div className='h3 formal'>Syed Raiyan Ali</div>
            <p className='formal'>Frontend Web Developer</p>
            <p className='formal'>Creating beautiful and engaging <br /> digital experience in Delhi, India</p>
          </div>
          <div className='inner2'>
            <Hresume/>
            <Hcontact/>
            <Hoverview/>
            <Hcertificate/>
          </div>
        </div>
    </ThemeProvider>
  )
}