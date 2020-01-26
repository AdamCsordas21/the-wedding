import React from 'react';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Divider from '../Divider'

describe('Divider', () => {
    it('renders the divider', () => {
        const { getByTestId } = render(<Divider />)
        expect(getByTestId('divider')).toBeInTheDocument()
    })
})