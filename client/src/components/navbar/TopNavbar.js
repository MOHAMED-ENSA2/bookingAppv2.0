import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar--logo'>
            <Link to= "/" className='link'>Booking.com </Link>
        </div>
        <div className='navbar--menu'>
            <Link className='btn btn_basic btn__menu link' to = "/">Ajouter votre établissement</Link>
            <Link className='btn btn_reversed btn__menu link' to = "/login">Se connecter</Link>
            <Link className='btn btn_reversed btn__menu link' to = "/login">S'inscrire</Link>
        </div>

    </div>
  )
}

export default Navbar