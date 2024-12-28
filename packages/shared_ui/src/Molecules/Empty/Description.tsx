'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Empty.css';

export interface EmptyDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean
}

const EmptyDescription = forwardRef<HTMLParagraphElement, EmptyDescriptionProps>(
  ({ children, asChild, className, ...props }, ref) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }
    return (
      <p
        ref={ref}
        className={cn('dsc-empty-description', className)}
        {...props}>
        {children}
      </p>
    )
  },
)
EmptyDescription.displayName = 'EmptyDescription'

export { EmptyDescription }
