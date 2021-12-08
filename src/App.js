import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import MaterialList from './MaterialList'

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box my={12}>
        <MaterialList />
      </Box>
    </Container>
  )
}
