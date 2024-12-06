import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";
import { CheckboxSize, CheckboxColor, CheckboxVariant } from '@dsc/foundation/lib';
import '@testing-library/jest-dom';

describe('Checkbox', () => {
  const renderCheckbox = (props = {}) => render(<Checkbox {...props} />);

  it('should render correctly', () => {
    renderCheckbox();
    expect(screen.getByTestId('checkbox-container-testid')).toBeInTheDocument();
  });

  it.each(Object.keys(CheckboxSize))("should render with size %s", (size) => {
    renderCheckbox({ size });
    expect(screen.getByTestId("checkbox-container-testid")).toHaveClass(`checkbox-container-${size}`);
  });

  it.each(Object.keys(CheckboxColor))('should render with color %s', (color) => {
    renderCheckbox({ color: color as keyof typeof CheckboxColor });
    expect(screen.getByTestId('checkbox-container-testid')).toHaveClass(`checkbox-container-${color}`);
  });

  it.each(Object.keys(CheckboxVariant))('should render with variant %s', (variant) => {
    renderCheckbox({ variant: variant as keyof typeof CheckboxVariant });
    expect(screen.getByTestId('checkbox-container-testid')).toHaveClass(`checkbox-container-${variant}`);
  });

  it('should render with disabled', () => {
    renderCheckbox({ disabled: true });
    expect(screen.getByTestId('checkbox-container-testid')).toHaveClass(`checkbox-container-disabled`);
  });

  it('should be checked when clicked', () => {
    renderCheckbox({ checked: false });
    fireEvent.click(screen.getByTestId('checkbox-container-testid'));
    expect(screen.getByTestId('checkbox-container-testid')).toHaveClass('checkbox-container-checked');
  });

  it('should not be checked when clicked if disabled', () => {
    renderCheckbox({ checked: false, disabled: true, 'data-testid': 'checkbox-input-testid' });
    fireEvent.click(screen.getByTestId('checkbox-input-testid'));
    expect(screen.getByTestId('checkbox-container-testid')).not.toHaveClass('checkbox-container-checked');
    expect(screen.getByTestId('checkbox-input-testid')).toBeDisabled();
  });
});