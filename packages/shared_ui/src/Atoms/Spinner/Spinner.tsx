'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Spinner.css';

interface SpinnerColors {
  primary: string
  secondary: string
  error: string
  success: string
  warning: string
}

const fillClasses = {
  primary: 'dsc-spinner-primary',
  secondary: 'dsc-spinner-secondary',
  error: 'dsc-spinner-error',
  success: 'dsc-spinner-success',
  warning: 'dsc-spinner-warning',
} as SpinnerColors

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  color?: keyof SpinnerColors
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(({ color = 'primary', className }, ref) => {
  return (
    <div data-testid="spinner" ref={ref} aria-label="Loading..." role="status">
      <svg
        className={cn('dsc-spinner-svg', fillClasses[color as keyof SpinnerColors], className)}
        viewBox="3 3 18 18">
        <path
          className="dsc-spinner-icon-path"
          d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
        <path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
      </svg>
    </div>
  )
})

Spinner.displayName = 'Spinner'

export { Spinner }
