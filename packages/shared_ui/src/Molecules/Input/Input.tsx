import React, { useContext, InputHTMLAttributes } from 'react';
import '@dsc/scss/lib/Input.css';
import { InputFieldContext } from './InputField';
import { InputStyle } from '@dsc/foundation/lib';
import { cn } from '../../utils/cn';

type InputStyle = keyof typeof InputStyle;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputStyle?: InputStyle;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  props?: any;
}

const Input = ({
  onChange, 
  inputStyle='round',
  className, 
  ...props
}: InputProps) => {
  const {isError, disabled, size} = useContext(InputFieldContext);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(disabled || e.target.disabled)  return;
    if(onChange) onChange(e);
  }

  return (
    <input 
      disabled={disabled} 
      onChange={onChangeHandler} 
      className={cn(
        'input-field', 
        isError && 'error', 
        size && size, 
        inputStyle, 
        className
      )} 
      type="text" 
      {...props} 
    />
  )
};

export default Input;