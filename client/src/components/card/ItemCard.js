import React from 'react'
import { Link } from 'react-router-dom'
import "./ItemCard.css"

function ItemCard({data}) {
  const {_id , name, description , details , price , Comment , rating , image , rooms} = data
  return (
    <div className='itemCard'>
        <div className="itemCard--left">
            <img src={ image[0] || "https://cf.bstatic.com/xdata/images/hotel/square600/10226605.webp?k=b9e921add3fccc12b813bf0075c9641bbb950d2f42396ca146c07a9473afc4d2&o=&s=1"} alt="" />
        </div>
        <div className="itemCard--right">
            <div className='item--head'>
                <div className='item--name'>
                    {name}
                </div>
                <div >
                  <span className='item--rating'>Exceptionnel</span>
                  <div className='item--ratingNumber'>
                    {rating}
                  </div>
                </div>
            </div>
            <div className='item--comment'>{Comment}</div>
            <div className='item--details'>
                <div className='item--detail' >
                    {details.slice(0, 100)}
                </div>
                <div className='item--price'>
                        MAD {price}
                </div>
            </div>
            <div className='item--dispo'>
              <Link className = "btn btn_sample link" to = {"/hotels/" + _id}>
                Voir les disponibilités
                <i 
                  class = "fa-solid fa-angle-right fa-xs"
                  style = {{marginLeft : "7px"}}
                >
                </i>
              </Link>
            </div>
        </div>

    </div>
  )
}

export default ItemCard