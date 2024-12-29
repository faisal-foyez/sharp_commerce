'use client'
import { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Modal.css';

const ModalFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('dsc-modal-footer', className)} {...props} />
)

ModalFooter.displayName = 'ModalFooter'

export { ModalFooter }
