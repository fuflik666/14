import React from 'react';
import { render, screen } from '@testing-library/react';
import { OnlineIndicator } from '../src/components';

describe('Task 6.1: useOnlineStatus Hook and OnlineIndicator', () => {
    test('should render online status', () => {
        render(<OnlineIndicator />);
        expect(screen.getByText('Status: Online')).toBeInTheDocument();
    });

    test('should display status in paragraph', () => {
        render(<OnlineIndicator />);
        const status = screen.getByText(/Status:/);
        expect(status.tagName).toBe('P');
    });
});
