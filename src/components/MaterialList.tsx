import React from 'react'
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
    <div className="display-container">
      {materialsArray.map((material) => (
        <Item key={material.id} item={material} addItemToCart={addItemToCart} />
      ))}
    </div>
  )
}

export default MaterialList
