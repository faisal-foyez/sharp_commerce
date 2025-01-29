'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  isFileExists?: boolean
}

const UploadFooter = forwardRef<HTMLDivElement, FooterProps>(
  ({ children, className, isFileExists = false, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn(className)} ref={ref}>
        {isFileExists ? children : null}
      </div>
    )
  },
)

UploadFooter.displayName = 'UploadFooter'

export { UploadFooter }
