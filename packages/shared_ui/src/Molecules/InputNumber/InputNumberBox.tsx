import React from 'react';
import '@dsc/scss/lib/InputNumber.css';
import { InputNumberContext } from './InputNumber';
import { cn } from '../../utils/cn';

interface InputNumberBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: number;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNumberBox = ({
  className='', 
  onChange, 
  ...props
}: InputNumberBoxProps) => {
  const {isError, disabled} = React.useContext(InputNumberContext);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(disabled || e.target.disabled)  return;
    const value = e.target.value;
    e.target.value = value.replace(/[^0-9-+]/g, '');
    if(onChange) onChange(e);
  }


  return <input 
    disabled={disabled} 
    onChange={onChangeHandler} 
    type="number" 
    className={cn(
      'input-number-box', 
      isError && 'input-number-box-error', 
      disabled && 'input-number-box-disabled',
      className
    )} 
    {...props} 
  />
}

export default InputNumberBox;