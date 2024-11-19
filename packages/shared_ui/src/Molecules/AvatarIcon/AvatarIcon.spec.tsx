import {render, screen} from '@testing-library/react';
import AvatarIcon from './AvatarIcon';
import '@testing-library/jest-dom';
import { AvatarIconSize, AvatarIconColor, AvatarIconBackground } from 'packages/foundation/lib/AvatarIcon';

describe('AvatarIcon', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<AvatarIcon data-testid="avatar-icon" size="xlarge" color="yellow" background="withbackground"/>);
    expect(screen.getByTestId('avatar-icon')).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });

  it.each([
    ['xsmall'],
    ['small'],
    ['medium'],
    ['large'],
    ['xlarge'],
  ])('should render successfully with size %s', (size) => {
    render(<AvatarIcon data-testid="avatar-icon" size={size as keyof typeof AvatarIconSize} color="yellow" background="withbackground" />);
    expect(screen.getByTestId('avatar-icon')).toHaveClass(`avatar-icon-${size}`);
  });

  it.each([
    ['yellow'],
    ['pink'],
    ['gray'],
    ['green'],
    ['red'],
    ['fuchsia'],
    ['purple'],
  ])('should render successfully with color %s', (color) => {
    render(<AvatarIcon data-testid="avatar-icon" size="medium" color={color as keyof typeof AvatarIconColor} background="withbackground" />);
    expect(screen.getByTestId('avatar-icon')).toHaveClass(`avatar-icon-${color}`);
  });

  it.each([
    ['withbackground'],
    ['withoutbackground'],
  ])('should render successfully with background %s', (background) => {
    render(<AvatarIcon data-testid="avatar-icon" size="medium" color="yellow" background={background as keyof typeof AvatarIconBackground} />);
    expect(screen.getByTestId('avatar-icon')).toHaveClass(`avatar-icon-${background}`);
  });
});
