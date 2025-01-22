'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Table.css'

const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
  ({ className, children, ...props }, ref) => (
    <div id="tableScrollBar" className="dsc-table-container">
      <table
        ref={ref}
        className={cn('dsc-table', className)}
        {...props}>
        {children}
      </table>
    </div>
  ),
)

Table.displayName = 'Table'

export { Table }
