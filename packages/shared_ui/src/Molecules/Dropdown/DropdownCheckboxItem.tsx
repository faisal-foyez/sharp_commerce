'use client'
import { CheckboxItem, ItemIndicator } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Dropdown.css'

const DropdownCheckboxItem = forwardRef<ElementRef<typeof CheckboxItem>, ComponentPropsWithoutRef<typeof CheckboxItem>>(
  ({ className, children, checked, ...props }, ref) => (
    <CheckboxItem
      ref={ref}
      className={cn(
        'dsc-dropdown-checkbox-item',
        className,
      )}
      checked={checked}
      {...props}>
      <span className="dsc-dropdown-checkbox-item-indicator-container">
        <ItemIndicator>
          <svg xmlns="http://www.w3.org/2000/svg" className="dsc-dropdown-checkbox-item-indicator-icon" viewBox="0 0 256 256">
            <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </ItemIndicator>
      </span>
      {children}
    </CheckboxItem>
  ),
)
DropdownCheckboxItem.displayName = CheckboxItem.displayName

export { DropdownCheckboxItem }

export type DropdownCheckboxItemProps = ComponentPropsWithoutRef<typeof DropdownCheckboxItem>
