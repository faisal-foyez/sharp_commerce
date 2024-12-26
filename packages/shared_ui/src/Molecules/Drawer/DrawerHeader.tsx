'use client'
import { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Drawer.css'

const DrawerHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('dsc-drawer-header', className)} {...props} />
)
DrawerHeader.displayName = 'DrawerHeader'

export { DrawerHeader }
