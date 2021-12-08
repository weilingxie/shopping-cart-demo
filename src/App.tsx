import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import ShoppingListContainer from './components/ShoppingListContainer'

const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box my={12}>
        <ShoppingListContainer />
      </Box>
    </Container>
  )
}

export default App
