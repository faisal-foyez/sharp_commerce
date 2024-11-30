import { cn } from '../../utils/cn';
import '@dsc/scss/lib/TextArea.css'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isError?: boolean;
  disabled?: boolean;
  className?: string;
  props?:any
}

const TextArea = ({ isError, className, ...props }: TextAreaProps) => {
  return (
    <textarea 
      rows={10} 
      className={cn(
        'input-textarea', 
        isError && 'input-textarea-error', 
        className
      )} 
      
      {...props} 
    />
  );
};

export default TextArea;