'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { carouselTheme } from './theme'
import '@dsc/scss/lib/Carousel.css'

export const CarouselButtons = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    const theme = carouselTheme
    return (
      <div {...props} className={cn(theme.controls.button.container, className)} ref={ref}>
        {children}
      </div>
    )
  },
)

CarouselButtons.displayName = 'CarouselButtons'
