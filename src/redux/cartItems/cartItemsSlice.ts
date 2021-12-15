import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItems } from '../../types/CartTypes'
import { Material } from '../../types/MaterialTypes'
import type { RootState } from '../store'

// Define a type for the slice state
interface CartItemsState {
  value: CartItems
}

// Define the initial state using that type
const initialState: CartItemsState = {
  value: [],
}

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const cartItems = state.value
      const id = action.payload
      const existItem = cartItems.find((i) => (i.id = id))
      if (existItem) {
        const index = cartItems.indexOf(existItem)
        state.value[index].quantity += 1
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const cartItems = state.value
      const id = action.payload
      const existItem = cartItems.find((i) => (i.id = id))
      if (existItem) {
        const index = cartItems.indexOf(existItem)
        state.value[index].quantity -= 1
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const cartItems = state.value
      const id = action.payload
      const changeItem = cartItems.find((i) => i.id === id)
      if (changeItem) {
        const itemIndex = cartItems.indexOf(changeItem)
        state.value.splice(itemIndex, 1)
      }
    },
    addItemToCart: (state, action: PayloadAction<Material>) => {
      const cartItems = state.value
      const item = action.payload
      const existItem = cartItems.find((i) => i.id === item.id)
      if (existItem) {
        return
      }
      const newCartItem = {
        id: item.id,
        displayName: item.displayName,
        imageName: item.imageName,
        quantity: 1,
      }
      state.value.push(newCartItem)
    },
  },
})

export const { increaseQuantity, decreaseQuantity, deleteItem, addItemToCart } =
  cartItemsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCartItems = (state: RootState): CartItemsState =>
  state.cartItems

export default cartItemsSlice.reducer
