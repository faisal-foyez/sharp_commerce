'use client'
import { HTMLAttributes, forwardRef, useState } from 'react'
import { cn } from '../../utils/cn'
import { NavbarContext } from './Context'
import '@dsc/scss/lib/Navbar.css';

const Navbar = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(({ children, className, ...props }, ref) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen((prev) => !prev)

  return (
    <header
      ref={ref}
      {...props}
      className={cn(
        'dsc-navbar',
        className,
      )}>
      <NavbarContext.Provider value={{ open, handleOpen }}>{children}</NavbarContext.Provider>
    </header>
  )
})

Navbar.displayName = 'Navbar'

export { Navbar }
