import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import LinkButtons from '../LinkButtons';

describe('Link Buttons', () => {
  it('renders the Link Buttons component', () => {
    const { getByTestId } = render(<LinkButtons />)
    expect(getByTestId('link-buttons')).toBeInTheDocument()
  })

  const links = [
    { href: '/index', link: 'Home' },
    { href: '/TheWedding', link: 'The Wedding' },
    { href: '/GuestInformation', link: 'Guest Information' },
  ]
  links.forEach(({ href, link }) => {
    it(`renders the ${link} link`, () => {
      const { getAllByTestId } = render(<LinkButtons />)
      const element = getAllByTestId('link-button').find(e => e.getAttribute('href') === href)
      expect(element).toHaveTextContent(link)
    })
  })
})