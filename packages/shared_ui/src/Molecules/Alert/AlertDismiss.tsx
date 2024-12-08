import React from 'react';
import '@dsc/scss/lib/Alert.css';
import { cn } from '../../utils/cn';
import { X } from '@dsc/phosphor_icons';

interface AlertDismissProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    props?: any;
}

const AlertDismiss = ({className, ...props}: AlertDismissProps) => {
    return <div className={cn('alert-dismiss', className)} {...props}>
        <X size={20}/>
    </div>;
};

export default AlertDismiss;