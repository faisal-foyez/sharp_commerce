'use client'
import { Fallback } from '@radix-ui/react-avatar'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import "@dsc/scss/lib/Avatar.css"

const AvatarFallback = forwardRef<ElementRef<typeof Fallback>, ComponentPropsWithoutRef<typeof Fallback>>(
  ({ className, ...props }, ref) => (
    <Fallback
      ref={ref}
      className={cn(
        'avatar-fallback',
        className,
      )}
      {...props}
    />
  ),
)
AvatarFallback.displayName = Fallback.displayName

export { AvatarFallback }
