import React, { useState } from 'react'
import MaterialList from './MaterialList'
import { CartItems, CartItemType } from '../types/CartTypes'
import { Material } from '../types/MaterialTypes'
import Cart from './Cart'

const ShoppingListContainer: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItems>([])

  const increaseQuantity = (item: CartItemType) => {
    const itemIndex = cartItems.indexOf(item)
    if (itemIndex === -1) {
      return
    }
    const newCartItems = [...cartItems]
    newCartItems[itemIndex].quantity += 1
    setCartItems(newCartItems)
  }
  const decreaseQuantity = (item: CartItemType) => {
    const itemIndex = cartItems.indexOf(item)
    if (itemIndex === -1) {
      return
    }
    const newCartItems = [...cartItems]
    newCartItems[itemIndex].quantity -= 1
    setCartItems(newCartItems)
  }
  const deleteItem = (id: number) => {
    const changeItem = cartItems.find((i) => i.id === id)
    if (changeItem) {
      const newCartItems = cartItems.filter((i) => i.id !== id)
      setCartItems(newCartItems)
    }
  }

  const addItemToCart = (item: Material) => {
    const existItem = cartItems.find((i) => i.id === item.id)
    if (existItem) {
      return
    }
    const newCartItem = {
      id: item.id,
      displayName: item.displayName,
      imageName: item.imageName,
      quantity: 1,
    }
    const newCartItems = [...cartItems]
    newCartItems.push(newCartItem)
    setCartItems(newCartItems)
  }

  return (
    <div className="page-container">
      <MaterialList addItemToCart={addItemToCart} />
      <Cart
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        deleteItem={deleteItem}
      />
    </div>
  )
}

export default ShoppingListContainer
