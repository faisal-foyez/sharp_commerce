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

  it('should not increase value when disabled', () => {
    const TestComponent = () =>{
      const [value, setValue] = useState(10);

      return (
        <InputNumber disabled={true} data-testid="input-number-testid">
          <InputNumberButton data-testid="input-number-button-minus-testid" onClick={(e) => {e.preventDefault(); setValue(value - 1)}}>-</InputNumberButton>
          <InputNumberBox value={value} onChange={(e) => {setValue(parseInt(e.target.value || '0'))}} data-testid="input-number-box-testid" />
          <InputNumberButton data-testid="input-number-button-plus-testid" onClick={(e) => {e.preventDefault(); setValue(value + 1)}}>+</InputNumberButton>
        </InputNumber>
      );
    }
    render(<TestComponent />);
    fireEvent.click(screen.getByTestId('input-number-button-plus-testid'));
    expect(screen.getByTestId('input-number-box-testid')).toHaveValue(10);
    fireEvent.click(screen.getByTestId('input-number-button-minus-testid'));
    expect(screen.getByTestId('input-number-box-testid')).toHaveValue(10);
  });

  it('should not decrease value when disabled', () => {
    const TestComponent = () =>{
      const [value, setValue] = useState(10);

      return (
        <InputNumber disabled={true} data-testid="input-number-testid">
          <InputNumberButton data-testid="input-number-button-minus-testid" onClick={(e) => {e.preventDefault(); setValue(value - 1)}}>-</InputNumberButton>
          <InputNumberBox value={value} onChange={(e) => {setValue(parseInt(e.target.value || '0'))}} data-testid="input-number-box-testid" />
          <InputNumberButton data-testid="input-number-button-plus-testid" onClick={(e) => {e.preventDefault(); setValue(value + 1)}}>+</InputNumberButton>
        </InputNumber>
      );
    }
    render(<TestComponent />);
    fireEvent.click(screen.getByTestId('input-number-button-minus-testid'));
    expect(screen.getByTestId('input-number-box-testid')).toHaveValue(10);
  });

  it('should not change value when disabled', () => {
    const TestComponent = () =>{
      const [value, setValue] = useState(10);

      return (
        <InputNumber disabled={true} data-testid="input-number-testid">
          <InputNumberButton data-testid="input-number-button-minus-testid" onClick={(e) => {e.preventDefault(); setValue(value - 1)}}>-</InputNumberButton>
          <InputNumberBox value={value} onChange={(e) => {setValue(parseInt(e.target.value || '0'))}} data-testid="input-number-box-testid" />
          <InputNumberButton data-testid="input-number-button-plus-testid" onClick={(e) => {e.preventDefault(); setValue(value + 1)}}>+</InputNumberButton>
        </InputNumber>
      );
    }
    
    render(<TestComponent />);
    fireEvent.change(screen.getByTestId('input-number-box-testid'), {target: {value: '100'}});
    expect(screen.getByTestId('input-number-box-testid')).toHaveValue(10);
  });
});
