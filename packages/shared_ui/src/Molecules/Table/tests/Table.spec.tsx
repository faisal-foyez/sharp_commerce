import { render, screen } from '@testing-library/react';
import { Table } from '../Table';
import '@testing-library/jest-dom';

describe('Table', () => {
  it('renders the table', () => {
    render(<Table data-testid="table"/>);
    expect(screen.getByTestId('table')).toBeInTheDocument();
  });
});