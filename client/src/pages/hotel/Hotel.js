import React from 'react'
import withApiCall from '../../components/HOC/withApiCall'
import './Hotel.css'

function Hotel({data}) {
  const {name , price ,image , description , details , Comment} = data
  return (
    <div className='hotel-container'>
      <div className='hotel'>
        <div className='hotel--title'>
            {name}
        </div>
        <div className='hotel--address'>
            <i className="fa-solid fa-location-dot address--icon"></i>    
            <span className='dress--text'>
              {details}
            </span>
        </div>
        <div className='hotel--images'>
          <img src={image[0] || "https://cf.bstatic.com/xdata/images/hotel/max500/257329516.jpg?k=49eacebe39e173b895cd07fda8080d5f89de55778860a27d937a1a831d695387&o=&hp=1"} alt=""/>
          <img src={image[1] || "https://cf.bstatic.com/xdata/images/hotel/max500/257329516.jpg?k=49eacebe39e173b895cd07fda8080d5f89de55778860a27d937a1a831d695387&o=&hp=1"} alt=""/>
          <img src={image[2] || "https://cf.bstatic.com/xdata/images/hotel/max500/257329516.jpg?k=49eacebe39e173b895cd07fda8080d5f89de55778860a27d937a1a831d695387&o=&hp=1"} alt=""/>
          <img src={image[3] || "https://cf.bstatic.com/xdata/images/hotel/max500/257329516.jpg?k=49eacebe39e173b895cd07fda8080d5f89de55778860a27d937a1a831d695387&o=&hp=1"} alt=""/>
          <img src={image[4] || "https://cf.bstatic.com/xdata/images/hotel/max500/257329516.jpg?k=49eacebe39e173b895cd07fda8080d5f89de55778860a27d937a1a831d695387&o=&hp=1"} alt=""/>
          <img src={image[5] || "https://cf.bstatic.com/xdata/images/hotel/max500/257329516.jpg?k=49eacebe39e173b895cd07fda8080d5f89de55778860a27d937a1a831d695387&o=&hp=1"} alt=""/>
          <img src={image[0] || "https://cf.bstatic.com/xdata/images/hotel/max500/257329516.jpg?k=49eacebe39e173b895cd07fda8080d5f89de55778860a27d937a1a831d695387&o=&hp=1"} alt=""/>
          <img src={image[1] || "https://cf.bstatic.com/xdata/images/hotel/max500/257329516.jpg?k=49eacebe39e173b895cd07fda8080d5f89de55778860a27d937a1a831d695387&o=&hp=1"} alt=""/>
        </div>
        <div className='hotel--details'>
            <div className='hotel--about'>
                <div className='about--title'>
                    {name}
                </div>
                <div className='about-text'>
                    {description + "\n" + description}
                </div>
            </div>
            <div className='hotel--remark'>
              <p>{details + "\n" + details} </p>
              <button className='btn btn_sample'>
                {"Reserver ( " + price +  " MAD)" }
              </button>

            </div>
        </div>
      </div>
    </div>
  )
}

export default withApiCall(Hotel , "hotels/6287c12bd9e5504ea5bd190d" )