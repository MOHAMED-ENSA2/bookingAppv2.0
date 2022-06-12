import React, { useState } from 'react'
import { DateRangePicker, DateRange } from 'react-date-range';
import {format} from "date-fns"

import './SearchBar.css'
import Reservation from './Reservation';
import { Link } from 'react-router-dom';

function SearchBar({type}) {
  const searchClass = (type === "A") ? 'searchBar' : 'searchBar_vertical'
  const searchInputClass = (type === "A") ? 'searchbar--input' : 'searchbar--input searchbar--input_vertival'

  const [showCalender , SetShowCalender] = useState(false)
  const [showReservation , setShowReservation] = useState(false)
  const [calender, setCalender] = useState(
    [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]
  );

  return (
    <div className={searchClass}>
        <div className={searchInputClass}>
          <i class="fa-solid fa-bed"/>
          <input type="text" placeholder='Ou allez-vous ?'/>
        </div>
        <div className= {searchInputClass + ' searchbar--calender'}>
          <i 
            onClick = {() => SetShowCalender(!showCalender)} 
            class="fa-solid fa-calendar-days">
          </i>
          <span 
            className='searchbar--span'
            onClick = {() => SetShowCalender(!showCalender)} 

          >
             { format(calender[0].startDate, "dd,MM,yyyy") + "  -  " + format(calender[0].endDate , "dd,MM,yyyy") }
          </span> 
          { showCalender && 
            <div className='calender'>
              <DateRange
                  editableDateInputs={true}
                  onChange={item => {setCalender([item.selection]) ; console.log([item.selection])}}
                  moveRangeOnFirstSelection={false}
                  ranges={calender}
                />
            </div>
          }
        </div>
        <div className={searchInputClass + ' searchbar--reservation-container'}>
          <i onClick={() => setShowReservation(!showReservation)} class="fa-solid fa-user"></i>
          <span onClick={() => setShowReservation(!showReservation)}> 2 adultes . 0 enfant . 1 chambre  </span>
          <div onClick={() => setShowReservation(!showReservation)} className='down-arrow'>
            <i class="fa-solid fa-angle-up fa-xs"></i>
            <i class="fa-solid fa-angle-down fa-xs"></i>
          </div>
          { showReservation &&
          <div className='searchbar--reservation'>
            <Reservation/>
          </div>
          }
        </div>
          <Link 
            className='btn btn_sample search_btn link' to = "/hotels"
            style={{ "width" : type === "A" ? "16%" : "100%" }}
          >Rechercher</Link>
        
    </div>
  )
}

export default SearchBar