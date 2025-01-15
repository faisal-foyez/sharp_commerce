'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Sidebar.css'

const SidebarBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('dsc-sidebar-body', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

SidebarBody.displayName = 'SidebarBody'

export { SidebarBody }
