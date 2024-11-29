import React, { useContext, InputHTMLAttributes } from 'react';
import '@dsc/scss/lib/Input.css';
import { InputFieldContext } from './InputField';
import { InputStyle } from '@dsc/foundation/lib';

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
  return (
    <input disabled={disabled} onChange={onChange} className={`input-field ${isError ? 'error' : ''} ${size ? size : ''} ${inputStyle} ${className}`} type="text" {...props} />
  )
};

export default Input;