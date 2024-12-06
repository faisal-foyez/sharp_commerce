import React from 'react';
import '@dsc/scss/lib/InputOTP.css';
import { InputOTPContext } from './InputOTP';
import { cn } from '../../utils/cn';

const InputOTPItem = ({index, className, ...props}: {index: number, className?: string, isError?: boolean, props?: any}) => {
  const {focusIndex, isError, maxLength, changeFocusIndex, value} = React.useContext(InputOTPContext) as {focusIndex: number, isError: boolean, maxLength: number, changeFocusIndex: (index: number) => void, value: string, inputRef: React.RefObject<HTMLInputElement>};
  
  const onClickOTPItem = () => {
    if(value.length === index || (value.length === maxLength && index === maxLength-1)) {
      changeFocusIndex(index);
    }
  }
  
  return (
    <div 
      onClick={onClickOTPItem}
      className={cn(
        'input-otp-item',
        focusIndex === index && 'focus blinking-cursor',
        isError && 'error',
        className
      )}
      {...props}
    >
      {value.slice(index, index+1)}
    </div>
  )
}

export default InputOTPItem;
