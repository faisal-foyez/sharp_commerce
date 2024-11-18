import { fireEvent, render, screen } from "@testing-library/react";
import IconButton from "./IconButton";
import {ArrowRight} from '@dsc/phosphor_icons';
import "@testing-library/jest-dom";
import { vi } from "vitest";

describe('IconButton', () => {
  it('should successfully render', () => {
    render(<IconButton type="success" style="light" size="md" ><ArrowRight data-testid="icon"/></IconButton>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should successfully render with children', () => {
    render(<IconButton type="success" style="light" size="md" ><ArrowRight data-testid="icon"/></IconButton>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should successfully render with size', () => {
    render(<IconButton type="success" style="light" size="md" ><ArrowRight data-testid="icon"/></IconButton>);
    expect(screen.getByRole('button')).toHaveClass('icon-btn-md');
  });

  it('should successfully render with btn style', () => {
    render(<IconButton type="success" style="light" size="md" ><ArrowRight data-testid="icon"/></IconButton>);
    expect(screen.getByRole('button')).toHaveClass('icon-btn-success-light');
  });

  it('should successfully render with rounded', () => {
    render(<IconButton type="success" style="light" size="md" isRounded={true}><ArrowRight data-testid="icon"/></IconButton>);
    expect(screen.getByRole('button')).toHaveClass('icon-btn-rounded');
  });

  it('should successfully render with disabled', () => {
    render(<IconButton type="success" style="light" size="md" disabled={true}><ArrowRight data-testid="icon"/></IconButton>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should successfully render with aria-label', () => {
    render(<IconButton type="success" style="light" size="md" ariaLabel="Click me"><ArrowRight data-testid="icon"/></IconButton>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Click me');
  });

  it('should successfully render with aria-expanded', () => {
    render(<IconButton type="success" style="light" size="md" ariaExpanded={true}><ArrowRight data-testid="icon"/></IconButton>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
  });

  it('should successfully render with aria-controls', () => {
    render(<IconButton type="success" style="light" size="md" ariaControls="controls"><ArrowRight data-testid="icon"/></IconButton>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-controls', 'controls');
  });

  it('should successfully render with aria-describedby', () => {
    render(<IconButton type="success" style="light" size="md" ariaDescribedBy="describedby"><ArrowRight data-testid="icon"/></IconButton>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-describedby', 'describedby');
  });

  it('should successfully render with onClick', () => {
    const onClick = vi.fn();
    render(<IconButton type="success" style="light" size="md" onClick={onClick}><ArrowRight data-testid="icon"/></IconButton>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should successfully render with type', () => {
    render(<IconButton type="success" style="fill" size="md" ><ArrowRight data-testid="icon"/></IconButton>);
    expect(screen.getByRole('button')).toHaveClass('icon-btn-success');
  });
});