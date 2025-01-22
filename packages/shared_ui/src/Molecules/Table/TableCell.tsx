'use client'
import { TdHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Table.css'

const TableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={cn('dsc-table-cell', className)}
        {...props}>
        {children}
      </td>
    )
  },
)
TableCell.displayName = 'TableCell'

export { TableCell }
