import React from 'react';
import '@dsc/scss/lib/Alert.css';
import { cn } from '../../utils/cn';
import { ArrowUpRight } from '@dsc/phosphor_icons';

interface AlertLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  props?: any;
}

const AlertLink = ({
  href,
  children,
  className,
  ...props
}: AlertLinkProps) => {
    return <a className={cn('alert-link', className)} href={href} {...props}>
        {children}
        <ArrowUpRight size={20}/>
    </a>;
};

export default AlertLink;