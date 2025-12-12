import React from 'react';
import { render, screen } from '@testing-library/react';
import { ScrollToTop } from '../src/components';

describe('Task 5.2: ScrollToTop Component', () => {
    test('should render message', () => {
        render(<ScrollToTop />);
        expect(screen.getByText('Scrolled to top')).toBeInTheDocument();
    });

    test('should display message in paragraph within div', () => {
        const { container } = render(<ScrollToTop />);
        expect(container.firstChild.tagName).toBe('DIV');
        expect(container.querySelector('p')).toBeInTheDocument();
    });
});
