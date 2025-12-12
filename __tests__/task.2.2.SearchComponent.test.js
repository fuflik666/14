import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchComponent } from '../src/components';

describe('Task 2.2: SearchComponent', () => {
    test('should render input and search display', () => {
        render(<SearchComponent />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByText(/Search:/)).toBeInTheDocument();
    });

    test('should update search term', () => {
        render(<SearchComponent />);
        const input = screen.getByRole('textbox');
        
        fireEvent.change(input, { target: { value: 'test' } });
        expect(screen.getByText('Search: test')).toBeInTheDocument();
    });

    test('should be wrapped in a div', () => {
        const { container } = render(<SearchComponent />);
        expect(container.firstChild.tagName).toBe('DIV');
    });
});
