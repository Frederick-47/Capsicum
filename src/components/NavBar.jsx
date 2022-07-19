import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
        <ul className="navigation">
            <NavLink to={'/'}>Inicio</NavLink>
            <NavLink to={'/info'}>Info</NavLink>
            <NavLink to={'/products'}>Products</NavLink>
            <NavLink to={'/services'}>Services</NavLink>
            <NavLink to={'/visit'}>Visitanos</NavLink>
        </ul>
    </>
  )
}
