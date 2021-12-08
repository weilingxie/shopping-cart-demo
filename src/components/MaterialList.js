import materials from '../static/materials.json'
import Item from './Item'
import './MaterialList.css'

const MaterialList = ({ addItemToCart }) => {
  const materialsArray = [...materials.materials]

  return (
    <div className="display-container">
      {materialsArray.map((material) => (
        <Item key={material.id} item={material} addItemToCart={addItemToCart} />
      ))}
    </div>
  )
}

export default MaterialList
