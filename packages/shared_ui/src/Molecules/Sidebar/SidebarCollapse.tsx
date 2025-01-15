'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Sidebar.css'

const SidebarCollapse = forwardRef<HTMLDetailsElement, HTMLAttributes<HTMLElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <summary
        {...props}
        ref={ref}
        className={cn(
          'dsc-sidebar-collapse',
          className,
        )}>
        {children}
      </summary>
    )
  },
)

SidebarCollapse.displayName = 'SidebarCollapse'

export { SidebarCollapse }
