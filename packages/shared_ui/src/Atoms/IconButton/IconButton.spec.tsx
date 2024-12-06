import { fireEvent, render, screen } from "@testing-library/react";
import IconButton from "./IconButton";
import { ArrowRight } from '@dsc/phosphor_icons';
import "@testing-library/jest-dom";
import { vi } from "vitest";

describe('IconButton', () => {
  const renderIconButton = (props:any) => render(<IconButton {...props}><ArrowRight data-testid="icon" /></IconButton>);

  it('should successfully render', () => {
    renderIconButton({ type: "success", style: "light", size: "md" });
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should successfully render with children', () => {
    renderIconButton({ type: "success", style: "light", size: "md" });
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should successfully render with size', () => {
    renderIconButton({ type: "success", style: "light", size: "md" });
    expect(screen.getByRole('button')).toHaveClass('icon-btn-md');
  });

  it('should successfully render with btn style', () => {
    renderIconButton({ type: "success", style: "light", size: "md" });
    expect(screen.getByRole('button')).toHaveClass('icon-btn-success-light');
  });

  it('should successfully render with rounded', () => {
    renderIconButton({ type: "success", style: "light", size: "md", isRounded: true });
    expect(screen.getByRole('button')).toHaveClass('icon-btn-rounded');
  });

  it('should successfully render with disabled', () => {
    renderIconButton({ type: "success", style: "light", size: "md", disabled: true });
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should successfully render with aria-label', () => {
    renderIconButton({ type: "success", style: "light", size: "md", ariaLabel: "Click me" });
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Click me');
  });

  it('should successfully render with aria-expanded', () => {
    renderIconButton({ type: "success", style: "light", size: "md", ariaExpanded: true });
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
  });

  it('should successfully render with aria-controls', () => {
    renderIconButton({ type: "success", style: "light", size: "md", ariaControls: "controls" });
    expect(screen.getByRole('button')).toHaveAttribute('aria-controls', 'controls');
  });

  it('should successfully render with aria-describedby', () => {
    renderIconButton({ type: "success", style: "light", size: "md", ariaDescribedBy: "describedby" });
    expect(screen.getByRole('button')).toHaveAttribute('aria-describedby', 'describedby');
  });

  it('should successfully render with onClick', () => {
    const onClick = vi.fn();
    renderIconButton({ type: "success", style: "light", size: "md", onClick });
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should successfully render with type', () => {
    renderIconButton({ type: "success", style: "fill", size: "md" });
    expect(screen.getByRole('button')).toHaveClass('icon-btn-success');
  });
});