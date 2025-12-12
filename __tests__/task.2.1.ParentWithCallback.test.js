import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ParentWithCallback } from '../src/components';

describe('Task 2.1: ParentWithCallback Component', () => {
    test('should render initial count', () => {
        render(<ParentWithCallback />);
        expect(screen.getByText(/0/)).toBeInTheDocument();
    });

    test('should have a Click button', () => {
        render(<ParentWithCallback />);
        expect(screen.getByText('Click')).toBeInTheDocument();
    });

    test('should increment count on button click', () => {
        render(<ParentWithCallback />);
        const button = screen.getByText('Click');
        
        fireEvent.click(button);
        expect(screen.getByText(/1/)).toBeInTheDocument();
        
        fireEvent.click(button);
        expect(screen.getByText(/2/)).toBeInTheDocument();
    });
});
