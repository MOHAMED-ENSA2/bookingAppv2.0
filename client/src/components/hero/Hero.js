import React from 'react'
import { Link } from 'react-router-dom'
import "./Hero.css"

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-title'>
        Profitez de réductions à vie avec Genius !
        </div>
        <div className='hero-text'>
        Vos voyages vous rapportent : 10 % minimum d'économies immédiates en créant gratuitement un compte sur Booking.com.
        </div>
          <button className='btn btn_sample btn_spec'>
            <Link className='link hero--link' to = "/login">
                Se connecter / S'inscrire 
            </Link>
          </button>
    </div>
  )
}

export default Hero