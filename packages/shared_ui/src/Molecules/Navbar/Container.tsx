'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Navbar.css';

const NavbarContainer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('dsc-navbar-container', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

NavbarContainer.displayName = 'NavbarContainer'

export { NavbarContainer }
