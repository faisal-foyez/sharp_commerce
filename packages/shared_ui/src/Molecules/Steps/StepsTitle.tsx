'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Steps.css'

const StepsTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className={cn('dsc-steps-title', className)}>
        {children}
      </p>
    )
  },
)

StepsTitle.displayName = 'StepsTitle'

export { StepsTitle }
