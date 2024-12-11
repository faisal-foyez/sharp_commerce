import { ComponentProps } from "react";
import {cn} from '../../utils/cn';
import '@dsc/scss/lib/Breadcrumb.css';
import { DotsThree } from '@dsc/phosphor_icons';

const BreadcrumbEllipsis = ({ className, ...props}: ComponentProps<'span'>) =>{
  return (
    <span 
    role="presentation"
    aria-hidden="true"
    className={cn('breadcrumb-ellipsis', className)}
    {...props}
    >
      <DotsThree />
    </span>
  )
}

BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

export default BreadcrumbEllipsis;