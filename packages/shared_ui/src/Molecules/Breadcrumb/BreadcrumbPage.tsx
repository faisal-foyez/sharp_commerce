import { ComponentProps } from "react";
import { cn } from "../../utils/cn";
import '@dsc/scss/lib/Breadcrumb.css';

const BreadcrumbPage = ({children, className, ...props}: ComponentProps<'span'>) =>{
  return (
    <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("breadcrumb-page", className)}
    {...props}
    >
      {children}
    </span>
  )
}

BreadcrumbPage.displayName = "BreadcrumbPage";

export default BreadcrumbPage;