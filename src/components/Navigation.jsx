import React from 'react'

export const Navigation = () => {
  return (
    <ul className="navigation">
        <li className="">
          <a className="" aria-current="page" href="#">info</a>
        </li>
        <li className="">
          <a className="" href="#">Inicio</a>
        </li>
        <li className="">
          <a className="products" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="services" href='#'>Servicios</a>
        </li>
      </ul>
  )
}
