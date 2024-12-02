import React from 'react'
import {NavLink} from 'react-router-dom'
import './Hcertificate.css'

export const Hcertificate = () => {

  return (
    <NavLink to={'/certificate'} className={'link'}>
      <div className='font certificate'>CERTIFICATIONS</div>
    </NavLink>
  )
}
