'use client'
import { LiHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Sidebar.css'

const SidebarDropdownList = forwardRef<HTMLUListElement, LiHTMLAttributes<HTMLUListElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <ul ref={ref} {...props} className={cn('dsc-sidebar-dropdown-list', className)}>
        {children}
      </ul>
    )
  },
)

SidebarDropdownList.displayName = 'SidebarDropdownList'

export { SidebarDropdownList }
