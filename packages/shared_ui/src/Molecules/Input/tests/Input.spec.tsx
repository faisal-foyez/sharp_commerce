import { fireEvent, render, screen } from '@testing-library/react';
import { Input, InputField, InputIcon } from '../index';
import { Envelope } from '@dsc/phosphor_icons';
import { vi } from 'vitest';
import '@testing-library/jest-dom';

describe('Input', () => {
  const renderInputField = (props:any) => {
    return render(
      <InputField data-testid="input-field" {...props}>
        <Input onChange={props.onChange} />
        <InputIcon>
          <Envelope data-testid="input-icon" />
        </InputIcon>
      </InputField>
    );
  };

  it('renders', () => {
    renderInputField({});
    expect(screen.getByTestId('input-field')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    renderInputField({});
    expect(screen.getByTestId('input-icon')).toBeInTheDocument();
  });

  it('calls onChange handler when input value changes', () => {
    const handleChange = vi.fn();
    render(
      <InputField data-testid="input-field">
        <Input onChange={handleChange} />
      </InputField>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new value' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0].target.value).toBe('new value');
  });

  it('renders with error', () => {
    renderInputField({ isError: true });
    expect(screen.getByTestId('input-field').querySelector('.input-field.error')).toBeInTheDocument();
  });

  it('renders with disabled', () => {
    renderInputField({ disabled: true });
    expect(screen.getByTestId('input-field').querySelector('.input-field')).toBeDisabled();
  });
});
