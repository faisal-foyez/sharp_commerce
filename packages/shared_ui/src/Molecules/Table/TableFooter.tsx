'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Table.css'

const TableFooter = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <tfoot ref={ref} className={cn('dsc-table-footer', className)} {...props}>
        {children}
      </tfoot>
    )
  },
)
TableFooter.displayName = 'TableFooter'

export { TableFooter }
