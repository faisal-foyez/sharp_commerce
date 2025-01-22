'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Table.css'

const TableCaption = forwardRef<HTMLTableCaptionElement, HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <caption
        ref={ref}
        className={cn('dsc-table-caption', className)}
        {...props}>
        {children}
      </caption>
    )
  },
)
TableCaption.displayName = 'TableCaption'

export { TableCaption }
