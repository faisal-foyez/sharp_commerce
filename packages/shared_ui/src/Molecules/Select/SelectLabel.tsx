'use client'
import { Label } from '@radix-ui/react-select'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Select.css'


const SelectLabel = forwardRef<ElementRef<typeof Label>, ComponentPropsWithoutRef<typeof Label>>(
  ({ className, ...props }, ref) => (
    <Label
      ref={ref}
      className={cn('dsc-select-label', className)}
      {...props}
    />
  ),
)
SelectLabel.displayName = Label.displayName

export { SelectLabel }
