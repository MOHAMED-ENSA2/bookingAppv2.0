import React from 'react'
import "./Navbar.css"

function NavBar() {
  return (
    <div className='downNavbar'>
       <button className='btn btn_sample btn_curved'>
          <i class="fa-solid fa-bed"/>
          <span>Hebergement</span> 
      </button>
      <button className='btn btn_hovered btn_curved'>
            <i class="fa-solid fa-plane"/>
            <span>Vols</span> 
      </button>
      <button className='btn btn_hovered btn_curved'>
           <i class="fa-solid fa-car"/>    
          <span>Voiture et location</span> 
      </button>
      <button className='btn btn_hovered btn_curved'>
        <i class="fa-solid fa-tree"/>
        <span>Attraction</span> 
      </button>
    </div>
  )
}

export default NavBar