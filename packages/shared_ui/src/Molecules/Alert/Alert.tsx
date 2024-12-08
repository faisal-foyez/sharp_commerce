import React from 'react';
import '@dsc/scss/lib/Alert.css';
import { cn } from '../../utils/cn';
import { AlertColor } from '@dsc/foundation/lib';

export const AlertContext = React.createContext({color: AlertColor.primary});

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  color ?: keyof typeof AlertColor;
  withBg?: boolean;
  dismiss?: boolean;
  className?: string;
  props?: any;
}

const Alert = ({
  children,
  color='primary',
  withBg=false,
  dismiss=false,
  className,
  ...props
}: AlertProps) => {
    return !dismiss ? 
      <div 
        className={cn(
          'alert',
          `alert-${color}`,
          withBg && 'alert-bg',
          className
        )} 
        {...props}>
        <AlertContext.Provider value={{color}}>
          {children}
        </AlertContext.Provider>
      </div> 
    : null;
};

export default Alert;