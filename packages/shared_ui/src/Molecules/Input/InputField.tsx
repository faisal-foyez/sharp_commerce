import React from 'react';
import '@dsc/scss/lib/Input.css';
import { InputSize } from '@dsc/foundation/lib';

interface InputFieldProps {
  children: React.ReactNode;
  isError?: boolean;
  disabled?: boolean;
  size?: keyof typeof InputSize;
  className?: string;
  props?: any;
}

export const InputFieldContext = React.createContext({isError:false, disabled: false, size:'medium'});

const InputField = ({children, isError, disabled, size, className, ...props}: InputFieldProps) => {
  // const childrenWithNames = React.Children.map(children, (child) => {
  //   // @ts-ignore
  //   return {name: child?.type.name, child};
  // });
  // const childrenWithNames = React.Children.toArray(children);
  // //@ts-ignore
  // const hasInput = childrenWithNames?.some(child => child?.type?.name === 'Input');
  // //@ts-ignore
  // const hasInputIcon = childrenWithNames?.some(child => child?.type?.name === 'InputIcon');

  // const content = hasInput && hasInputIcon ? (
  //   <div className='input-icon-container'>
  //     {childrenWithNames?.filter(({ name }) => name === 'Input' || name === 'InputIcon').map(({ child }) => child)}
  //   </div>
  // ) : (
  //   children
  // );
  return (
    <InputFieldContext.Provider value={{isError: isError ?? false, disabled: disabled ?? false, size: size ?? 'medium'}}>
      <div className={`input-container ${disabled ? 'disabled' : ''} ${className} `} {...props}>
        {children}
      </div>
    </InputFieldContext.Provider>
  );
}

export default InputField;