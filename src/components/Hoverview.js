import React from 'react'
import {NavLink} from 'react-router-dom'
import './Hoverview.css'

export const Hoverview = () => {
  return (
    <NavLink to={'/overview'} className={'link'}>
      <div className='font overview'>OVERVIEW</div>
    </NavLink>
  )
}
