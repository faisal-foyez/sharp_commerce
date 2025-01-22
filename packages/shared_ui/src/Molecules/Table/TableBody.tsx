'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Table.css'

const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <tbody ref={ref} className={cn('dsc-table-body', className)} {...props}>
        {children}
      </tbody>
    )
  },
)
TableBody.displayName = 'TableBody'

export { TableBody }
