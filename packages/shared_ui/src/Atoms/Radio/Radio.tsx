import React, { useState, useRef, useEffect } from 'react';
import { CheckFat, Circle, Square } from '@dsc/phosphor_icons';
import { cn } from '../../utils/cn';
import { RadioVariant, RadioColor, RadioSize } from '@dsc/foundation/lib';
import '@dsc/scss/lib/Radio.css';

type RadioVariantType = keyof typeof RadioVariant;
type RadioColorType = keyof typeof RadioColor;
type RadioSizeType = keyof typeof RadioSize;

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: RadioVariantType;
  color?: RadioColorType;
  size?: RadioSizeType;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  props?: any;
}

const Radio = ({
  variant = "circle",
  color = "primary",
  size = "small",
  checked = false,
  className,
  disabled = false,
  onCheckedChange,
  ...props
}: RadioProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const radioRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleToggle = () => {
    if (disabled) return;
    setIsChecked(true);
    onCheckedChange && onCheckedChange(true);
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    radioRef.current?.focus();
    handleToggle();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div
      data-testid='radio-container-testid'
      className={cn(
        'radio-container',
        isChecked && 'radio-container-checked',
        disabled && 'radio-container-disabled',
        variant in RadioVariant && `radio-container-${variant}`,
        color in RadioColor && `radio-container-${color}`,
        size in RadioSize && `radio-container-${size}`,
        className
      )}
      onClick={handleContainerClick}
      onKeyDown={handleKeyDown}
    >
      <input
        disabled={disabled}
        checked={isChecked}
        onClick={handleToggle}
        ref={radioRef}
        className={cn('radio-input')}
        type="radio"
        {...props}
      />
      {isChecked && variant === 'rounded' && <Square className={cn('radio-icon', 'radio-icon-rounded')} weight="fill" />}
      {isChecked && variant === 'square' && <Square className={cn('radio-icon', 'radio-icon-square')} weight="fill" />}
      {isChecked && variant === 'circle' && <Circle className={cn('radio-icon', 'radio-icon-circle')} weight="fill" />}
    </div>
  );
};

export default Radio;