import React, { ButtonHTMLAttributes } from 'react';
import '@dsc/scss/lib/InputNumber.css';
import { InputNumberContext } from './InputNumber';
import { cn } from '../../utils/cn';

const InputNumberButton = ({
  children, 
  className='', 
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const {disabled} = React.useContext(InputNumberContext);
  return <button 
    disabled={disabled} 
    className={cn(
      'input-number-button', 
      className, 
      disabled && 'input-number-button-disabled'
    )} 
    {...props}
  >
    {children}
  </button>
}

export default InputNumberButton;