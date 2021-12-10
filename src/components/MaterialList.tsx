import React from 'react'
import Grid from '@mui/material/Grid'
import materials from '../static/materials.json'
import Item from './Item'
import { Material, Materials } from '../types/MaterialTypes'
import './MaterialList.css'

interface MaterialListProps {
  addItemToCart: (item: Material) => void
}

const MaterialList: React.FC<MaterialListProps> = ({ addItemToCart }) => {
  const materialsArray: Materials = [...materials.materials]

  return (
    <Grid container item lg={9} spacing={3}>
      {materialsArray.map((material) => (
        <Item key={material.id} item={material} addItemToCart={addItemToCart} />
      ))}
    </Grid>
  )
}

export default MaterialList
