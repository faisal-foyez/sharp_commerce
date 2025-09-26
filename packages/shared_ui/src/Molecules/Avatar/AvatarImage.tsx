'use client'
import { Image as AImage } from '@radix-ui/react-avatar'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import "@dsc/scss/lib/Avatar.css"

const AvatarImage = forwardRef<ElementRef<typeof AImage>, ComponentPropsWithoutRef<typeof AImage>>(
  ({ className, ...props }, ref) => (
    <AImage ref={ref} className={cn('avatar-image', className)} {...props} />
  ),
)
AvatarImage.displayName = AImage.displayName

export { AvatarImage }
