import React from 'react'
import Grid from '@mui/material/Grid'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import CancelIcon from '@mui/icons-material/Cancel'
import { IconButton } from '@mui/material'
import { Typography } from '@mui/material'

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
    <Grid item container lg={12} alignItems="center">
      <Grid lg={2}>
        <img
          style={{ width: 50, height: 50 }}
          src={`../img/${imageName}`}
          alt={displayName}
        />
      </Grid>
      <Grid lg={3}>
        <Typography
          component="div"
          variant="subtitle2"
          sx={{ lineHeight: '1em' }}
        >
          {displayName}
        </Typography>
      </Grid>
      <Grid lg={2}>
        <IconButton
          aria-label="add"
          color="inherit"
          onClick={() => increaseQuantity(item)}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </Grid>
      <Grid lg={1}>
        <Typography color="text.secondary" component="p">
          {quantity}
        </Typography>
      </Grid>
      <Grid lg={2}>
        <IconButton
          aria-label="remove"
          onClick={() => decreaseQuantity(item)}
          disabled={quantity <= 1}
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
      </Grid>
      <Grid lg={2}>
        <IconButton
          aria-label="cancel"
          color="inherit"
          onClick={() => deleteItem(id)}
        >
          <CancelIcon />
        </IconButton>
      </Grid>
    </Grid>
  )

  // return (
  //   <Grid item lg={12}>
  //     <img src={`../img/${imageName}`} alt={displayName} />
  //     <Typography variant="subtitle2">{displayName}</Typography>
  //     <IconButton color="inherit" onClick={() => increaseQuantity(item)}>
  //       <AddCircleOutlineIcon />
  //     </IconButton>
  //     <span>{quantity}</span>
  //     <IconButton
  //       color="inherit"
  //       onClick={() => decreaseQuantity(item)}
  //       disabled={quantity <= 1}
  //     >
  //       <RemoveCircleOutlineIcon />
  //     </IconButton>
  //     <IconButton color="inherit" onClick={() => deleteItem(id)}>
  //       <CancelIcon />
  //     </IconButton>
  //   </Grid>
  // )
}

export default CartItem
