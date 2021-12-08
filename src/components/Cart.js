import CartItem from './CartItem'
import './Cart.css'

const Cart = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
}) => {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems &&
        cartItems.map((item) => (
          <CartItem
            key={`cardItem${item.id}`}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            deleteItem={deleteItem}
          />
        ))}
    </div>
  )
}

export default Cart
