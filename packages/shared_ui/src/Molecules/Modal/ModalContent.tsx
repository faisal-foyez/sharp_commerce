'use client'
import { Close, Content, Portal } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useModalContext } from './Context'
import { ModalOverlay } from './ModalOverlay'
import '@dsc/scss/lib/Modal.css';

export interface ModalContentProps extends ComponentPropsWithoutRef<typeof Content> {
  closeIconStyle?: string
}

const ModalContent = forwardRef<ElementRef<typeof Content>, ModalContentProps>(
  ({ className, children, closeIconStyle, ...props }, ref) => {
    const { showCloseIcon } = useModalContext()
    return (
      <Portal>
        <ModalOverlay />
        <Content
          ref={ref}
          className={cn(
            'dsc-modal-content',
            className,
          )}
          {...props}>
          {children}
          <Close
            className={cn(
              'dsc-modal-content-close',
              !showCloseIcon && 'dsc-modal-content-close-hidden',
              closeIconStyle,
            )}>
            <svg xmlns="http://www.w3.org/2000/svg" className="dsc-modal-content-close-icon" viewBox="0 0 256 256">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
            <span className="dsc-modal-content-close-sr-only">Close</span>
          </Close>
        </Content>
      </Portal>
    )
  },
)

ModalContent.displayName = Content.displayName

export { ModalContent }
