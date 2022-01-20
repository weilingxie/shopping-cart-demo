import React from 'react'
import Grid from '@mui/material/Grid'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import CancelIcon from '@mui/icons-material/Cancel'
import { IconButton } from '@mui/material'
import { Typography } from '@mui/material'
import { CartItemType } from '../types/CartTypes'
import { useAppDispatch } from '../redux/hooks'
import {
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
} from '../redux/cartItems/cartItemsSlice'

interface CartItemProps {
  item: CartItemType
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { id, displayName, imageName, quantity } = item
  const dispatch = useAppDispatch()

  return (
    <Grid container item lg={12} alignItems="center">
      <Grid item lg={2}>
        <img
          style={{ width: 50, height: 50 }}
          src={`${process.env.PUBLIC_URL}/img/${imageName}`}
          alt={displayName}
        />
      </Grid>
      <Grid item lg={3}>
        <Typography
          component="div"
          variant="subtitle2"
          sx={{ lineHeight: '1em' }}
        >
          {id}
        </Typography>
      </Grid>
      <Grid item lg={3}>
        <Typography
          component="div"
          variant="subtitle2"
          sx={{ lineHeight: '1em' }}
        >
          {displayName}
        </Typography>
      </Grid>
      <Grid item lg={2}>
        <IconButton
          aria-label="add"
          color="inherit"
          onClick={() => dispatch(increaseQuantity(id))}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </Grid>
      <Grid item lg={1}>
        <Typography color="text.secondary" component="p">
          {quantity}
        </Typography>
      </Grid>
      <Grid item lg={2}>
        <IconButton
          aria-label="remove"
          onClick={() => dispatch(decreaseQuantity(id))}
          disabled={quantity <= 1}
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
      </Grid>
      <Grid item lg={2}>
        <IconButton
          aria-label="cancel"
          color="inherit"
          onClick={() => dispatch(deleteItem(id))}
        >
          <CancelIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default CartItem
