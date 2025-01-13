'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { RatingContext } from './Context'
import '@dsc/scss/lib/Rating.css';
interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  handleRating?: (value: number | undefined) => void
}

const Rating = forwardRef<HTMLDivElement, RatingProps>(
  ({ children, className, handleRating, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('dsc-rating', className)} ref={ref}>
        <RatingContext.Provider value={{ handleRating }}>{children}</RatingContext.Provider>
      </div>
    )
  },
)

Rating.displayName = 'Rating'

export { Rating }
