import React from 'react';
import '@dsc/scss/lib/Input.css';
import { cn } from '../../utils/cn';

const InputIcon = ({children}: {children: React.ReactNode}) => {
  return <div className={cn('input-icon')}>{children}</div>
}

export default InputIcon;