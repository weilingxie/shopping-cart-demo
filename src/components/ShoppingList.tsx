import React from 'react'
import Grid from '@mui/material/Grid'

import Item from './Item'
import { Materials } from '../types/MaterialTypes'

const ShoppingListStyle = {
  paddingRight: '20px',
  borderRight: '2px lightgrey solid',
}

interface ShoppingListProps {
  materials: Materials
}

const ShoppingList: React.FC<ShoppingListProps> = ({ materials }) => {
  return (
    <Grid container item lg={8} spacing={3} sx={ShoppingListStyle}>
      {materials.map((material) => (
        <Item key={material.id} item={material} />
      ))}
    </Grid>
  )
}

export default ShoppingList
