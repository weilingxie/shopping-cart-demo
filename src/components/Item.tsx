import React from 'react'
import { Material } from '../types/MaterialTypes'

interface ItemProps {
  item: Material
  addItemToCart: (item: Material) => void
}

const Item: React.FC<ItemProps> = ({ item, addItemToCart }) => {
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
