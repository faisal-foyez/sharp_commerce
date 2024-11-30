import React, { ButtonHTMLAttributes } from 'react';
import '@dsc/scss/lib/InputNumber.css';
import { InputNumberContext } from './InputNumber';
const InputNumberButton = ({
  children, 
  className='', 
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const {disabled} = React.useContext(InputNumberContext);
  return <button className={`input-number-button ${className} ${disabled ? 'input-number-button-disabled' : ''}`} {...props}>{children}</button>
}

export default InputNumberButton;