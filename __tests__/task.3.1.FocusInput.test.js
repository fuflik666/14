import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FocusInput } from '../src/components';

describe('Task 3.1: FocusInput Component', () => {
    test('should render input and Focus button', () => {
        render(<FocusInput />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByText('Focus')).toBeInTheDocument();
    });

    test('should focus input when button is clicked', () => {
        render(<FocusInput />);
        const input = screen.getByRole('textbox');
        const button = screen.getByText('Focus');
        
        fireEvent.click(button);
        expect(document.activeElement).toBe(input);
    });

    test('should be wrapped in a div', () => {
        const { container } = render(<FocusInput />);
        expect(container.firstChild.tagName).toBe('DIV');
    });
});
