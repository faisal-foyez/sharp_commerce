'use client'
import { Separator } from '@radix-ui/react-select'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Select.css'

const SelectDivider = forwardRef<ElementRef<typeof Separator>, ComponentPropsWithoutRef<typeof Separator>>(
  ({ className, ...props }, ref) => (
    <Separator ref={ref} className={cn('dsc-select-divider', className)} {...props} />
  ),
)
SelectDivider.displayName = Separator.displayName

export { SelectDivider }
