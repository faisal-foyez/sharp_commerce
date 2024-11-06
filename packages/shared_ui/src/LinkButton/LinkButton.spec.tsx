import { render, fireEvent } from "@testing-library/react";
import LinkButton from "./LinkButton";
import * as Icon from "@dsc/phosphor_icons";
import '@testing-library/jest-dom';
import {vi} from 'vitest';

describe('LinkButton',()=>{
  it('should render successfully',()=>{
    const {baseElement} = render(<LinkButton type="primary" size="md"/>);
    expect(baseElement).toBeTruthy();
  });

  it('should render with children',()=>{
    const {getByText} = render(<LinkButton type="primary" size="md">Order</LinkButton>)
    expect(getByText('Order')).toBeTruthy();
  })

  it('should render with left icon',()=>{
    const {getByTestId} = render(<LinkButton type="primary" size="md" LeftIcon={<Icon.Ambulance data-testid="Ambulance" />}>Left</LinkButton>)
    expect(getByTestId('Ambulance')).toBeTruthy();
  })

  it('should render with right icon',()=>{
    const {getByTestId} = render(<LinkButton type="primary" size="md" RightIcon={<Icon.Ambulance data-testid="Ambulance" />}>Right</LinkButton>)
    expect(getByTestId('Ambulance')).toBeTruthy();
  })

  it('should rende with both icon',()=>{
    const {getByTestId} = render(<LinkButton type="primary" size="md" LeftIcon={<Icon.Ambulance data-testid="left_ambulance" />} RightIcon={<Icon.Ambulance data-testid="right_ambulance" />}>Both</LinkButton>)
    expect(getByTestId('left_ambulance')).toBeTruthy();
    expect(getByTestId('right_ambulance')).toBeTruthy();
  })

  it('should render with disabled',()=>{
    const {getByRole} = render(<LinkButton type="primary" size="md" disabled>Disabled</LinkButton>)
    expect(getByRole('button')).toBeDisabled();
  })

  it('should render with aria-label',()=>{
    const {getByRole} = render(<LinkButton type="primary" size="md" ariaLabel="Click me">Click me</LinkButton>)
    expect(getByRole('button')).toHaveAttribute('aria-label','Click me');
  })

  it('should render with aria-expanded',()=>{
    const {getByRole} = render(<LinkButton type="primary" size="md" ariaExpanded={true}>Click me</LinkButton>)
    expect(getByRole('button')).toHaveAttribute('aria-expanded','true');
  })

  it('should render with aria-controls',()=>{
    const {getByRole} = render(<LinkButton type="primary" size="md" ariaControls="controls">Click me</LinkButton>)
    expect(getByRole('button')).toHaveAttribute('aria-controls','controls');
  })

  it('should render with aria-describedby',()=>{
    const {getByRole} = render(<LinkButton type="primary" size="md" ariaDescribedBy="describedbyid">Click me</LinkButton>)
    expect(getByRole('button')).toHaveAttribute('aria-describedby','describedbyid');
  })

  it('should render with onClick',()=>{
    const onClick = vi.fn();
    const {getByRole} = render(<LinkButton type="primary" size="md" onClick={onClick}>Click me</LinkButton>)
    fireEvent.click(getByRole('button'))
    expect(onClick).toHaveBeenCalled();
  })

  it('should render with type', ()=>{
    const {getByRole} = render(<LinkButton type="primary" size="md">Click me</LinkButton>)
    expect(getByRole('button')).toHaveAttribute('type','button');
  })
  

  it('should render with size', ()=>{
    const {getByRole} = render(<LinkButton type="primary" size="md">Click me</LinkButton>)
    expect(getByRole('button')).toHaveClass('link-btn-md');
  })
})
