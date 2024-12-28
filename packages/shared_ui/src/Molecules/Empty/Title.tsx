'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Empty.css';

export interface EmptyTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean
}

const EmptyTitle = forwardRef<HTMLParagraphElement, EmptyTitleProps>(
  ({ children, asChild, className, ...props }, ref) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }
    return (
      <h1 ref={ref} className={cn('dsc-empty-title', className)} {...props}>
        {children}
      </h1>
    )
  },
)
EmptyTitle.displayName = 'EmptyTitle'

export { EmptyTitle }
