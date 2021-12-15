import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import ShoppingListContainer from './components/ShoppingListContainer'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ShoppingListContainer />
    </Provider>
  )
}

export default App
