import React, {useState, useRef, useEffect} from 'react';
import { CheckFat, Circle, Square } from '@dsc/phosphor_icons';
import { cn } from '../../utils/cn';
import { CheckboxVariant, CheckboxColor, CheckboxSize } from '@dsc/foundation/lib';
import '@dsc/scss/lib/Checkbox.css';

type CheckboxVariantType = keyof typeof CheckboxVariant;
type CheckboxColorType = keyof typeof CheckboxColor;
type CheckboxSizeType = keyof typeof CheckboxSize;

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: CheckboxVariantType;
  color?: CheckboxColorType;
  size?: CheckboxSizeType;
  checked?:boolean;
  onCheckedChange?: (checked:boolean) => void;
  disabled?:boolean;
  props?:any;
}

const Checkbox = ({
  variant="default",
  color="primary",
  size="small",
  checked=true,
  className,
  disabled=false,
  onCheckedChange,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const checkboxRef = useRef<HTMLInputElement>(null);
   
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const onClickCheckboxContainer = (e: React.MouseEvent<HTMLDivElement>) => {
    if(disabled)  return;
    e.preventDefault();
    checkboxRef.current?.focus();
    checkboxRef.current?.click();
  };

  const onKeyDownCheckboxContainer = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if(disabled)  return;
    if (e.key === ' ') {
      e.preventDefault();
      checkboxRef.current?.focus();
      checkboxRef.current?.click();
    }
  };

  const onClickCheckbox = (e: React.MouseEvent<HTMLInputElement>) => {
    if(disabled)  return;
    e.preventDefault();
    setIsChecked(!isChecked);
    onCheckedChange && onCheckedChange(!isChecked);
  };

  return (
    <div 
    data-testid='checkbox-container-testid'
    className={
      cn(
        'checkbox-container',
        isChecked && 'checkbox-container-checked',
        disabled && 'checkbox-container-disabled',
        variant in CheckboxVariant && `checkbox-container-${variant}`,
        color in CheckboxColor && `checkbox-container-${color}`,
        size in CheckboxSize && `checkbox-container-${size}`,
        className
      )
    }
    onClick={onClickCheckboxContainer} 
    onKeyDown={onKeyDownCheckboxContainer}>
      <input disabled={disabled} checked={isChecked} onClick={onClickCheckbox} ref={checkboxRef} className={cn('checkbox-input')} type="checkbox" {...props}/>
      { isChecked && variant === 'default' && <CheckFat className={cn('checkbox-icon', 'checkbox-icon-default')} weight="fill" />}
      { isChecked && variant === 'square' && <Square className={cn('checkbox-icon', 'checkbox-icon-square')} weight="fill" />}
      { isChecked && variant === 'circle' && <Circle className={cn('checkbox-icon', 'checkbox-icon-circle')} weight="fill" />}
    </div> 
  );
};

export default Checkbox;