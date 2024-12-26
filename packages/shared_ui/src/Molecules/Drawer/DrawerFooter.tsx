'use client'
import { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import '@dsc/scss/lib/Drawer.css'

const DrawerFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('dsc-drawer-footer', className)} {...props} />
)
DrawerFooter.displayName = 'DrawerFooter'

export { DrawerFooter }
