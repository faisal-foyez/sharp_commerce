'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Sidebar.css'

const SidebarFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        {...props}
        className={cn('dsc-sidebar-footer', className)}
        ref={ref}>
        {children}
      </div>
    )
  },
)

SidebarFooter.displayName = 'SidebarFooter'

export { SidebarFooter }
