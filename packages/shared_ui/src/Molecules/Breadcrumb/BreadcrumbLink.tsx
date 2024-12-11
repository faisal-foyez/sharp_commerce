import { ComponentProps } from "react";
import { cn } from "../../utils/cn";
import '@dsc/scss/lib/Breadcrumb.css';


const BreadcrumbLink = ({children, className, ...props}:ComponentProps<'a'>) => {
  return(
    <a
      className={cn("breadcrumb-link", className)}
      {...props}
    >
      {children}
    </a>
  )
}

BreadcrumbLink.displayName = "BreadcrumbLink"

export default BreadcrumbLink;