import { ComponentProps } from 'react';
import { cn } from '../../utils/cn';
import '@dsc/scss/lib/Breadcrumb.css';
import { CaretRight } from '@dsc/phosphor_icons';


const BreadcrumbDivider = ({ children, className, ...props }: ComponentProps<'li'>) => {
  return <li className={cn('breadcrumb-divider', className)} {...props}>
    {children ?? 
      <CaretRight weight='bold'/>
    }
  </li>;
};

BreadcrumbDivider.displayName = 'BreadcrumbDivider';

export default BreadcrumbDivider;
