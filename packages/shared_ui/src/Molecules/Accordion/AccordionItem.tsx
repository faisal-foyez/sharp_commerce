'use client'
import { AccordionItemProps, Item } from '@radix-ui/react-accordion'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useAccordionContext } from './Context'
import '@dsc/scss/lib/Accordion.css';


const AccordionItem = forwardRef<ElementRef<typeof Item>, ComponentPropsWithoutRef<typeof Item>>(
  ({ className, disabled = false, ...props }, ref) => {
    const { flush } = useAccordionContext()
    return (
      <Item
        ref={ref}
        data-flush={flush}
        className={cn(
          'dsc-accordion-item',
          disabled && 'dsc-accordion-item-disabled',
          flush
            ? 'dsc-accordion-item-flush'
            : 'dsc-accordion-item-not-flush',
          className,
        )}
        {...props}
      />
    )
  },
)
AccordionItem.displayName = 'AccordionItem'

export { AccordionItem, type AccordionItemProps }