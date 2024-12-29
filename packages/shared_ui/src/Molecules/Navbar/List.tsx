'use client'
import { LiHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Navbar.css';

const NavbarList = forwardRef<HTMLOListElement, LiHTMLAttributes<HTMLUListElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <ul ref={ref} {...props} className={cn('dsc-navbar-list', className)}>
        {children}
      </ul>
    )
  },
)
NavbarList.displayName = 'NavbarList'

export { NavbarList }
