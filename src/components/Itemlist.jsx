import React from 'react'

function Itemlist(props) {
    const {item}=props
  return (
    <div className='item-container'>
        <div><h3>{item.card.info.name}</h3> </div>
            <div><h4>₹{item.card.info.price/100}</h4></div>
            <div aria-hidden="true">
      <i className="veg-icon" role="presentation" aria-hidden="true" style={{ lineHeight: '1.2' }}></i>
    </div>
        <div><h5>
            {item.card.info.description}</h5>
        </div>
        <p className='solidline'></p>
    </div>
  )
}

export default Itemlist
