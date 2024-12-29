import { HTMLAttributes, forwardRef, CSSProperties } from 'react'
import { cn } from '../../utils/cn'
import { useProgressContext } from './Context'
import { progressTheme } from './theme'
import '@dsc/scss/lib/Progress.css'

export interface CircleLineProps extends HTMLAttributes<SVGSVGElement> {
  strokeWidth?: number
  strokeColor?: string
  innerColor?: string
  outerColor?: string
}

const CircleProgressLine = forwardRef<SVGSVGElement, CircleLineProps>(
  ({ className, strokeWidth = 3.5, strokeColor, innerColor, outerColor, ...props }, ref) => {
    const { circle } = progressTheme
    const { progressBar = 0 } = useProgressContext()
    return (
      <svg {...props} ref={ref} className={circle.svg.base} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx={18}
          cy={18}
          r={16}
          fill="none"
          strokeWidth={strokeWidth}
          className={cn(circle.svg.circle, className)}
          style={{stroke: innerColor}}
        />
        <g className={circle.svg.g}>
          <circle
            cx={18}
            cy={18}
            r={16}
            fill="none"
            className={cn(circle.svg.gCircle, strokeColor)}
            strokeWidth={strokeWidth + 0.2}
            strokeDasharray={100}
            strokeDashoffset={100 - progressBar}
            style={{stroke: outerColor}}
          />
        </g>
      </svg>
    )
  },
)

CircleProgressLine.displayName = 'CircleProgressLine'

export { CircleProgressLine }
