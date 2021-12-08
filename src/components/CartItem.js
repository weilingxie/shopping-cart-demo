const CartItem = ({ item, increaseQuantity, decreaseQuantity, deleteItem }) => {
  const { id, displayName, imageName, quantity } = item

  return (
    <div className="cart-item">
      <img src={`../img/${imageName}`} alt={displayName} />
      <h3>{displayName}</h3>
      <span onClick={() => increaseQuantity(item)}>+</span>
      <span>{quantity}</span>
      <span onClick={() => decreaseQuantity(item)}>-</span>
      <button onClick={() => deleteItem(id)}>X</button>
    </div>
  )
}

export default CartItem
