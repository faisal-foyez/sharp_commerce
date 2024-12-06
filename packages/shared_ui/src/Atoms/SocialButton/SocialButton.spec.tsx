import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SocialButton from './SocialButton';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

const renderSocialButton = (props:any) => render(<SocialButton {...props} />);

describe('SocialButton', () => {
  const platform = "Microsoft";
  const googlePlatform = "Google";
  const isLabel = true;

  it('renders the button with correct text', () => {
    renderSocialButton({ platform, theme: "light", isLabel });
    const button = screen.getByRole('button', { name: /microsoft/i });
    expect(button).toBeInTheDocument();
  });

  it('applies the correct class for light theme', () => {
    renderSocialButton({ platform, isLabel, theme: "light" });
    const button = screen.getByRole('button', { name: /microsoft/i });
    expect(button).toHaveClass('social-btn-light-microsoft');
  });

  it('applies the correct class for gray theme', () => {
    renderSocialButton({ platform, isLabel, theme: "gray" });
    const button = screen.getByRole('button', { name: /microsoft/i });
    expect(button).toHaveClass('social-btn-gray-microsoft');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    renderSocialButton({ platform, isLabel, onClick: handleClick });
    const button = screen.getByRole('button', { name: /microsoft/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with aria-label', () => {
    renderSocialButton({ platform, isLabel, ariaLabel: "Microsoft" });
    const button = screen.getByRole('button', { name: /microsoft/i });
    expect(button).toHaveAttribute('aria-label', 'Microsoft');
  });
  
  it('renders with default aria-label', () => {
    renderSocialButton({ platform, isLabel });
    const button = screen.getByRole('button', { name: /microsoft/i });
    expect(button).toHaveAttribute('aria-label', 'Sign in with Microsoft');
  });

  it('renders with text Sign in with Google', () => {
    renderSocialButton({ platform: googlePlatform, isLabel });
    const button = screen.getByRole('button', { name: /google/i });
    expect(button).toHaveTextContent(/Sign in with Google/i);
  });

  it('renders with the correct button size', () => {
    renderSocialButton({ platform: googlePlatform, isLabel, size: "lg" });
    const button = screen.getByRole('button', { name: /google/i });
    expect(button).toHaveClass('social-btn-lg');
  });

  it('renders with aria-expanded false', () => {
    renderSocialButton({ platform: googlePlatform, isLabel, ariaExpanded: false });
    const button = screen.getByRole('button', { name: /google/i });
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders with aria-expanded true', () => {
    renderSocialButton({ platform: googlePlatform, isLabel, ariaExpanded: true });
    const button = screen.getByRole('button', { name: /google/i });
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders with aria-controls', () => {
    renderSocialButton({ platform: googlePlatform, isLabel, ariaControls: "google-controls" });
    const button = screen.getByRole('button', { name: /google/i });
    expect(button).toHaveAttribute('aria-controls', 'google-controls');
  });

  it('renders with aria-describedby', () => {
    renderSocialButton({ platform: googlePlatform, isLabel, ariaDescribedBy: "google-describedby" });
    const button = screen.getByRole('button', { name: /google/i });
    expect(button).toHaveAttribute('aria-describedby', 'google-describedby');
  });
});
