'use client'
import { Item, ItemIndicator, ItemText } from '@radix-ui/react-select'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Select.css'

type SelectItemProps = ComponentPropsWithoutRef<typeof Item> & {
  showCheckIcon?: boolean
}

const SelectItem = forwardRef<ElementRef<typeof Item>, SelectItemProps>(
  ({ className, children, showCheckIcon = true, ...props }, ref) => (
    <Item
      ref={ref}
      className={cn(
        'dsc-select-item',
        className,
      )}
      {...props}>
      <ItemText className="dsc-select-item-text">{children}</ItemText>
      <span
        className={cn(
          'dsc-select-item-indicator-container',
          showCheckIcon ? 'dsc-select-item-indicator-container-show' : 'dsc-select-item-indicator-container-hide',
        )}>
        <ItemIndicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dsc-select-item-indicator-icon"
            viewBox="0 0 256 256">
            <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </ItemIndicator>
      </span>
    </Item>
  ),
)
SelectItem.displayName = Item.displayName

export { SelectItem }
