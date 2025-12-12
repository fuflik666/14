import React from 'react';
import { render, screen } from '@testing-library/react';
import { PreviousValue } from '../src/components';

describe('Task 3.3: PreviousValue Component', () => {
    test('should show undefined as previous value initially', () => {
        render(<PreviousValue value={5} />);
        expect(screen.getByText('Current: 5, Previous: undefined')).toBeInTheDocument();
    });

    test('should track previous value on prop change', () => {
        const { rerender } = render(<PreviousValue value={1} />);
        expect(screen.getByText('Current: 1, Previous: undefined')).toBeInTheDocument();
        
        rerender(<PreviousValue value={2} />);
        expect(screen.getByText('Current: 2, Previous: 1')).toBeInTheDocument();
        
        rerender(<PreviousValue value={3} />);
        expect(screen.getByText('Current: 3, Previous: 2')).toBeInTheDocument();
    });
});
