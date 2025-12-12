import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ToggleComponent } from '../src/components';

describe('Task 9.2: useToggle Hook and ToggleComponent', () => {
    test('should render initial OFF state', () => {
        render(<ToggleComponent />);
        expect(screen.getByText('OFF')).toBeInTheDocument();
    });

    test('should have Toggle button', () => {
        render(<ToggleComponent />);
        expect(screen.getByText('Toggle')).toBeInTheDocument();
    });

    test('should toggle state on button click', () => {
        render(<ToggleComponent />);
        const button = screen.getByText('Toggle');
        
        fireEvent.click(button);
        expect(screen.getByText('ON')).toBeInTheDocument();
        
        fireEvent.click(button);
        expect(screen.getByText('OFF')).toBeInTheDocument();
    });

    test('should display state in paragraph', () => {
        render(<ToggleComponent />);
        const state = screen.getByText(/OFF|ON/);
        expect(state.tagName).toBe('P');
    });
});
