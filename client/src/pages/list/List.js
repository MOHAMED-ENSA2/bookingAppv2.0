import React from 'react'

import "./List.css"
import withApiCall from '../../components/HOC/withApiCall'
import ItemCard from '../../components/card/ItemCard'
import SearchBar from '../../components/searchBar/SearchBar'

function List({data}) {

  return (
    <div className='list-container'>

      <div className='list'>
        <div className='list--searchbar'>
          <SearchBar type = "B" />
        </div>
        <div className='list--items'>
          { data && 
            data.map((elm,index) => {
              return  <ItemCard key = {index} data = {elm} /> 
            })
          }
        </div>
      </div>
    </div>
  )
}

export default withApiCall(List)