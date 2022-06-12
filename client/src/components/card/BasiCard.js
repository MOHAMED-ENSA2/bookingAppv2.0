import React from 'react'
import { Link } from 'react-router-dom'
import './BasiCard.css'

function BasiCard(props) {
  const {title, image , quantity} = props
  return (
    <Link 
      to = "/hotels"
      className='basicard link'>
        <img className='basicard--img' src={ image || "https://cf.bstatic.com/xdata/images/hotel/max500/45976851.jpg?k=7bd839dd07e1384ebfde004069e25090a4a901728e9bdc8e200f411ed243999d&o="} alt="" />
        <div className='basicard--catg'>{title}</div>
        <div className='basicard--number'>plus de {quantity + " " + title}  </div>
    </Link>
  )
}

export default BasiCard