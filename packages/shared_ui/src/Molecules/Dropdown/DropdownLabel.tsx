'use client'
import { Label } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Dropdown.css'

const DropdownLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn(
      'dsc-dropdown-label',
      inset && 'dsc-dropdown-label-inset',
      className,
    )}
    {...props}
  />
))
DropdownLabel.displayName = Label.displayName

export { DropdownLabel }

export type DropdownLabelProps = ComponentPropsWithoutRef<typeof DropdownLabel>
