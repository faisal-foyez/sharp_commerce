'use client'
import { BaseHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Sidebar.css'

const Sidebar = forwardRef<HTMLBaseElement, BaseHTMLAttributes<HTMLBaseElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <aside
        {...props}
        ref={ref}
        className={cn(
          'dsc-sidebar',
          className,
        )}>
        {children}
      </aside>
    )
  },
)

Sidebar.displayName = 'Sidebar'

export { Sidebar }
