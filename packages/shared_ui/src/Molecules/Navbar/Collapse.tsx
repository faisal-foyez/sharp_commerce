'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useNavbarContext } from './Context'
import '@dsc/scss/lib/Navbar.css';

const NavbarCollapse = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    const { open } = useNavbarContext()

    if (!open) {
      return null
    }

    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'dsc-navbar-collapse',
          className,
        )}>
        {children}
      </div>
    )
  },
)
NavbarCollapse.displayName = 'NavbarCollapse'

export { NavbarCollapse }
