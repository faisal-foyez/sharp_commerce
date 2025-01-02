'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Card.css'

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean
}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, asChild, className, ...props }, ref) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }
    return (
      <p ref={ref} className={cn('dsc-card-description', className)} {...props}>
        {children}
      </p>
    )
  },
)
CardDescription.displayName = 'CardDescription'

export { CardDescription }
