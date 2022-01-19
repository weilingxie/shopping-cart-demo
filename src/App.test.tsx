import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App tests', () => {
  it('Should render ShoppingListContainer', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('ShoppingListContainer')).toBeTruthy()
  })
})
