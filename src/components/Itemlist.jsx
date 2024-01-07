import React from 'react'

function Itemlist(props) {
  const { item } = props;

  return (
    <div className="item-container">
      <div className="item">
        <h3>{item.card.info.name}</h3>
        <h4>₹{item.card.info.price / 100}</h4>
        <span>
          <img
            className="item-image"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
            alt={item.card.info.name}
          />
        </span>
        <h5>{item.card.info.description}</h5>
      </div>
    </div>
  );
}

export default Itemlist
