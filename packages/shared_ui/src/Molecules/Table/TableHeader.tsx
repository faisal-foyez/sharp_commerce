'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Table.css'

const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <thead ref={ref} className={cn('dsc-table-header', className)} {...props}>
        {children}
      </thead>
    )
  },
)

TableHeader.displayName = 'TableHeader'

export { TableHeader }
