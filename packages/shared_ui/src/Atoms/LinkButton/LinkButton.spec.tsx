import { render, fireEvent } from "@testing-library/react";
import LinkButton from "./LinkButton";
import * as Icon from "@dsc/phosphor_icons";
import '@testing-library/jest-dom';
import { vi } from 'vitest';

describe('LinkButton', () => {
  const renderLinkButton = (props:any) => render(<LinkButton type="primary" size="md" {...props} />);

  it('should render successfully', () => {
    const { baseElement } = renderLinkButton({});
    expect(baseElement).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = renderLinkButton({ children: 'Order' });
    expect(getByText('Order')).toBeTruthy();
  });

  it('should render with left icon', () => {
    const { getByTestId } = renderLinkButton({ LeftIcon: <Icon.Ambulance data-testid="Ambulance" />, children: 'Left' });
    expect(getByTestId('Ambulance')).toBeTruthy();
  });

  it('should render with right icon', () => {
    const { getByTestId } = renderLinkButton({ RightIcon: <Icon.Ambulance data-testid="Ambulance" />, children: 'Right' });
    expect(getByTestId('Ambulance')).toBeTruthy();
  });

  it('should render with both icons', () => {
    const { getByTestId } = renderLinkButton({
      LeftIcon: <Icon.Ambulance data-testid="left_ambulance" />,
      RightIcon: <Icon.Ambulance data-testid="right_ambulance" />,
      children: 'Both'
    });
    expect(getByTestId('left_ambulance')).toBeTruthy();
    expect(getByTestId('right_ambulance')).toBeTruthy();
  });

  it('should render as disabled', () => {
    const { getByRole } = renderLinkButton({ disabled: true, children: 'Disabled' });
    expect(getByRole('button')).toBeDisabled();
  });

  it('should render with aria-label', () => {
    const { getByRole } = renderLinkButton({ 'ariaLabel': 'Click me', children: 'Click me' });
    expect(getByRole('button')).toHaveAttribute('aria-label', 'Click me');
  });

  it('should render with aria-expanded', () => {
    const { getByRole } = renderLinkButton({ 'ariaExpanded': true, children: 'Click me' });
    expect(getByRole('button')).toHaveAttribute('aria-expanded', 'true');
  });

  it('should render with aria-controls', () => {
    const { getByRole } = renderLinkButton({ 'ariaControls': 'controls', children: 'Click me' });
    expect(getByRole('button')).toHaveAttribute('aria-controls', 'controls');
  });

  it('should render with aria-describedby', () => {
    const { getByRole } = renderLinkButton({ 'ariaDescribedBy': 'describedbyid', children: 'Click me' });
    expect(getByRole('button')).toHaveAttribute('aria-describedby', 'describedbyid');
  });

  it('should call onClick when clicked', () => {
    const onClick = vi.fn();
    const { getByRole } = renderLinkButton({ onClick, children: 'Click me' });
    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should render with type', () => {
    const { getByRole } = renderLinkButton({ children: 'Click me' });
    expect(getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('should render with size', () => {
    const { getByRole } = renderLinkButton({ children: 'Click me' });
    expect(getByRole('button')).toHaveClass('link-btn-md');
  });
});
