import React from 'react';
import '@dsc/scss/lib/Notification.css';
import { cn } from '../../utils/cn';

interface NotificationTitleProps extends React.HTMLAttributes<HTMLDivElement> { 
  children: React.ReactNode,
  className?: string,
  props?: any
}

const NotificationTitle = ({
  children,
  className,
  ...props
}: NotificationTitleProps) => {
  return <div className={cn('notification-title', className)} {...props}>{children}</div>;
};

export default NotificationTitle;                  