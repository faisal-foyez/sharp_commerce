'use client'
import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Slider.css'

export type SliderProps = ComponentPropsWithoutRef<typeof Root> & {
  trackClassName?: string
  rangeClassName?: string
  thumbClassName?: string
}

const Slider = forwardRef<ElementRef<typeof Root>, SliderProps>(
  ({ className, thumbClassName, trackClassName, rangeClassName, ...props }, ref) => {
    return (
      <Root ref={ref} className={cn('dsc-slider-root', className)} {...props}>
        <Track className={cn('dsc-slider-track', trackClassName)}>
          <Range className={     cn('dsc-slider-range', rangeClassName)} />
        </Track>
        <Thumb
          className={cn(
            'dsc-slider-thumb',
            thumbClassName,
          )}
        />
        <Thumb
          className={cn(
            'dsc-slider-thumb',
            thumbClassName,
          )}
        />
      </Root>
    )
  },
)

Slider.displayName = Root.displayName

export { Slider }
