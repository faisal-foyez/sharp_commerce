'use client'
import { Overlay } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Drawer.css'

const DrawerOverlay = forwardRef<ElementRef<typeof Overlay>, ComponentPropsWithoutRef<typeof Overlay>>(
  ({ className, ...props }, ref) => (
    <Overlay
      className={cn(
        'dsc-drawer-overlay',
        className,
      )}
      {...props}
      ref={ref}
    />
  ),
)
DrawerOverlay.displayName = Overlay.displayName

export { DrawerOverlay }
