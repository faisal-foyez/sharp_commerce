'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Steps.css'

const StepsDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className={cn('dsc-steps-description', className)}>
        {children}
      </p>
    )
  },
)

StepsDescription.displayName = 'StepsDescription'

export { StepsDescription }
