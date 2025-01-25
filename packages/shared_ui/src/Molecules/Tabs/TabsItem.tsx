'use client'
import { Trigger } from '@radix-ui/react-tabs'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useTabsContext } from './TabsContext'
import '@dsc/scss/lib/Tabs.css'

const TabsItem = forwardRef<ElementRef<typeof Trigger>, ComponentPropsWithoutRef<typeof Trigger>>(
  ({ className, ...props }, ref) => {
    const { variant } = useTabsContext()
    return (
      <Trigger
        ref={ref}
        className={cn(
          'dsc-tabs-item',
          variant === 'default' &&
            'dsc-tabs-item-default',
          variant === 'underline' &&
            'dsc-tabs-item-underline',
          className,
        )}
        {...props}
      />
    )
  },
)
TabsItem.displayName = Trigger.displayName

export { TabsItem }
