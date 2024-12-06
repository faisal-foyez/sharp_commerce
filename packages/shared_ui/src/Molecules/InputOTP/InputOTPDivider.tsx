import { cn } from '../../utils/cn';

const InputOTPDivider = ({ className, ...props }: { className?: string, props?: any }) => {
  return (
    <div className={cn(
      'input-otp-divider',
      className
    )} {...props}></div>
  )
}

export default InputOTPDivider;
