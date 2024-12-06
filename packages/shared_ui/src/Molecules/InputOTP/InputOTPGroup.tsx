import { cn } from '../../utils/cn';

const InputOTPGroup = ({children, className, ...props}: {children: React.ReactNode, className?: string, props?: any}) => {
  return (
    <div className={cn(
      'input-otp-group',
      className
    )} {...props}>
      {children}
    </div>
  )
}

export default InputOTPGroup;
