import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";
import {CheckboxSize, CheckboxColor, CheckboxVariant} from '@dsc/foundation/lib'
import '@testing-library/jest-dom';
describe('Checkbox',()=>{

  it('should render correctly', () =>{
    render(<Checkbox data-testid='checkbox-data-testid'/>);
    expect(screen.getByTestId('checkbox-data-testid')).toBeInTheDocument();
  })

  it.each(
    Object.keys(CheckboxSize)
  )("should render with size %s", (size) =>{
    //@ts-ignore
    render(<Checkbox size={size} />)
    expect(screen.getByTestId("checkbox-container-testid")).toHaveClass(`checkbox-container-${size}`)
  })

  it.each(
    Object.keys(CheckboxColor)
  )('should render with color %s', (color)=>{
    render(<Checkbox color={color as keyof typeof CheckboxColor} />)
    expect(screen.getByTestId('checkbox-container-testid')).toHaveClass(`checkbox-container-${color}`)
  })

  it.each(
    Object.keys(CheckboxVariant)
  )('should render with variant %s',(variant)=>{
    render(<Checkbox variant={variant as keyof typeof CheckboxVariant} />)
    expect(screen.getByTestId('checkbox-container-testid')).toHaveClass(`checkbox-container-${variant}`)
  })

  it('should render with disabled',()=>{
    render(<Checkbox disabled />)
    expect(screen.getByTestId('checkbox-container-testid')).toHaveClass(`checkbox-container-disabled`)
  })

  it('should be checked when clicked', () =>{
    render(<Checkbox checked={false} data-testid='checkbox-input-testid' />)
    fireEvent.click(screen.getByTestId('checkbox-input-testid'));
    expect(screen.getByTestId('checkbox-container-testid')).toHaveClass('checkbox-container-checked');
  })

  it('should not be checked when clicked if disabled', () =>{
    render(<Checkbox checked={false} disabled data-testid='checkbox-input-testid' />)
    fireEvent.click(screen.getByTestId('checkbox-input-testid'));
    expect(screen.getByTestId('checkbox-container-testid')).not.toHaveClass('checkbox-container-checked');
    expect(screen.getByTestId('checkbox-input-testid')).toBeDisabled();
  })
})