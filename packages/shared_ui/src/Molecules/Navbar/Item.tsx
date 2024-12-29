'use client'
import { cloneElement, forwardRef, HTMLAttributes, isValidElement, Ref } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Navbar.css';

export interface NavbarItemProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean
  asChild?: boolean
}

export const NavbarItem = forwardRef<HTMLDivElement, NavbarItemProps>(
  ({ children, className, active, asChild, ...props }, ref: Ref<HTMLDivElement>) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }

    return (
      <div
        {...props}
        className={cn(
          'dsc-navbar-item',
          active
            ? 'dsc-navbar-item-active'
            : 'dsc-navbar-item-not-active',
          className,
        )}
        ref={ref}>
        {children}
      </div>
    )
  },
)

NavbarItem.displayName = 'NavbarItem'
