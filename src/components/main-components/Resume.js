import React from 'react'
import './Resume.css'

import {Nav} from '../Nav'
import {Riframe} from '../Riframe'
import { ThemeProvider } from '../ThemeProvider'


export const Resume = () => {

  console.log('resume.js')

  return (
    <ThemeProvider>
        <div className='outer'>
            <Nav/>
            <Riframe/>
        </div>
    </ThemeProvider>
  )
}
