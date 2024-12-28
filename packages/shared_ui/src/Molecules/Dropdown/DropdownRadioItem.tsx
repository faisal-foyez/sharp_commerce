'use client'
import { ItemIndicator, RadioItem } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Dropdown.css'

const DropdownRadioItem = forwardRef<ElementRef<typeof RadioItem>, ComponentPropsWithoutRef<typeof RadioItem>>(
  ({ className, children, ...props }, ref) => (
    <RadioItem
      ref={ref}
      className={cn(
        'dsc-dropdown-radio-item',
        className,
      )}
      {...props}>
      <span className="dsc-dropdown-radio-item-indicator-container">
        <ItemIndicator>
          <svg xmlns="http://www.w3.org/2000/svg" className="dsc-dropdown-radio-item-indicator-icon" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"></path>
          </svg>
        </ItemIndicator>
      </span>
      {children}
    </RadioItem>
  ),
)
DropdownRadioItem.displayName = RadioItem.displayName

export { DropdownRadioItem }

export type DropdownRadioItemProps = ComponentPropsWithoutRef<typeof DropdownRadioItem>
