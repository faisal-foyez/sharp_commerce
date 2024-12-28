'use client'
import { SubTrigger } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Dropdown.css'

const DropdownSubAction = forwardRef<
  ElementRef<typeof SubTrigger>,
  ComponentPropsWithoutRef<typeof SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <SubTrigger
    ref={ref}
    className={cn(
      'dsc-dropdown-sub-action',
      inset && 'dsc-dropdown-sub-action-inset',
      className,
    )}
    {...props}>
    {children}
    <svg xmlns="http://www.w3.org/2000/svg" className="dsc-dropdown-sub-action-icon" viewBox="0 0 256 256">
      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
    </svg>
  </SubTrigger>
))

DropdownSubAction.displayName = SubTrigger.displayName

export { DropdownSubAction }

export type DropdownSubActionProps = ComponentPropsWithoutRef<typeof DropdownSubAction>
