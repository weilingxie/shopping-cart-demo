import React from 'react'
import Grid from '@mui/material/Grid'

import Item from './Item'
import { Materials } from '../types/MaterialTypes'

const MaterialListStyle = {
  paddingRight: '20px',
  borderRight: '2px lightgrey solid',
}

interface MaterialListProps {
  materials: Materials
}

const MaterialList: React.FC<MaterialListProps> = ({ materials }) => {
  return (
    <Grid container item lg={8} spacing={3} sx={MaterialListStyle}>
      {materials.map((material) => (
        <Item key={material.id} item={material} />
      ))}
    </Grid>
  )
}

export default MaterialList
