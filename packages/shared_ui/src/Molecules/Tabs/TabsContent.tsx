'use client'
import { Content } from '@radix-ui/react-tabs'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Tabs.css'

const TabsContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ className, ...props }, ref) => (
    <Content ref={ref} className={cn('dsc-tabs-content', className)} {...props} />
  ),
)
TabsContent.displayName = Content.displayName

export { TabsContent }
