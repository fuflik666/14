import React from 'react';
import { render, screen } from '@testing-library/react';
import { MeasureElement } from '../src/components';

describe('Task 5.1: MeasureElement Component', () => {
    test('should render content and width', () => {
        render(<MeasureElement />);
        expect(screen.getByText('Content')).toBeInTheDocument();
        expect(screen.getByText(/Width: \d+px/)).toBeInTheDocument();
    });

    test('should display width in paragraph', () => {
        render(<MeasureElement />);
        const widthText = screen.getByText(/Width:/);
        expect(widthText.tagName).toBe('P');
    });

    test('should be wrapped in a div', () => {
        const { container } = render(<MeasureElement />);
        expect(container.firstChild.tagName).toBe('DIV');
    });
});
