import {ComponentProps} from 'react';
import { cn } from '../../utils/cn';
import '@dsc/scss/lib/Breadcrumb.css';


const Breadcrumb = ({ children, className, ...props }: ComponentProps<'nav'>) => {
  return <nav aria-label="breadcrumb" className={cn('breadcrumb', className)} {...props}>{children}</nav>;
};

export default Breadcrumb;
