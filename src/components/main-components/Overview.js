import React from 'react'
import './Overview.css'
import { Exp } from "../Exp"
import { Nav } from "../Nav"
import { Profile } from "../Profile"
import { Prog } from "../Prog"
import { Projects } from "../Projects"
import { Skills } from "../Skills"
import { Social } from "../Social"
import { ThemeProvider } from '../ThemeProvider'

export const Overview = () => {

  console.log('overview.js')
  
  return (
    <ThemeProvider>
      <div className='outer'>
        <Nav />
        <Skills />
        <Profile />
        <Projects />
        <Prog />
        <Exp />
        <Social />
      </div> 
    </ThemeProvider>
  )
}
