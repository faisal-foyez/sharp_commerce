'use client'
import { Header, Trigger, type AccordionTriggerProps } from '@radix-ui/react-accordion'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn';
import '@dsc/scss/lib/Accordion.css';


const AccordionAction = forwardRef<ElementRef<typeof Trigger>, ComponentPropsWithoutRef<typeof Trigger>>(
  ({ className, children, ...props }, ref) => (
    <Header className="dsc-accordion-action-header">
      <Trigger
        ref={ref}
        className={cn(
          'dsc-accordion-action',
          className,
        )}
        {...props}>
        {children}
      </Trigger>
    </Header>
  ),
)
AccordionAction.displayName = Trigger.displayName

export { AccordionAction, type AccordionTriggerProps as AccordionActionProps }