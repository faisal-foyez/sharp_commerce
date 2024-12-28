'use client'
import { Arrow } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Dropdown.css'

const DropdownArrow = forwardRef<ElementRef<typeof Arrow>, ComponentPropsWithoutRef<typeof Arrow>>(
  ({ className, ...props }, ref) => (
    <Arrow
      ref={ref}
      height={12}
      width={20}
      accumulate="sum"
      className={cn('dsc-dropdown-arrow', className)}
      {...props}
    />
  ),
)
DropdownArrow.displayName = 'DropdownArrow'

export { DropdownArrow }

export type DropdownArrowProps = ComponentPropsWithoutRef<typeof DropdownArrow>
