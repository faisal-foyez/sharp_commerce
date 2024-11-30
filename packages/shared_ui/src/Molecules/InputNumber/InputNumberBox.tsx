import React from 'react';
import '@dsc/scss/lib/InputNumber.css';
import { InputNumberContext } from './InputNumber';

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
    const value = e.target.value;
    e.target.value = value.replace(/[^0-9-+]/g, '');
    if(onChange) onChange(e);
  }


  return <input disabled={disabled} min={-100} max={100} onChange={onChangeHandler} type="number" className={`input-number-box ${className} ${isError ? 'input-number-box-error' : ''} ${disabled ? 'input-number-box-disabled' : ''}`} {...props} />

}

export default InputNumberBox;