'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useProgressContext } from './Context'
import { progressTheme } from './theme'
import '@dsc/scss/lib/Progress.css'

export interface LineProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  lineBackground?: string
  innerColor?: string
  outerColor?: string
}

const LineProgressBar = forwardRef<HTMLDivElement, LineProgressBarProps>(({ className, lineBackground, innerColor, outerColor }, ref) => {
  const { line } = progressTheme
  const { lineProgressBar } = useProgressContext()
  return (
    <div ref={ref} style={{backgroundColor: innerColor}} className={cn(line.progress.base, 'h-2.5', lineBackground)}>
      <div className={cn(line.progress.bar, className)} style={{ width: lineProgressBar + '%' , backgroundColor: outerColor}}></div>
    </div>
  )
})

LineProgressBar.displayName = 'LineProgressBar'

export { LineProgressBar }
