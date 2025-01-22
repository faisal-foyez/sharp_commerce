'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Table.css'

const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={cn('dsc-table-row', className)}
        {...props}>
        {children}
      </tr>
    )
  },
)
TableRow.displayName = 'TableRow'

export { TableRow }
