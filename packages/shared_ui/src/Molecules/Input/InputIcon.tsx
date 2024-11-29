import React from 'react';
import '@dsc/scss/lib/Input.css';

const InputIcon = ({children}: {children: React.ReactNode}) => {
  return <div className='input-icon'>{children}</div>
}

export default InputIcon;