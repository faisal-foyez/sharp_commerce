import { screen, render } from '@testing-library/react';
import { Divider } from './Divider';
import '@testing-library/jest-dom';

describe('Divider', () => {
  it('should render', () => {
    render(<Divider data-testid="divider" />);
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });
});