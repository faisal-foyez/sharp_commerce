import React,{ButtonHTMLAttributes, Ref, forwardRef} from 'react';
import '@dsc/scss/lib/Button.css';
import { ButtonIconSize, ButtonSize, ButtonType, ButtonStyle, IconWeight } from '@dsc/foundation/lib';
import { cn } from '../../utils/cn';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof typeof ButtonType;
  variant?: keyof typeof ButtonStyle; // Default value will be set in destructuring
  size?: keyof typeof ButtonSize; // Default value will be set in destructuring
  isRounded?: boolean; // Default value will be set in destructuring
  children?: React.ReactNode;
  disabled?: boolean; // Default value will be set in destructuring
  onClick?: () => void;
  props?: any;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant="fill",
      color = "primary",
      size = "md",
      isRounded = false,
      children,
      disabled = false,
      onClick,
      ...props
  },
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <button
      ref={ref}
      className={cn(
        `btn-${color}-${variant}`,
        `btn-${size}`,
        isRounded && 'btn-rounded'
      )}
      disabled={disabled}
      onClick={onClick}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;