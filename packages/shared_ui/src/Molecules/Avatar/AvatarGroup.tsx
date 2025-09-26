'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import "@dsc/scss/lib/Avatar.css"

const AvatarGroup = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn('avatar-group', className)}>
        {children}
      </div>
    )
  },
)

AvatarGroup.displayName = 'AvatarGroup'

export { AvatarGroup }
