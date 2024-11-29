import {fireEvent, render, screen} from '@testing-library/react';
import {Input, InputField, InputIcon} from '../index';
import { Envelope } from '@dsc/phosphor_icons';
import {vi} from 'vitest';
import '@testing-library/jest-dom';

describe('Input', () => {
  it('renders', () => {
    render(
      <InputField data-testid="input-field">
        <Input onChange={() => {}} />
        <InputIcon>
          <Envelope />
        </InputIcon>
      </InputField>
    );
    expect(screen.getByTestId('input-field')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    render(
      <InputField data-testid="input-field">
        <Input onChange={() => {}} />
        <InputIcon>
          <Envelope data-testid="input-icon"/>
        </InputIcon>
      </InputField>
    );
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
    render(
      <InputField data-testid="input-testid" isError>
        <Input onChange={() => {}} />
      </InputField>
    );
    expect(screen.getByTestId('input-testid').querySelector('.input-field.error')).toBeInTheDocument();
  });

  it('renders with disabled', () => {
    render(
      <InputField data-testid="input-testid" disabled>
        <Input onChange={() => {}} />
      </InputField>
    );
    expect(screen.getByTestId('input-testid').querySelector('.input-field')).toBeDisabled();
  });

  
});
