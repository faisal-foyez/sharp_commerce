import React, {useContext} from 'react';
import '@dsc/scss/lib/Alert.css';
import { cn } from '../../utils/cn';
import { Info,  CheckCircle, XCircle} from '@dsc/phosphor_icons';
import { AlertContext } from './Alert';

interface AlertIconProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    props?: any;
}

const AlertIcon = ({className, ...props}: AlertIconProps) => {
    const {color} = useContext(AlertContext);
    return <div className={cn('alert-icon', className)} {...props}>
        {color === 'primary' && <Info weight='fill' size={20}/>}
        {color === 'secondary' && <Info weight='fill' size={20}/>}
        {color === 'success' && <CheckCircle weight='fill' size={20}/>}
        {color === 'error' && <XCircle weight='fill' size={20}/>}
        {color === 'warning' && <Info weight='fill' size={20}/>}
    </div>;
};

export default AlertIcon;