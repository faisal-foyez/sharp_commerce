'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Card.css'

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        {...props}
        className={cn(
          'dsc-card',
          className,
        )}
        ref={ref}>
        {children}
      </div>
    )
  },
)

Card.displayName = 'Card'

export { Card }
