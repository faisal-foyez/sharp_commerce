import { render, screen } from '@testing-library/react';
import AvatarIcon from './AvatarIcon';
import '@testing-library/jest-dom';
import { AvatarIconSize, AvatarIconColor, AvatarIconBackground } from '@dsc/foundation/lib';

describe('AvatarIcon', () => {
  const renderAvatarIcon = (props:any) => render(<AvatarIcon data-testid="avatar-icon" {...props} />);

  it('should render successfully', () => {
    const { baseElement } = renderAvatarIcon({ size: 'xlarge', color: 'yellow', background: 'withbackground' });
    expect(screen.getByTestId('avatar-icon')).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });

  it.each(Object.values(AvatarIconSize))('should render successfully with size %s', (size) => {
    renderAvatarIcon({ size, color: 'yellow', background: 'withbackground' });
    expect(screen.getByTestId('avatar-icon')).toHaveClass(`avatar-icon-${size}`);
  });

  it.each(Object.values(AvatarIconColor))('should render successfully with color %s', (color) => {
    renderAvatarIcon({ size: 'medium', color, background: 'withbackground' });
    expect(screen.getByTestId('avatar-icon')).toHaveClass(`avatar-icon-${color}`);
  });

  it.each(Object.values(AvatarIconBackground))('should render successfully with background %s', (background) => {
    renderAvatarIcon({ size: 'medium', color: 'yellow', background });
    expect(screen.getByTestId('avatar-icon')).toHaveClass(`avatar-icon-${background}`);
  });
});
