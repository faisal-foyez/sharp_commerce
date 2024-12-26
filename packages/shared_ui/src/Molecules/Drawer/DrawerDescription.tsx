'use client'
import { Description } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Drawer.css'

const DrawerDescription = forwardRef<ElementRef<typeof Description>, ComponentPropsWithoutRef<typeof Description>>(
  ({ className, ...props }, ref) => (
    <Description ref={ref} className={cn('dsc-drawer-description', className)} {...props} />
  ),
)
DrawerDescription.displayName = Description.displayName

export { DrawerDescription }
