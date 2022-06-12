import React from 'react'
import "./Front.css"

import Hero from '../hero/Hero'
import DownNavbar from '../navbar/DownNavbar'
import SearchBar from '../searchBar/SearchBar'

function Front() {
  return (
    <div class="front-container">
        <div className='front'>
            <DownNavbar/>
            <Hero/>
            <div className='hero--searchBar'>
                <SearchBar type  = "A" />
            </div>
        </div>
    </div>
  )
}

export default Front