import React, { useState } from 'react';
import '@dsc/scss/lib/Notification.css';
import { cn } from '../../utils/cn';
import { X } from '@dsc/phosphor_icons';
import { NotificationPosition } from '@dsc/foundation/lib';

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  dismiss?: boolean;
  isShowClose?: boolean;
  position?: keyof typeof NotificationPosition;
  className?: string;
  props?: any;
}

const Notification = ({
  children, 
  dismiss = false,
  position = 'TOP_RIGHT',
  isShowClose = false,
  className,
  ...props
}: NotificationProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return isOpen && !dismiss ? (
    <div className={cn(
      'notification', 
      `notification-${NotificationPosition[position]}`,
      className
    )} {...props}>
      {children}
      {isShowClose && 
        <div className={cn('notification-close')} onClick={() => setIsOpen(false)}>
          <X />
        </div>
      }
    </div>
  ) : null;
};

export default Notification;                  
