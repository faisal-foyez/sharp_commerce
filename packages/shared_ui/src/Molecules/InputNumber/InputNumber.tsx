import React from 'react';
import '@dsc/scss/lib/InputNumber.css';

export const InputNumberContext = React.createContext({isError: false, disabled: false});

const InputNumber = (
  {
    children, 
    className='', 
    isError = false, 
    disabled = false,
    ...props
  }: {
    children?: React.ReactNode, 
    className?: string, 
    isError?: boolean, 
    disabled?: boolean,
    props?: any
  }
) => {
  return (
    <InputNumberContext.Provider value={{isError: isError, disabled: disabled}}>
      <div className={`input-number ${className} ${isError ? 'input-number-error' : ''} ${disabled ? 'input-number-disabled' : ''}`} {...props}>{children}</div>
    </InputNumberContext.Provider>
  )
}

export default InputNumber;