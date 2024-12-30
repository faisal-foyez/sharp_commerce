'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import { paginationTheme } from './theme'
import '@dsc/scss/lib/Pagination.css'

const PaginationList = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(
  ({ children, className, ...props }, ref) => {
    const { list } = paginationTheme
    return (
      <ul {...props} ref={ref} className={cn(list.base, className)}>
        {children}
      </ul>
    )
  },
)

PaginationList.displayName = 'PaginationList'

export { PaginationList }
