import React from 'react'
import Itemlist from './Itemlist'

const Itemcategory=(props)=> {
    const {category}=props
    console.log(category.card.card);
  return (
    <div className='category-container'>
        
        <div className='category-title'>{category.card.card.title}</div>
        <p className='solidline'></p>
        <div>
          {category.card.card.itemCards.map((item)=>{
             return <Itemlist item={item}/>
          })}
          <p className='solidline'></p>
        </div>
      
    </div>
  )
}

export default Itemcategory
