'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { DividerColorVariant, DividerSizeVariant, dividerTheme } from './theme'
import '@dsc/scss/lib/Divider.css';

export interface DividerProps {
  color?: keyof DividerColorVariant
  size?: keyof DividerSizeVariant
  variant?: 'start' | 'end' | 'center'
  className?: string
  children?: ReactNode
}

export const Divider: FC<DividerProps> = ({
  color = 'secondary',
  size = 'md',
  variant = 'center',
  className,
  children,
  ...props
}) => {
  const { withChildren, withOutChildren } = dividerTheme
  if (!children) {
    return (
      <div
        {...props}
        className={cn(withOutChildren.base, withOutChildren.size[size], withOutChildren.color[color], className)}
      >
      </div>
    )
  }
  return (
    <div
      {...props}
      className={cn(
        withChildren.base,
        withChildren.textColor[color],
        withChildren.variant[variant],
        withChildren.color[variant][color],
        withChildren.size[variant][size],
        className,
      )}>
      {children}
    </div>
  )
}
