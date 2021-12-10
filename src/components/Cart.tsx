import React from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import CartItem from './CartItem'
import { CartItems, CartItemType } from '../types/CartTypes'
import './Cart.css'

interface CartProps {
  cartItems: CartItems
  increaseQuantity: (item: CartItemType) => void
  decreaseQuantity: (item: CartItemType) => void
  deleteItem: (id: number) => void
}

const title = 'Shopping Cart'

const Cart: React.FC<CartProps> = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
}) => {
  return (
    <Grid container item lg={3} justifyContent="center">
      <Typography variant="h4">{title}</Typography>
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
    </Grid>
  )
}

export default Cart
