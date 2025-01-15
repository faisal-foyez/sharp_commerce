'use client'
import { LiHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Sidebar.css'

const SidebarList = forwardRef<HTMLUListElement, LiHTMLAttributes<HTMLUListElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <ul ref={ref} {...props} className={cn('dsc-sidebar-list', className)}>
        {children}
      </ul>
    )
  },
)

SidebarList.displayName = 'SidebarList'

export { SidebarList }
