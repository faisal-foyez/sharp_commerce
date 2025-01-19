import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Steps.css'

export interface StepsPointProps extends HTMLAttributes<HTMLDivElement> {
  isComplete: boolean
  rootClassName?: string
  className?: string
  lineClassName?: string
}

const StepsPoint = forwardRef<HTMLDivElement, StepsPointProps>(
  ({ isComplete, className, lineClassName, rootClassName, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'dsc-steps-point-container',
          rootClassName,
        )}>
        <span
          data-completed={isComplete}
          className={cn(
            'dsc-steps-point',
            children ? 'dsc-steps-point-if-child' : 'dsc-steps-point-if-not-child',
            className,
          )}>
          {children}
        </span>
        <div
          data-completed={isComplete}
          className={cn(
            'dsc-steps-line',
            lineClassName,
          )}
        />
      </div>
    )
  },
)

StepsPoint.displayName = 'StepsPoint'

export { StepsPoint }
