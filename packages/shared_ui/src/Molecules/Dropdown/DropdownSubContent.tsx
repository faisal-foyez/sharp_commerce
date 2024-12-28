'use client'
import { Portal, SubContent } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Dropdown.css'

const DropdownSubContent = forwardRef<ElementRef<typeof SubContent>, ComponentPropsWithoutRef<typeof SubContent>>(
  ({ className, ...props }, ref) => (
    <Portal>
      <SubContent
        ref={ref}
        className={cn(
          'dsc-dropdown-sub-content',
          className,
        )}
        {...props}
      />
    </Portal>
  ),
)
DropdownSubContent.displayName = SubContent.displayName

export { DropdownSubContent }

export type DropdownSubContentProps = ComponentPropsWithoutRef<typeof DropdownSubContent>
