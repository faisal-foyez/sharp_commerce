'use client'
import { Children, cloneElement, forwardRef, HTMLAttributes, isValidElement, Ref } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Sidebar.css'

export interface SidebarItemProps extends HTMLAttributes<HTMLLIElement> {
  dropdown?: boolean
  asChild?: boolean
}

export const SidebarItem = forwardRef<HTMLLIElement, SidebarItemProps>(
  ({ children, className, dropdown = false, asChild, ...props }, ref: Ref<HTMLLIElement>) => {
    const childrenLength: number = Children.count(children)

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }

    return (
      <li
        {...props}
        className={cn(
          dropdown
            ? ''
            : 'dsc-sidebar-item',
          childrenLength >= 2 ? '' : 'dsc-sidebar-item-morethan-two',
          className,
        )}
        ref={ref}>
        {children}
      </li>
    )
  },
)

SidebarItem.displayName = 'SidebarItem'
