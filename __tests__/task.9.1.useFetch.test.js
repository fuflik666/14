import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataFetcher } from '../src/components';

describe('Task 9.1: useFetch Hook and DataFetcher Component', () => {
    test('should render fetched data', () => {
        render(<DataFetcher />);
        expect(screen.getByText('Data: test data')).toBeInTheDocument();
    });

    test('should display data in paragraph', () => {
        render(<DataFetcher />);
        const data = screen.getByText(/Data:/);
        expect(data.tagName).toBe('P');
    });
});
