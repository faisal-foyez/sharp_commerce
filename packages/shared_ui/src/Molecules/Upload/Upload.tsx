'use client'
import { HTMLAttributes, ReactNode, forwardRef, useMemo } from 'react'
import { DropzoneOptions } from 'react-dropzone'
import { cn } from '../../utils/cn'
import { UploadContext } from './UploadContext'
import '@dsc/scss/lib/Upload.css'

export interface UploadProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
  options?: DropzoneOptions
  horizontal?: boolean
}

const Upload = forwardRef<HTMLDivElement, UploadProps>(
  ({ children, className, options, horizontal, ...props }, ref) => {
    const ContextValue = useMemo(() => ({ options, horizontal }), [options, horizontal])
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'dsc-upload-container',
          className,
        )}>
        <UploadContext.Provider value={ContextValue}>{children}</UploadContext.Provider>
      </div>
    )
  },
)

Upload.displayName = 'Upload'

export { Upload }
