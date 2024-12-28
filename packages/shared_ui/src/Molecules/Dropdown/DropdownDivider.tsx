'use client'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Dropdown.css'

const DropdownDivider = forwardRef<ElementRef<typeof Separator>, ComponentPropsWithoutRef<typeof Separator>>(
  ({ className, ...props }, ref) => (
    <Separator ref={ref} className={cn('dsc-dropdown-divider', className)} {...props} />
  ),
)
DropdownDivider.displayName = 'DropdownDivider'

export { DropdownDivider }

export type DropdownDividerProps = ComponentPropsWithoutRef<typeof DropdownDivider>
