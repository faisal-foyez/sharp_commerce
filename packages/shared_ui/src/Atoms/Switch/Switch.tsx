'use client'
import { Root, Thumb } from '@radix-ui/react-switch'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Switch.css'

type ComponentProps = ComponentPropsWithoutRef<typeof Root> & {
  thumbClassName?: string
  variant?: 'icon' | 'default'
}

const Switch = forwardRef<ElementRef<typeof Root>, ComponentProps>(
  ({ className, variant = 'default', thumbClassName, ...props }, ref) => (
    <Root
      className={cn(
        'dsc-switch',
        className,
      )}
      {...props}
      ref={ref}>
      <Thumb
        className={cn(
          'dsc-switch-thumb',
          variant === 'default' &&
            'dsc-switch-thumb-default',
          variant === 'icon' && 'dsc-switch-thumb-icon',
          thumbClassName,
        )}></Thumb>
    </Root>
  ),
)
Switch.displayName = Root.displayName

export { Switch }
