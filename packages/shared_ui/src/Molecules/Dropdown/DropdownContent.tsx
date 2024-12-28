'use client'
import { Content, Portal } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Dropdown.css'

const DropdownContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ className, sideOffset = 4, children, ...props }, ref) => (
    <Portal>
      <Content
        onCloseAutoFocus={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          'dsc-dropdown-content',
          className,
        )}
        {...props}>
        {children}
      </Content>
    </Portal>
  ),
)
DropdownContent.displayName = Content.displayName

export { DropdownContent }

export type DropdownContentProps = ComponentPropsWithoutRef<typeof DropdownContent>
