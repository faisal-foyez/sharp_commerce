'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Steps.css'
const Steps = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <ul className={cn('dsc-steps', className)} {...props} ref={ref}>
        {children}
      </ul>
    )
  },
)

Steps.displayName = 'Steps'

export { Steps }
