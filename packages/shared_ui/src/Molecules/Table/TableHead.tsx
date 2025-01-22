'use client'
import { ThHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Table.css'

const TableHead = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, children, ...props }, ref) => (
    <th
      ref={ref}
      className={cn('dsc-table-head', className)}
      {...props}>
      {children}
    </th>
  ),
)
TableHead.displayName = 'TableHead'

export { TableHead }
