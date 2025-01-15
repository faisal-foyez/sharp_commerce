import { render, screen } from '@testing-library/react';
import { Sidebar } from '../Sidebar';
import '@testing-library/jest-dom';
describe('Sidebar', () => {
  it('should render the sidebar', () => {
    render(<Sidebar data-testid="sidebar" />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});