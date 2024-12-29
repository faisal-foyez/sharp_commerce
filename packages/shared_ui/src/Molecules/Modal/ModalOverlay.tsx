'use client'
import { Overlay } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Modal.css';

const ModalOverlay = forwardRef<ElementRef<typeof Overlay>, ComponentPropsWithoutRef<typeof Overlay>>(
  ({ className, ...props }, ref) => (
    <Overlay
      ref={ref}
      className={cn(
        'dsc-modal-overlay',
        className,
      )}
      {...props}
    />
  ),
)
ModalOverlay.displayName = Overlay.displayName

export { ModalOverlay }
