import React from 'react'
import { CartItemType } from '../types/CartTypes'

interface CartItemProps {
  item: CartItemType
  increaseQuantity: (item: CartItemType) => void
  decreaseQuantity: (item: CartItemType) => void
  deleteItem: (id: number) => void
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
}) => {
  const { id, displayName, imageName, quantity } = item

  return (
    <div className="cart-item">
      <img src={`../img/${imageName}`} alt={displayName} />
      <h3>{displayName}</h3>
      <span onClick={() => increaseQuantity(item)}>+</span>
      <span>{quantity}</span>
      <span onClick={() => decreaseQuantity(item)}>-</span>
      <button onClick={() => deleteItem(id)}>X</button>
    </div>
  )
}

export default CartItem
