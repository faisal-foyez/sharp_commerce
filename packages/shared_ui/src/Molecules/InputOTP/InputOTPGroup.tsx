const InputOTPGroup = ({children, className, ...props}: {children: React.ReactNode, className?: string, props?: any}) => {
  return (
    <div className={`input-otp-group ${className}`} {...props}>
      {children}
    </div>
  )
}

export default InputOTPGroup;
