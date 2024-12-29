import { HTMLProps, forwardRef } from "react";
import { cn } from "../../utils/cn";
import '@dsc/scss/lib/Popover.css';

const PopoverTitle = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>(({ children, className, ...props }, ref) => {
  return <h2 
  ref={ref}
  className={cn("dsc-popover-title", className)} 
  {...props} >
    {children}
  </h2>;
});

export default PopoverTitle;
