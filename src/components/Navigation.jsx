import React from 'react'

export const Navigation = () => {
  return (
    <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">info</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#'>Servicios</a>
        </li>
      </ul>
  )
}
