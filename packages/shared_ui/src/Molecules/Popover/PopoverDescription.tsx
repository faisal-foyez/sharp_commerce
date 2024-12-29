import { HTMLProps, forwardRef } from "react";
import { cn } from "../../utils/cn";
import '@dsc/scss/lib/Popover.css';

const PopoverDescription = forwardRef<HTMLParagraphElement, HTMLProps<HTMLParagraphElement>>(({ children, className, ...props }, ref) => {
  return <p 
  ref={ref}
  className={cn("dsc-popover-description", className)} 
  {...props} >
    {children}
  </p>;
});

export default PopoverDescription;
