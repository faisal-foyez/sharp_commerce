import React from 'react';
import { cn } from '../../utils/cn';

interface NotificationContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
  className?: string,
  props?: any
}

const NotificationContent = ({
  children,
  className,
  ...props
}: NotificationContentProps) => {
  return <div className={cn('notification-content', className)} {...props}>{children}</div>;
};

export default NotificationContent;                  
