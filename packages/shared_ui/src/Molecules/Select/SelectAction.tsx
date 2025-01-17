'use client'
import { Icon, Trigger } from '@radix-ui/react-select'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Select.css'

const SelectAction = forwardRef<ElementRef<typeof Trigger>, ComponentPropsWithoutRef<typeof Trigger>>(
  ({ className, children, ...props }, ref) => (
    <Trigger
      ref={ref}
      className={cn(
        'dsc-select-trigger',
        className,
      )}
      {...props}>
      {children}
      <Icon asChild>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="dsc-select-icon"
          viewBox="0 0 256 256">
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </Icon>
    </Trigger>
  ),
)
SelectAction.displayName = Trigger.displayName

export { SelectAction }
