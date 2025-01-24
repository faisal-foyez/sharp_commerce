import { render, screen } from '@testing-library/react';
import { Steps } from '../Steps';
import '@testing-library/jest-dom';

describe('Steps', () => {
  it('renders the steps', () => {
    render(<Steps data-testid="steps"/>);
    expect(screen.getByTestId('steps')).toBeInTheDocument();
  });
});