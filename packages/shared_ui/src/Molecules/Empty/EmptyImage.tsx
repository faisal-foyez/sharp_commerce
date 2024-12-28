'use client'
import { forwardRef, HTMLProps } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Empty.css';

export const EmptyImage = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className={cn(className)}>
        {children}
      </div>
    )
  },
)

EmptyImage.displayName = 'EmptyImage'
