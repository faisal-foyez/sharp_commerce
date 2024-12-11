import { ComponentProps } from "react";
import { cn } from "../../utils/cn";
import '@dsc/scss/lib/Breadcrumb.css';

const BreadcrumbItem = ({className, children, ...props}: ComponentProps<'li'>) =>{
  return(
    <li className={cn("breadcrumb-item", className)} {...props}>{children}</li>
  )
}

BreadcrumbItem.displayName = 'BreadcrumbItem';

export default BreadcrumbItem;