'use client'
import { Root } from '@radix-ui/react-avatar'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import "@dsc/scss/lib/Avatarr.css"

const Avatar = forwardRef<ElementRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
  ({ className, ...props }, ref) => (
    <Root
      ref={ref}
      className={cn('avatar-root', className)}
      {...props}
    />
  ),
)

Avatar.displayName = Root.displayName

export { Avatar }
