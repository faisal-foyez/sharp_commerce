import { render, screen } from '@testing-library/react';
import TagButton from './TagButton';
import { TagButtonSize, TagButtonState } from '@dsc/foundation/lib';
import '@testing-library/jest-dom';
describe('TagButton', () => {
  it('should render correctly', () => {
    render(<TagButton />);
    expect(screen.getByTestId('tag-button-testid')).toBeInTheDocument();
  });

  it.each([
    ['medium', 'btn-tag-medium'],
    ['small', 'btn-tag-small'],
  ])('should render with correct size %s', (size, className) => {
    render(<TagButton size={size as keyof typeof TagButtonSize} />);
    expect(screen.getByTestId('tag-button-testid')).toHaveClass(className);
  });

  it.each([
    ['error', 'btn-tag-error'],
    ['normal', 'btn-tag-normal'],
    ['disabled', 'btn-tag-disabled'],
  ])('should render with correct state %s', (state, className) => {
    render(<TagButton state={state as keyof typeof TagButtonState} />);
    expect(screen.getByTestId('tag-button-testid')).toHaveClass(className);
  });

  it('should render with avatar', () => {
    render(<TagButton isShowAvatar={true} />);
    expect(screen.getByTestId('tag-button-testid').querySelector('.avatar-container')).toBeInTheDocument();
  });

  it('should render with text', () => {
    render(<TagButton label='Test Text' />);
    expect(screen.getByTestId('tag-button-testid').querySelector('span')).toHaveTextContent('Test Text');
  });

  it('should render with close icon by default', () => {
    render(<TagButton />);
    expect(screen.getByTestId('close-icon-testid')).toBeInTheDocument();
  });

  it('should not render with close icon if isShowCloseIcon is false', () => {
    render(<TagButton isShowCloseIcon={false} />);
    expect(screen.queryByTestId('close-icon-testid')).not.toBeInTheDocument();
  });
});
