'use client'
import { AccordionMultipleProps, AccordionSingleProps, Root } from '@radix-ui/react-accordion'
import { FC } from 'react'
import { cn } from '../../utils/cn'
import { AccordionContext } from './Context'
import '@dsc/scss/lib/Accordion.css';

export type AccordionProps = AccordionMultipleProps | AccordionSingleProps

type AccordionCustomProps = {
  flush?: boolean
  type?: 'single' | 'multiple'
}

const Accordion: FC<AccordionProps & AccordionCustomProps> = ({
  className,
  children,
  disabled = false,
  flush,
  ...props
}) => {
  return (
    <Root
      className={cn(
        'dsc-accordion',
        disabled && 'dsc-accordion-disabled',
        flush ? 'dsc-accordion-flush' : 'dsc-accordion-not-flush',
        className,
      )}
      {...props}>
      <AccordionContext.Provider value={{ flush }}>{children}</AccordionContext.Provider>
    </Root>
  )
}

export { Accordion }