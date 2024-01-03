import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCategory from './Itemcategory'
import useResDetails from '../utils/useResDetails'

const Restaurent = () => {
    const params=useParams()
    console.log(params.resId)
    const [details,category]=useResDetails(params.resId)
    if(Object.keys(details).length===0) return <div>Loading...</div>
  return (
    <>
          <div className='items-container'>
              <h2>{details.name}</h2>
              <h2>{details.cuisines.join(', ')}</h2>
              <h2>{details.areaName}</h2>
          {
            category.map(item=>{
              return <ItemCategory key={item.card.card.title} category={item}/>
            })
          }
          </div>
        </>


  )
}

export default Restaurent