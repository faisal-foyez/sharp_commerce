'use client'
import { ComponentProps } from 'react'
import { Toaster as Sonner } from 'sonner'
import '@dsc/scss/lib/Toast.css'

type ToasterProps = ComponentProps<typeof Sonner>

const ToastWrapper = ({ theme = 'system', toastOptions, richColors = true, ...props }: ToasterProps) => {
  const classNames: ToasterProps['toastOptions'] = {
    classNames: {
      title: 'dsc-toast-title',
      toast: 'dsc-toast',
      description: 'dsc-toast-description',
    },
  }
  return <Sonner theme={theme} richColors={richColors} {...props} toastOptions={toastOptions ?? classNames} />
}

export { ToastWrapper }
