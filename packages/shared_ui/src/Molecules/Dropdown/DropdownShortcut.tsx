'use client'
import { ComponentPropsWithoutRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Dropdown.css'

const DropdownShortcut = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn('dsc-dropdown-shortcut', className)} {...props} />
}
DropdownShortcut.displayName = 'DropdownShortcut'

export { DropdownShortcut }

export type DropdownShortcutProps = ComponentPropsWithoutRef<typeof DropdownShortcut>
