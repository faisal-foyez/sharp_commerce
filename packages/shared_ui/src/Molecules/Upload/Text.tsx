'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Upload.css'

const UploadText = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('dsc-upload-text', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

UploadText.displayName = 'UploadText'

export { UploadText }
