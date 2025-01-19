'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Steps.css'

const StepsItem = forwardRef<HTMLLIElement, HTMLAttributes<HTMLLIElement>>(({ children, className, ...props }, ref) => {
  return (
    <li className={cn('group dsc-steps-item', className)} {...props} ref={ref}>
      {children}
    </li>
  )
})

StepsItem.displayName = 'StepsItem'

export { StepsItem }
