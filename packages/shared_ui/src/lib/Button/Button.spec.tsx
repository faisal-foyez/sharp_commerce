import { fireEvent, render } from '@testing-library/react';
import * as Icon from "@dsc/phosphor_icons";
import {Button} from './Button';
import '@testing-library/jest-dom';
import {vi} from 'vitest';
describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button type="primary" style="fill" />);
    expect(baseElement).toBeTruthy();
  });

  it('should render with text', () => {
    const { getByText } = render(<Button type="primary" style="fill">Click me</Button>);
    expect(getByText('Click me')).toBeTruthy();
  });

  it('should render with icon', () => {
    const { getByTestId } = render(<Button type="primary" style="fill"><Icon.ShoppingCart data-testid="ShoppingCart" /></Button>);
    expect(getByTestId('ShoppingCart')).toBeTruthy();
  });

  it('should render with icon and text', () => {
    const { getByTestId, getByText } = render(<Button type="primary" style="fill"><Icon.ShoppingCart data-testid="ShoppingCart" />Click me</Button>);
    expect(getByTestId('ShoppingCart')).toBeTruthy();
    expect(getByText('Click me')).toBeTruthy();
  });

  it('should render with disabled', () => {
    const { getByRole } = render(<Button type="primary" style="fill" disabled>Click me</Button>);
    expect(getByRole('button')).toBeDisabled();
  });

  it('should render with aria-label', () => {
    const { getByRole } = render(<Button type="primary" style="fill" ariaLabel="Click me">Click me</Button>);
    expect(getByRole('button')).toHaveAttribute('aria-label', 'Click me');
  });

  it('should render with aria-expanded', () => {
    const { getByRole } = render(<Button type="primary" style="fill" ariaExpanded={true}>Click me</Button>);
    expect(getByRole('button')).toHaveAttribute('aria-expanded', 'true');
  });

  it('should render with aria-controls', () => {
    const { getByRole } = render(<Button type="primary" style="fill" ariaControls="controls">Click me</Button>);
    expect(getByRole('button')).toHaveAttribute('aria-controls', 'controls');
  });

  it('should render with aria-describedby', () => {
    const { getByRole } = render(<Button type="primary" style="fill" ariaDescribedBy="describedbyid">Click me</Button>);
    expect(getByRole('button')).toHaveAttribute('aria-describedby', 'describedbyid');
  });

  it('should render with onClick', () => {
    const onClick = vi.fn();
    const { getByRole } = render(<Button type="primary" style="fill" onClick={onClick}>Click me</Button>);
    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should render with size', () => {
    const { getByRole } = render(<Button type="primary" style="fill" size="sm">Click me</Button>);
    expect(getByRole('button')).toHaveClass('btn-sm');
  });

  it('should render with isRounded', () => {
    const { getByRole } = render(<Button type="primary" style="fill" isRounded>Click me</Button>);
    expect(getByRole('button')).toHaveClass('btn-rounded');
  });

  it('should render with LeftIcon', () => {
    const { getByTestId } = render(<Button type="primary" style="fill" LeftIcon={<Icon.ShoppingCart data-testid="ShoppingCart" />}>Click me</Button>);
    expect(getByTestId('ShoppingCart')).toBeTruthy();
  });

  it('should render with RightIcon', () => {
    const { getByTestId } = render(<Button type="primary" style="fill" RightIcon={<Icon.ShoppingCart data-testid="ShoppingCart" />}>Click me</Button>);
    expect(getByTestId('ShoppingCart')).toBeTruthy();
  });

  it('should render with LeftIcon and RightIcon', () => {
    const { getByTestId } = render(<Button type="primary" style="fill" LeftIcon={<Icon.ShoppingCart data-testid="ShoppingCartLeft" />} RightIcon={<Icon.ShoppingCart data-testid="ShoppingCartRight" />}>Click me</Button>);
    expect(getByTestId('ShoppingCartLeft')).toBeTruthy();
    expect(getByTestId('ShoppingCartRight')).toBeTruthy();
  });

  it('should render with type', () => {
    const { getByRole } = render(<Button type="primary" style="fill">Click me</Button>);
    expect(getByRole('button')).toHaveClass('btn-primary');
  });

  it('should render with style', () => {
    const { getByRole } = render(<Button type="primary" style="border">Click me</Button>);
    expect(getByRole('button')).toHaveClass('btn-primary-border');
  });

  
});
