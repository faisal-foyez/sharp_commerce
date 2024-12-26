'use client'
import { Close, Content, Portal } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useDrawerContext } from './Context'
import { DrawerOverlay } from './DrawerOverlay'
import '@dsc/scss/lib/Drawer.css'

export interface DrawerPositionProps {
  base: string
  position: {
    left: string
    right: string
    top: string
    bottom: string
  }
}

export interface DrawerContentProps extends ComponentPropsWithoutRef<typeof Content> {
  position?: keyof DrawerPositionProps['position']
  closeIconStyle?: string
}

const contentPosition: DrawerPositionProps = {
  base: 'dsc-drawer-content-base',
  position: {
    top: 'dsc-drawer-content-position-top',
    bottom: 'dsc-drawer-content-position-bottom',
    left: 'dsc-drawer-content-position-left',
    right: 'dsc-drawer-content-position-right',
  },
}

const DrawerContent = forwardRef<ElementRef<typeof Content>, DrawerContentProps>(
  ({ className, children, position = 'bottom', closeIconStyle, ...props }, ref) => {
    const { showCloseIcon } = useDrawerContext()
    return (
      <Portal>
        <DrawerOverlay />
        <Content
          ref={ref}
          className={cn(contentPosition.base, contentPosition.position[position], className)}
          {...props}>
          {children}
          <Close
            className={cn(
              'dsc-drawer-content-close-button',
              !showCloseIcon && 'hidden',
              closeIconStyle,
            )}>
            <svg xmlns="http://www.w3.org/2000/svg" className="dsc-drawer-content-close-button-icon" viewBox="0 0 256 256">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
            <span className="dsc-drawer-content-close-sr-only">Close</span>
          </Close>
        </Content>
      </Portal>
    )
  },
)
DrawerContent.displayName = Content.displayName

export { DrawerContent }
