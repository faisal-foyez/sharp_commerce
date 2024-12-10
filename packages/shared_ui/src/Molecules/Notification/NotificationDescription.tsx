import React from 'react';
import '@dsc/scss/lib/Notification.css';
import { cn } from '../../utils/cn';

interface NotificationDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
  className?: string,
  props?: any
}

const NotificationDescription  = ({
  children,
  className,
  ...props
}: NotificationDescriptionProps) => {
  return <div className={cn('notification-description', className)} {...props}>{children}</div>;
};

export default NotificationDescription;                  