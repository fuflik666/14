import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RenderCounter } from '../src/components';

describe('Task 3.2: RenderCounter Component', () => {
    test('should show render count starting at 1', () => {
        render(<RenderCounter />);
        expect(screen.getByText('Render count: 1')).toBeInTheDocument();
    });

    test('should have Re-render button', () => {
        render(<RenderCounter />);
        expect(screen.getByText('Re-render')).toBeInTheDocument();
    });

    test('should increment render count on re-render', () => {
        render(<RenderCounter />);
        const button = screen.getByText('Re-render');
        
        fireEvent.click(button);
        expect(screen.getByText('Render count: 2')).toBeInTheDocument();
        
        fireEvent.click(button);
        expect(screen.getByText('Render count: 3')).toBeInTheDocument();
    });
});
