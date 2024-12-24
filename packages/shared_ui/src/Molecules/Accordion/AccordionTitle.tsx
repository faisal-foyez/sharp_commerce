'use client'
import { forwardRef, HTMLAttributes, Ref } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Accordion.css';


const AccordionTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLParagraphElement>) => {
    return (
      <p
        {...props}
        className={cn('dsc-accordion-title', className)}
        ref={ref}>
        {children}
      </p>
    )
  },
)

AccordionTitle.displayName = 'AccordionTitle'

export { AccordionTitle }