import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function Card({title , price , image , rating , city}) {
  return (
    <Link 
      to = "/hotels"
      className='card link'
    >
        <img className='card--img' src={ image || "https://cf.bstatic.com/xdata/images/hotel/max500/45976851.jpg?k=7bd839dd07e1384ebfde004069e25090a4a901728e9bdc8e200f411ed243999d&o="} alt="" />
        <div className='card--text'>
            <div className='card--title'>{title}</div>
            <div className='card--city'>{city}</div>
            <div className='card--price'>
              {price}
            </div>
            <div className='rating'>
                <div className='rating--rat'>
                    {rating}
                </div>
                <div className='rating--mark'>
                    Superbe
                </div>
                <div className='rating--number'>
                    35 expérience vécues
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Card