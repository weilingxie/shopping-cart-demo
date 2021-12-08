import React from 'react'

const Item = ({ item, addItemToCart }) => {
  const { displayName, imageName } = item
  const handleClick = () => {
    addItemToCart(item)
  }

  return (
    <div className="item">
      <img src={`../img/${imageName}`} alt={displayName} />
      <div className="item-right-side">
        <h2>{displayName}</h2>
        <button onClick={() => handleClick()}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Item
