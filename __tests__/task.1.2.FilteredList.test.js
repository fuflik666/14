import React from 'react';
import { render, screen } from '@testing-library/react';
import { FilteredList } from '../src/components';

describe('Task 1.2: FilteredList Component', () => {
    test('should render filtered items', () => {
        const items = ['apple', 'banana', 'apricot', 'cherry'];
        render(<FilteredList items={items} filter="ap" />);
        
        expect(screen.getByText('apple')).toBeInTheDocument();
        expect(screen.getByText('apricot')).toBeInTheDocument();
        expect(screen.queryByText('banana')).not.toBeInTheDocument();
        expect(screen.queryByText('cherry')).not.toBeInTheDocument();
    });

    test('should render ul element', () => {
        const { container } = render(<FilteredList items={['test']} filter="" />);
        expect(container.querySelector('ul')).toBeInTheDocument();
    });

    test('should render all items when filter is empty', () => {
        const items = ['apple', 'banana'];
        render(<FilteredList items={items} filter="" />);
        
        expect(screen.getByText('apple')).toBeInTheDocument();
        expect(screen.getByText('banana')).toBeInTheDocument();
    });
});
