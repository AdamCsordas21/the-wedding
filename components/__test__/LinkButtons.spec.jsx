import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import LinkButtons from '../LinkButtons';

describe('Link Buttons', () => {
  it('renders the Link Buttons component', () => {
    const { getByTestId } = render(<LinkButtons />)
    expect(getByTestId('link-buttons')).toBeInTheDocument()
  })
  it('renders the Home link', () => {
    const { getAllByTestId } = render(<LinkButtons />)
    const element = getAllByTestId('link-button').find(e => e.getAttribute('href') === '/index')
    expect(element).toHaveTextContent('Home')
  })
  it('renders the The Wedding link', () => {
    const { getAllByTestId } = render(<LinkButtons />)
    const element = getAllByTestId('link-button').find(e => e.getAttribute('href') === '/TheWedding')
    expect(element).toHaveTextContent('The Wedding')
  })
  it('renders the Guest Information link', () => {
    const { getAllByTestId } = render(<LinkButtons />)
    const element = getAllByTestId('link-button').find(e => e.getAttribute('href') === '/GuestInformation')
    expect(element).toHaveTextContent('Guest Information')
  })
})