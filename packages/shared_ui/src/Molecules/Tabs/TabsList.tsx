'use client'
import { List } from '@radix-ui/react-tabs'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useTabsContext } from './TabsContext'
import '@dsc/scss/lib/Tabs.css'

const TabsList = forwardRef<ElementRef<typeof List>, ComponentPropsWithoutRef<typeof List>>(
  ({ className, ...props }, ref) => {
    const { variant } = useTabsContext()
    return (
      <List
        ref={ref}
        className={cn(
          'dsc-tabs-list',
          variant === 'underline' && 'dsc-tabs-list-underline',
          className,
        )}
        {...props}
      />
    )
  },
)
TabsList.displayName = List.displayName

export { TabsList }
