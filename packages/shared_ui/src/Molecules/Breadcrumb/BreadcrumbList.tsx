import { ComponentProps } from "react";
import { cn } from "../../utils/cn";
import '@dsc/scss/lib/Breadcrumb.css';

const BreadcrumbList = ({children, className, ...props}:ComponentProps<'ol'>) =>{
  return(
    <ol 
    className={cn("breadcrumb-list", className)}
    {...props}
    >
      {children}
    </ol>
  )
}

BreadcrumbList.displayName = 'BreadcrumbList';

export default BreadcrumbList;