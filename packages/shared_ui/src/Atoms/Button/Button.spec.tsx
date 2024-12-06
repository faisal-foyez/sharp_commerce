import { fireEvent, render } from '@testing-library/react';
import * as Icon from "@dsc/phosphor_icons";
import Button from './Button';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

const renderButton = (props: any) => render(<Button type="primary" style="fill" {...props} />);

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = renderButton({});
    expect(baseElement).toBeTruthy();
  });

  it('should render with text', () => {
    const { getByText } = renderButton({ children: 'Click me' });
    expect(getByText('Click me')).toBeTruthy();
  });

  it('should render with icon', () => {
    const { getByTestId } = renderButton({ LeftIcon: <Icon.ShoppingCart data-testid="ShoppingCart" /> });
    expect(getByTestId('ShoppingCart')).toBeTruthy();
  });

  it('should render with icon and text', () => {
    const { getByTestId, getByText } = renderButton({ LeftIcon: <Icon.ShoppingCart data-testid="ShoppingCart" />, children: 'Click me' });
    expect(getByTestId('ShoppingCart')).toBeTruthy();
    expect(getByText('Click me')).toBeTruthy();
  });

  it('should render with disabled', () => {
    const { getByRole } = renderButton({ disabled: true, children: 'Click me' });
    expect(getByRole('button')).toBeDisabled();
  });

  it('should render with aria-label', () => {
    const { getByRole } = renderButton({ ariaLabel: 'Click me', children: 'Click me' });
    expect(getByRole('button')).toHaveAttribute('aria-label', 'Click me');
  });

  it('should render with aria-label', () => {
    const { getByRole } = renderButton({ ariaLabel: 'aria_label', children: 'Click me' });
    expect(getByRole('button')).toHaveAttribute('aria-label', 'aria_label');
  });

  it('should render with aria-expanded', () => {
    const { getByRole } = renderButton({ ariaExpanded: true, children: 'Click me' });
    expect(getByRole('button')).toHaveAttribute('aria-expanded', 'true');
  });

  it('should render with aria-controls', () => {
    const { getByRole } = renderButton({ ariaControls: 'controls', children: 'Click me' });
    expect(getByRole('button')).toHaveAttribute('aria-controls', 'controls');
  });

  it('should render with aria-describedby', () => {
    const { getByRole } = renderButton({ ariaDescribedBy: 'describedbyid', children: 'Click me' });
    expect(getByRole('button')).toHaveAttribute('aria-describedby', 'describedbyid');
  });

  it('should render with onClick', () => {
    const onClick = vi.fn();
    const { getByRole } = renderButton({ onClick, children: 'Click me' });
    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should render with size', () => {
    const { getByRole } = renderButton({ size: 'sm', children: 'Click me' });
    expect(getByRole('button')).toHaveClass('btn-sm');
  });

  it('should render with isRounded', () => {
    const { getByRole } = renderButton({ isRounded: true, children: 'Click me' });
    expect(getByRole('button')).toHaveClass('btn-rounded');
  });

  it('should render with LeftIcon', () => {
    const { getByTestId } = renderButton({ LeftIcon: <Icon.ShoppingCart data-testid="ShoppingCart" />, children: 'Click me' });
    expect(getByTestId('ShoppingCart')).toBeTruthy();
  });

  it('should render with RightIcon', () => {
    const { getByTestId } = renderButton({ RightIcon: <Icon.ShoppingCart data-testid="ShoppingCart" />, children: 'Click me' });
    expect(getByTestId('ShoppingCart')).toBeTruthy();
  });

  it('should render with LeftIcon and RightIcon', () => {
    const { getByTestId } = renderButton({ 
      LeftIcon: <Icon.ShoppingCart data-testid="ShoppingCartLeft" />, 
      RightIcon: <Icon.ShoppingCart data-testid="ShoppingCartRight" />, 
      children: 'Click me' 
    });
    expect(getByTestId('ShoppingCartLeft')).toBeTruthy();
    expect(getByTestId('ShoppingCartRight')).toBeTruthy();
  });

  it('should render with type', () => {
    const { getByRole } = renderButton({ children: 'Click me' });
    expect(getByRole('button')).toHaveClass('btn-primary-fill');
  });

  it('should render with style', () => {
    const { getByRole } = renderButton({ style: 'border', children: 'Click me' });
    expect(getByRole('button')).toHaveClass('btn-primary-border');
  });
});
