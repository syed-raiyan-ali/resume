import React from 'react'
import './Contact.css'
import {Nav} from '../Nav'

import { ThemeProvider } from '../ThemeProvider'
import {Cdiv1} from '../Cdiv1'


export const Contact = () => {

  console.log('contact.js')

  return (
    <ThemeProvider>
        <div className='c_outer'>
            <Nav/>
            <Cdiv1/>
        </div>
    </ThemeProvider>
  )
}
