import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SocialButton from './SocialButton';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
describe('SocialButton', () => {
  it('renders the button with correct text', () => {
    render(<SocialButton platform="Microsoft" theme="light" isLabel={true} />);
    const button = screen.getByRole('button', { name: /microsoft/i });
    expect(button).toBeInTheDocument();
  });

  it('applies the correct class for light theme', () => {
    render(<SocialButton platform="Microsoft" isLabel={true} theme="light" />);
    const button = screen.getByRole('button', { name: /microsoft/i });
    expect(button).toHaveClass('social-btn-light-microsoft');
  });

  it('applies the correct class for gray theme', () => {
    render(<SocialButton platform="Microsoft" isLabel={true} theme="gray" />);
    const button = screen.getByRole('button', { name: /microsoft/i });
    expect(button).toHaveClass('social-btn-gray-microsoft');
  });

  it('applies the correct class for light theme', () => {
    render(<SocialButton platform="Microsoft" isLabel={true} theme="light" />);
    const button = screen.getByRole('button', { name: /microsoft/i });
    expect(button).toHaveClass('social-btn-light-microsoft');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<SocialButton platform="Microsoft" isLabel={true} onClick={handleClick} />);
    const button = screen.getByRole('button', { name: /microsoft/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });


  it('renders with aria-label', () => {
    render(<SocialButton platform="Microsoft" isLabel={true} ariaLabel="Microsoft" />);
    const button = screen.getByRole('button', { name: /microsoft/i });
    expect(button).toHaveAttribute('aria-label', 'Microsoft');
  });
  
  it('renders with with default aria-label', () => {
    render(<SocialButton platform="Microsoft" isLabel={true} />);
    const button = screen.getByRole('button', { name: /microsoft/i });
    expect(button).toHaveAttribute('aria-label', 'Sign in with Microsoft');
  });

  it('renders with text Sign in with Google', () => {
    render(<SocialButton platform="Google" isLabel={true} />);
    const button = screen.getByRole('button', { name: /google/i });
    expect(button).toHaveTextContent(/Sign in with Google/i);
  });

  it('renders with the correct button size', () => {
    render(<SocialButton platform="Google" isLabel={true} size="lg" />);
    const button = screen.getByRole('button', { name: /google/i });
    expect(button).toHaveClass('social-btn-lg');
  });

  it('renders with aria-expanded false', () => {
    render(<SocialButton platform="Google" isLabel={true} ariaExpanded={false} />);
    const button = screen.getByRole('button', { name: /google/i });
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders with aria-expanded true', () => {
    render(<SocialButton platform="Google" isLabel={true} ariaExpanded={true} />);
    const button = screen.getByRole('button', { name: /google/i });
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders with aria-controls', () => {
    render(<SocialButton platform="Google" isLabel={true} ariaControls="google-controls" />);
    const button = screen.getByRole('button', { name: /google/i });
    expect(button).toHaveAttribute('aria-controls', 'google-controls');
  });

  it('renders with aria-describedby', () => {
    render(<SocialButton platform="Google" isLabel={true} ariaDescribedBy="google-describedby" />);
    const button = screen.getByRole('button', { name: /google/i });
    expect(button).toHaveAttribute('aria-describedby', 'google-describedby');
  });
});

