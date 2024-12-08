import React from 'react';
import '@dsc/scss/lib/Alert.css';
import { cn } from '../../utils/cn';

interface AlertDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  props?: any;
}

const AlertDescription = ({
  children,
  className,
  ...props
}: AlertDescriptionProps) => {
    return <div className={cn('alert-description', className)} {...props}>{children}</div>;
};

export default AlertDescription;