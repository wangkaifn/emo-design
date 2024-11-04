import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HelloWorld from './HelloWorld'

describe('HelloWorld', () => {
  it('should renders a msg', () => {
    // arrange
    render(<HelloWorld msg="Hello Cypress!" />)

    // act
    const title = screen.getByTestId('title')

    // assert
    expect(title).toHaveTextContent(/Hello Cypress!/i)
  })
})
