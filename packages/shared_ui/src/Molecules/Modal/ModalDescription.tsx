'use client'
import { Description } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Modal.css';


const ModalDescription = forwardRef<ElementRef<typeof Description>, ComponentPropsWithoutRef<typeof Description>>(
  ({ className, ...props }, ref) => (
    <Description
      ref={ref}
      className={cn('dsc-modal-description', className)}
      {...props}
    />
  ),
)
ModalDescription.displayName = Description.displayName

export { ModalDescription }
