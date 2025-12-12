import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TabSwitcher } from '../src/components';

describe('Task 7.1: TabSwitcher Component', () => {
    test('should render tab buttons', () => {
        render(<TabSwitcher />);
        expect(screen.getByText('Tab 1')).toBeInTheDocument();
        expect(screen.getByText('Tab 2')).toBeInTheDocument();
    });

    test('should display default tab content', () => {
        render(<TabSwitcher />);
        expect(screen.getByText(/Content of Tab/)).toBeInTheDocument();
    });

    test('should switch tabs on button click', () => {
        render(<TabSwitcher />);
        const tab2Button = screen.getByText('Tab 2');
        
        fireEvent.click(tab2Button);
        expect(screen.getByText('Content of Tab 2')).toBeInTheDocument();
    });

    test('should render content in div with paragraph', () => {
        const { container } = render(<TabSwitcher />);
        expect(container.querySelector('div')).toBeInTheDocument();
        expect(container.querySelector('p')).toBeInTheDocument();
    });
});
