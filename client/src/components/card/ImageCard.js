import React from 'react'
import { Link } from 'react-router-dom'
import './ImageCard.css'

function ImageCard({city, nbEtablissement, image}) {
  return (
    <Link
      to = "/hotels" 
      className='imageCard link' 
      style={{ backgroundImage: `url(${image})`  }}  
    >
         <div className='imageCard--city'>
              {city}
         </div>
         <div className='imageCard--etab'>
             {nbEtablissement}
        </div>  
    </Link>
  )
}

export default ImageCard