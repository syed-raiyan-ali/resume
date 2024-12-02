import React from 'react'
import './Resume.css'

import {Nav} from '../Nav'
import { ThemeProvider } from '../ThemeProvider'
import { Ccertificate } from '../Ccertificate'

export const Certificate = () => {

  console.log('certi.js')

  return (
    <ThemeProvider>
        <div className='outer'>
            <Nav/>
            <Ccertificate/>
        </div>
    </ThemeProvider>
  )
}
