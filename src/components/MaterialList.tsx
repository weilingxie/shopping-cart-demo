import React from 'react'
import Grid from '@mui/material/Grid'
import materials from '../static/materials.json'
import Item from './Item'
import { Material, Materials } from '../types/MaterialTypes'
import './MaterialList.css'

const MaterialListStyle = {
  paddingRight: '20px',
  borderRight: '2px lightgrey solid',
}

interface MaterialListProps {
  addItemToCart: (item: Material) => void
}

const MaterialList: React.FC<MaterialListProps> = ({ addItemToCart }) => {
  const materialsArray: Materials = [...materials.materials]

  return (
    <Grid container item lg={9} spacing={3} sx={MaterialListStyle}>
      {materialsArray.map((material) => (
        <Item key={material.id} item={material} addItemToCart={addItemToCart} />
      ))}
    </Grid>
  )
}

export default MaterialList
