'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Card.css'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('dsc-card-content', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

CardContent.displayName = 'CardContent'

export { CardContent }
