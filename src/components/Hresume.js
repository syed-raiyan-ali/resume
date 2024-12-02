import React from 'react'
import {NavLink} from 'react-router-dom'
import './Hresume.css'

export const Hresume = () => {
  return (
    <NavLink to={'/resume'} className={'link'}>
      <div className='font resume'>RESUME</div>
    </NavLink>
  )
}
