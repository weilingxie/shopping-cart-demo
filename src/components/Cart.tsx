import React from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import CartItem from './CartItem'
import { useAppSelector } from '../redux/hooks'

const title = 'Shopping Cart'

const Cart: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cartItems.value)
  return (
    <Grid container item lg={3} justifyContent="center" spacing={2}>
      <Typography variant="h5">{title}</Typography>
      {cartItems &&
        cartItems.map((item) => (
          <CartItem key={`cartItem${item.id}`} item={item} />
        ))}
    </Grid>
  )
}

export default Cart
