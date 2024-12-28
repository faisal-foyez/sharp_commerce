'use client'
import { HTMLProps, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Empty.css';

const Empty = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, className, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={cn('dsc-empty', className)}>
      {children}
    </div>
  )
})

Empty.displayName = 'Empty'

export { Empty }
