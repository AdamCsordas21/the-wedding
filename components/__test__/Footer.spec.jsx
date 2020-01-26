import React from 'react';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../Footer'

describe('Footer', () => {
    it('renders the footer', () => {
        const { getByText } = render(<Footer />)
        expect(getByText('© Developed by Adam Csordas')).toBeInTheDocument()
    })
})