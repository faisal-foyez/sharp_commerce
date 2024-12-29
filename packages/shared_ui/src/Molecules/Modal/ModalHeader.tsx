'use client'
import { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Modal.css';

const ModalHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('dsc-modal-header', className)} {...props} />
)
ModalHeader.displayName = 'ModalHeader'

export { ModalHeader }
