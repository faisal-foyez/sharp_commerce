'use client'
import { AccordionContentProps, Content } from '@radix-ui/react-accordion'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Accordion.css';


const AccordionContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ className, children, ...props }, ref) => (
    <Content
      ref={ref}
      className="dsc-accordion-content"
      {...props}>
      <div
        className={cn('dsc-accordion-content-element', className)}>
        {children}
      </div>
    </Content>
  ),
)

AccordionContent.displayName = Content.displayName

export { AccordionContent, type AccordionContentProps }