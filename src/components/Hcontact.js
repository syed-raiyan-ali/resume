import React from 'react'
import {NavLink} from 'react-router-dom'
import './Hcontact.css'

export const Hcontact = () => {

  return (
    <NavLink to={'/contact'} className={'link'}>
      <div className={'font contact'}>CONTACT</div>
    </NavLink>
  )
}
