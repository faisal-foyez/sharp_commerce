'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Upload.css'

const UploadIcon = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        {...props}
        className={cn(
          'dsc-upload-icon',
          className,
        )}
        ref={ref}>
        {children}
      </div>
    )
  },
)

UploadIcon.displayName = 'UploadIcon'

export { UploadIcon }
