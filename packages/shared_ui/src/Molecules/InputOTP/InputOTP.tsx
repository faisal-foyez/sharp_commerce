import React, {useCallback, useEffect, useRef, useState} from 'react';
import '@dsc/scss/lib/InputOTP.css';
import InputOTPItem from './InputOTPItem';

// @ts-ignore
export const InputOTPContext = React.createContext<{ focusIndex: number, isError:boolean, maxLength: number, changeFocusIndex: (index: number) => void, value: string, inputRef: React.RefObject<HTMLInputElement>}>({ focusIndex: 0, isError: false, maxLength: 0, changeFocusIndex: (index: number) => {}, value: '', inputRef: null });

const InputOTP = ({ 
  children, 
  isError = false,
  onChange,
  className,
  ...props
}: { 
    children: React.ReactNode, 
    onChange: (value: string) => void,
    isError?: boolean,
    className?: string,
    props?: any
  }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const [focusIndex, setFocusIndex] = useState(0);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) {
        e.target.value = value.replace(/[^0-9]/g, '');
    }
    if(e.target.value.length === maxLength) {
      setFocusIndex(maxLength - 1);
    }else{
      setFocusIndex(e.target.value.length > maxLength ? maxLength - 1 : e.target.value.length);
    }
    const updatedValue = e.target.value.length > maxLength ? e.target.value.slice(0, maxLength-1)+e.target.value[maxLength] : e.target.value;
    setValue(updatedValue);
    onChange(updatedValue);
  }

  const changeFocusIndex = useCallback((index: number) => {
    setFocusIndex(index);
    inputRef.current?.focus();
  }, [inputRef]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      setFocusIndex(0);
    }
  }, [inputRef]);

  let maxLength = 0;
  React.Children.forEach(children, (child) => {
    // @ts-ignore
    if(child?.type?.name === 'InputOTPGroup') {
      // @ts-ignore
      maxLength += child?.props?.children?.length || 0;
    }
  });

  return (
    <div className={`input-otp-container ${className}`} {...props}>
      <input type="text" 
        onBlur={() => {setFocusIndex(-1)}} 
        maxLength={maxLength+1} 
        value={value} 
        onChange={onChangeInput} 
        style={{position: 'absolute', top: -10, left: 0, opacity:0, height: 0, width:0 }} 
        className="input-otp" 
        ref={inputRef} />
      
      <InputOTPContext.Provider value={{focusIndex, isError, maxLength, changeFocusIndex, value, inputRef}}>
        {children}
      </InputOTPContext.Provider>
      
      
    </div>
  )
}

export default InputOTP;
