'use client'
import { Content, Portal, Viewport } from '@radix-ui/react-select'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { SelectScrollDownButton, SelectScrollUpButton } from './SelectScrollButton'
import '@dsc/scss/lib/Select.css'

const SelectContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ className, children, position = 'popper', ...props }, ref) => (
    <Portal>
      <Content
        ref={ref}
        className={cn(
          'dsc-select-content',
          position === 'popper' &&
            'dsc-select-content-if-popper',
          'dsc-select-content-animate',
          className,
        )}
        position={position}
        {...props}>
        <SelectScrollUpButton />
        <Viewport
          className={cn(
            'dsc-select-content-viewport',
            position === 'popper' &&
              'dsc-select-content-viewport-if-popper',
          )}>
          {children}
        </Viewport>
        <SelectScrollDownButton />
      </Content>
    </Portal>
  ),
)
SelectContent.displayName = Content.displayName

export { SelectContent }
