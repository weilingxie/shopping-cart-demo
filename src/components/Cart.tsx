import React from 'react'
import CartItem from './CartItem'
import { CartItems, CartItemType } from '../types/CartTypes'
import './Cart.css'

interface CartProps {
  cartItems: CartItems
  increaseQuantity: (item: CartItemType) => void
  decreaseQuantity: (item: CartItemType) => void
  deleteItem: (id: number) => void
}

const Cart: React.FC<CartProps> = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
}) => {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems &&
        cartItems.map((item) => (
          <CartItem
            key={`cardItem${item.id}`}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            deleteItem={deleteItem}
          />
        ))}
    </div>
  )
}

export default Cart
