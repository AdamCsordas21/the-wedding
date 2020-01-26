import React from 'react';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import LinkButtons from '../LinkButtons';

describe('Link Buttons', () => {
    it('renders the Link Buttons component', () => {
        const { getByTestId } = render(<LinkButtons />)
        expect(getByTestId('link-button')).toBeInTheDocument()
    })
})