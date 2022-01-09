import React from 'react'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import ShoppingList from './ShoppingList'
import Cart from './Cart'
import materials from '../static/materials.json'

const ShoppingListContainer: React.FC = () => {
  return (
    <Container
      sx={{ paddingTop: '30px' }}
      className="page-container"
      data-testid="ShoppingListContainer"
    >
      <Grid container alignItems="flex-start" spacing="2">
        <ShoppingList materials={materials.materials} />
        <Cart />
      </Grid>
    </Container>
  )
}

export default ShoppingListContainer
