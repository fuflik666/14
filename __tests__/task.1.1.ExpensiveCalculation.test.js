import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExpensiveCalculation } from '../src/components';

describe('Task 1.1: ExpensiveCalculation Component', () => {
    test('should render result of calculation', () => {
        render(<ExpensiveCalculation number={5} multiplier={3} />);
        expect(screen.getByText('Result: 15')).toBeInTheDocument();
    });

    test('should update when props change', () => {
        const { rerender } = render(<ExpensiveCalculation number={2} multiplier={4} />);
        expect(screen.getByText('Result: 8')).toBeInTheDocument();
        
        rerender(<ExpensiveCalculation number={10} multiplier={2} />);
        expect(screen.getByText('Result: 20')).toBeInTheDocument();
    });

    test('should render paragraph in a div', () => {
        const { container } = render(<ExpensiveCalculation number={1} multiplier={1} />);
        expect(container.firstChild.tagName).toBe('DIV');
        expect(container.querySelector('p')).toBeInTheDocument();
    });
});
