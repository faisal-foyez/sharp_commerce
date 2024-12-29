'use client'
import { Content, Portal } from '@radix-ui/react-popover';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import '@dsc/scss/lib/Popover.css';

const PopoverContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(({ className, align = 'center', sideOffset = 10, ...props }, ref) => (
    <Portal>
      <Content
        ref={ref}
        align={align}
        sticky="partial"
        sideOffset={sideOffset}
        className={cn(
          'dsc-popover-content',
          className,
        )}
        {...props}
      />
    </Portal>
));

PopoverContent.displayName = Content.displayName;

export default PopoverContent;
