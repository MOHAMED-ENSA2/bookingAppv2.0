import React from 'react'
import './Section.css'


function Section({title , children}) {
  return (
    <div className='section-container'>
        <div className='section'>
          <div className='section--title'>
              {title}
          </div>
          <div className='section--content'>
            {children}
          </div>           
        </div>
    </div>
  )
}

export default Section