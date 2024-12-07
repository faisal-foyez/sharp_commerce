import { fireEvent, render, screen } from "@testing-library/react";
import Radio from "./Radio";
import { RadioSize, RadioColor, RadioVariant } from '@dsc/foundation/lib';
import '@testing-library/jest-dom';

describe('Radio', () => {
  const renderRadio = (props = {}) => render(<Radio {...props} />);

  it('should render correctly', () => {
    renderRadio();
    expect(screen.getByTestId('radio-container-testid')).toBeInTheDocument();
  });

  it.each(Object.keys(RadioSize))("should render with size %s", (size) => {
    renderRadio({ size });
    expect(screen.getByTestId("radio-container-testid")).toHaveClass(`radio-container-${size}`);
  });

  it.each(Object.keys(RadioColor))('should render with color %s', (color) => {
    renderRadio({ color: color as keyof typeof RadioColor });
    expect(screen.getByTestId('radio-container-testid')).toHaveClass(`radio-container-${color}`);
  });

  it.each(Object.keys(RadioVariant))('should render with variant %s', (variant) => {
    renderRadio({ variant: variant as keyof typeof RadioVariant });
    expect(screen.getByTestId('radio-container-testid')).toHaveClass(`radio-container-${variant}`);
  });

  it('should render with disabled', () => {
    renderRadio({ disabled: true });
    expect(screen.getByTestId('radio-container-testid')).toHaveClass(`radio-container-disabled`);
  });

  it('should be checked when clicked', () => {
    renderRadio({ checked: false });
    fireEvent.click(screen.getByTestId('radio-container-testid'));
    expect(screen.getByTestId('radio-container-testid')).toHaveClass('radio-container-checked');
  });

  it('should not be checked when clicked if disabled', () => {
    renderRadio({ checked: false, disabled: true, 'data-testid': 'radio-input-testid' });
    fireEvent.click(screen.getByTestId('radio-input-testid'));
    expect(screen.getByTestId('radio-container-testid')).not.toHaveClass('radio-container-checked');
    expect(screen.getByTestId('radio-input-testid')).toBeDisabled();
  });
});