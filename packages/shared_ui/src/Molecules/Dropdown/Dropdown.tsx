'use client'
import { DropdownMenuProps, Root } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, FC } from 'react'
import '@dsc/scss/lib/Dropdown.css'

const Dropdown: FC<DropdownMenuProps> = ({ children, ...props }) => {
  return (
    <Root modal={false} {...props}>
      {children}
    </Root>
  )
}

export { Dropdown }

export type DropdownProps = ComponentPropsWithoutRef<typeof Dropdown>
