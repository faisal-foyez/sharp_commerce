import React from 'react';
import '@dsc/scss/lib/Alert.css';
import { cn } from '../../utils/cn';

interface AlertTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  props?: any;
}

const AlertTitle = ({
  children,
  className,
  ...props
}: AlertTitleProps) => {
    return <div className={cn('alert-title', className)} {...props}>{children}</div>;
};

export default AlertTitle;