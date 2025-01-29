'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { useDropzone } from 'react-dropzone'
import { cn } from '../../utils/cn'
import { useUploadContext } from './UploadContext'
import '@dsc/scss/lib/Upload.css'

const UploadBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    const { options, horizontal } = useUploadContext()
    const { getRootProps, getInputProps } = useDropzone(options)
    return (
      <div
        {...props}
        ref={ref}
        {...getRootProps()}
        className={cn(
          horizontal
            ? 'dsc-upload-body-horizontal'
            : 'dsc-upload-body-default',
          className,
        )}>
        <input {...getInputProps()} />
        {children}
      </div>
    )
  },
)

UploadBody.displayName = 'UploadBody'

export { UploadBody }
