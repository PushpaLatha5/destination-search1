import React, { useState } from 'react'
import "./Filter.css"
import Card from './Card.jsx'

export default function Filter({destinationsList}) {

  const [filter, setFilter]=useState("")
 
  const FilterPlace =(e) => {
    setFilter(e.target.value)
  }

  const filteredPlacesList = destinationsList.filter(e =>
    e.text.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <>
      <div className="bg-container">
        <h1 className="head">Destination Search</h1>
        <div className='input'>
        <input type="search" className='input-text'  placeholder='Search' onChange={FilterPlace}/>
        </div>
        <div>
            <ul className="places-container">
                 {filteredPlacesList.map(eachItem => (
                 <Card placeDetails={eachItem} key={eachItem.id} />
                 ))}
           </ul>
        </div>

      </div>
    </>
  )
}
