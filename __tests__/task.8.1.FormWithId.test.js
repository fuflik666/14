import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormWithId } from '../src/components';

describe('Task 8.1: FormWithId Component', () => {
    test('should render label and input', () => {
        render(<FormWithId />);
        expect(screen.getByText('Name:')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('should connect label and input with id', () => {
        render(<FormWithId />);
        const label = screen.getByText('Name:');
        const input = screen.getByRole('textbox');
        
        expect(label.getAttribute('for')).toBeTruthy();
        expect(input.getAttribute('id')).toBeTruthy();
        expect(label.getAttribute('for')).toBe(input.getAttribute('id'));
    });

    test('should be wrapped in a div', () => {
        const { container } = render(<FormWithId />);
        expect(container.firstChild.tagName).toBe('DIV');
    });
});
