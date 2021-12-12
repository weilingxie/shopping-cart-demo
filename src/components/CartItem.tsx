import React from 'react'
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
    <div className="cart-item">
      <img src={`../img/${imageName}`} alt={displayName} />
      <Typography variant="subtitle2">{displayName}</Typography>
      <IconButton color="inherit" onClick={() => increaseQuantity(item)}>
        <AddCircleOutlineIcon />
      </IconButton>
      <span>{quantity}</span>
      <IconButton
        color="inherit"
        onClick={() => decreaseQuantity(item)}
        disabled={quantity <= 1}
      >
        <RemoveCircleOutlineIcon />
      </IconButton>
      <IconButton color="inherit" onClick={() => deleteItem(id)}>
        <CancelIcon />
      </IconButton>
    </div>
  )
}

export default CartItem
