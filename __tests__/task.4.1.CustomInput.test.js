import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ParentOfCustomInput } from '../src/components';

describe('Task 4.1: CustomInput and ParentOfCustomInput', () => {
    test('should render input and button', () => {
        render(<ParentOfCustomInput />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByText('Focus Input')).toBeInTheDocument();
    });

    test('should focus input when button is clicked', () => {
        render(<ParentOfCustomInput />);
        const input = screen.getByRole('textbox');
        const button = screen.getByText('Focus Input');
        
        fireEvent.click(button);
        expect(document.activeElement).toBe(input);
    });
});
