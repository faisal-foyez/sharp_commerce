import { render, screen, fireEvent } from '@testing-library/react';
import { InputNumber, InputNumberBox, InputNumberButton } from '../index';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { useState } from 'react';
describe('InputNumber', () => {
  it('should render correctly', () => {
    render(
      <InputNumber data-testid="input-number-testid">
        <InputNumberButton>+</InputNumberButton>
        <InputNumberBox />
        <InputNumberButton>-</InputNumberButton>
      </InputNumber>
    );
    expect(screen.getByTestId('input-number-testid')).toBeInTheDocument();
  });

  it('should render with isError true', () => {
    render(
      <InputNumber isError={true} data-testid="input-number-testid">
        <InputNumberButton>+</InputNumberButton>
        <InputNumberBox />
        <InputNumberButton>-</InputNumberButton>
      </InputNumber>
    );
    expect(screen.getByTestId('input-number-testid')).toHaveClass('input-number-error');
  });

  it('should render with isDisabled true', () => {
    render(
      <InputNumber disabled={true} data-testid="input-number-testid">
        <InputNumberButton>+</InputNumberButton>
        <InputNumberBox />
        <InputNumberButton>-</InputNumberButton>
      </InputNumber>
    );
    expect(screen.getByTestId('input-number-testid')).toHaveClass('input-number-disabled');
  });

  it('should work with onChange', () => {
    const onChange = vi.fn();
    render(<InputNumber data-testid="input-number-testid">
      <InputNumberButton>+</InputNumberButton>
      <InputNumberBox data-testid="input-number-box-testid" onChange={onChange}/>
      <InputNumberButton>-</InputNumberButton>
    </InputNumber>);
    fireEvent.change(screen.getByTestId('input-number-box-testid'), {target: {value: '10'}});
    expect(onChange.mock.calls[0][0].target.value).toBe('10');
  });

  it('should increase value when click +', () => {
    const TestComponent = () => {
      const [value, setValue] = useState(10);
      return (
        <InputNumber data-testid="input-number-testid">
          <InputNumberButton onClick={() => setValue(value + 1)}>+</InputNumberButton>
          <InputNumberBox value={value} data-testid="input-number-box-testid" />
          <InputNumberButton onClick={() => setValue(value - 1)}>-</InputNumberButton>
        </InputNumber>
      );
    };

    render(<TestComponent />);
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByTestId('input-number-box-testid')).toHaveValue(11);
  });

  it('should decrease value when click -', () => {
    const TestComponent = () =>{
      const [value, setValue] = useState(10);

      return (
        <InputNumber data-testid="input-number-testid">
          <InputNumberButton onClick={() => setValue(value - 1)}>-</InputNumberButton>
          <InputNumberBox value={value} data-testid="input-number-box-testid" />
          <InputNumberButton onClick={() => setValue(value + 1)}>+</InputNumberButton>
        </InputNumber>
      );
    }
    render(<TestComponent />);
    fireEvent.click(screen.getByText('-'));
    expect(screen.getByTestId('input-number-box-testid')).toHaveValue(9);
  });
});
