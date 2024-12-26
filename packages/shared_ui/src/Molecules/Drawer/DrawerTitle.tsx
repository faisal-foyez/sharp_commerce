'use client'
import { Title } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Drawer.css'

const DrawerTitle = forwardRef<ElementRef<typeof Title>, ComponentPropsWithoutRef<typeof Title>>(
  ({ className, ...props }, ref) => (
    <Title ref={ref} className={cn('dsc-drawer-title', className)} {...props} />
  ),
)
DrawerTitle.displayName = Title.displayName

export { DrawerTitle }
