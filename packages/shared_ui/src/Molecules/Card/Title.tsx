'use client'
import { HTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Card.css'

export interface CardTitleProps extends HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean
}

const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ children, asChild, className, ...props }, ref) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }
    return (
      <p ref={ref} className={cn('dsc-card-title', className)} {...props}>
        {children}
      </p>
    )
  },
)

CardTitle.displayName = 'CardTitle'

export { CardTitle }
