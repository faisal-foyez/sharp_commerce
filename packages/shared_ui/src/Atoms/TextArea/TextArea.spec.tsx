import { render, screen } from '@testing-library/react';
import TextArea from './TextArea';
import '@testing-library/jest-dom';

describe('TextArea', () => {
  it('renders', () => {
    render(<TextArea data-testid="text-area-testid"/>);
    expect(screen.getByTestId('text-area-testid')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<TextArea data-testid="text-area-testid" placeholder="Placeholder"/>);
    expect(screen.getByTestId('text-area-testid')).toHaveAttribute('placeholder', 'Placeholder');
  });

  it('renders with error', () => {
    render(<TextArea data-testid="text-area-testid" isError={true}/>);
    expect(screen.getByTestId('text-area-testid')).toHaveClass('input-textarea-error');
  });

  it('renders with disabled', () => {
    render(<TextArea data-testid="text-area-testid" disabled={true}/>);
    expect(screen.getByTestId('text-area-testid')).toHaveAttribute('disabled');
  });
});