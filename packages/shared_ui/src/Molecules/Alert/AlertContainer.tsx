import React from 'react';
import { cn } from '../../utils/cn';
import '@dsc/scss/lib/Alert.css';

interface AlertContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  props?: any;
}

const AlertContainer = ({
  children,
  className,
  ...props
}: AlertContainerProps) => {
    return <div className={cn('alert-container', className)} {...props}>{children}</div>;
};

export default AlertContainer;