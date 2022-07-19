import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className={(args) => {return (args.isActive)? 'navbar-brand active': 'navbar-brand'}} aria-current='page' to={'/'}>Inicio</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className={(args) => {return (args.isActive)? 'nav-link active': 'nav-link'}} to={'/info'}>Información</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={(args) => {return (args.isActive)? 'nav-link active': 'nav-link'}} to={'/products'}>Productos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={(args) => {return (args.isActive)? 'nav-link active': 'nav-link'}} to={'/services'}>Servicios</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className={(args) => {return (args.isActive)? 'nav-link active': 'nav-link'}} to={'/visit'}>Visitanos</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

    </>
  )
}
