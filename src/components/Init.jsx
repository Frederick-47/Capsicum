import React from 'react'
import cebolla from './imgs/cebolla.jpg'
import chile from './imgs/chile.jpg'
import especias from './imgs/especias.jpg'

export const Init = () => {
  return (
   <div className='container'>

        <div id="carouselExampleControls" className="carousel slide  " data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={cebolla} className="d-block" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={chile} className="d-block " alt="..."/> 
            </div>
            <div className="carousel-item">
            <img src={especias} className="d-block " alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>

   </div>
  )
}
