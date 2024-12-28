'use client'
import { Item } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Dropdown.css'

const DropdownItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      'dsc-dropdown-item',
      inset && 'dsc-dropdown-item-inset',
      className,
    )}
    {...props}
  />
))
DropdownItem.displayName = Item.displayName

export { DropdownItem }

export type DropdownItemProps = ComponentPropsWithoutRef<typeof DropdownItem>
