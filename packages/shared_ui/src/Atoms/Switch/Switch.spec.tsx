import { screen, render } from '@testing-library/react';
import { Switch } from './index';
import '@testing-library/jest-dom';

describe('Switch', () => {
  it('should render', () => {
    render(<Switch data-testid="switch" />);
    expect(screen.getByTestId('switch')).toBeInTheDocument();
  });
});