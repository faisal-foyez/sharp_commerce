import { render, screen } from '@testing-library/react';
import TextArea from './TextArea';
import '@testing-library/jest-dom';

describe('TextArea', () => {
  const setup = (props = {}) => {
    render(<TextArea data-testid="text-area-testid" {...props} />);
  };

  it('renders', () => {
    setup();
    expect(screen.getByTestId('text-area-testid')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    setup({ placeholder: 'Placeholder' });
    expect(screen.getByTestId('text-area-testid')).toHaveAttribute('placeholder', 'Placeholder');
  });

  it('renders with error', () => {
    setup({ isError: true });
    expect(screen.getByTestId('text-area-testid')).toHaveClass('input-textarea-error');
  });

  it('renders with disabled', () => {
    setup({ disabled: true });
    expect(screen.getByTestId('text-area-testid')).toHaveAttribute('disabled');
  });
});