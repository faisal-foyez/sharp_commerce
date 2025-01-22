import React, {LabelHTMLAttributes} from "react";
import { Info } from '@dsc/phosphor_icons';
import '@dsc/scss/lib/Label.css';
import Badge from '../Badge/Badge';
import { InputFieldContext } from "../../Molecules/Input/InputField";
import { cn } from "../../utils/cn";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  isShowOptional?: boolean;
  isShowRequired?: boolean;
  isShowInfoIcon?: boolean;
  isShowBadge?: boolean;
  badgeText?: string;
  infoText?: string;
  disabled?: boolean;
  props?: any;
}

const Label = ({ 
  children,
  isShowOptional,
  isShowRequired,
  isShowInfoIcon,
  isShowBadge,
  badgeText="Badge",
  disabled,
  infoText,
  ...props
}: LabelProps) => {
  const {disabled: inputDisabled} = React.useContext(InputFieldContext);
  return (
    <label
      className={cn(
        'label',
        disabled || inputDisabled ? 'disabled' : ''
      )}
      {...props}
    >
      <span className="label-text">
        {children}
        {isShowOptional && <span className={cn('optional-text')}>{'(Optional)'}</span>}
        {isShowBadge && <Badge colorVariant='blue' styleVariant='light' sizeVariant='small'>{badgeText}</Badge>}
        {isShowRequired && <span className={cn('required-text')}>*</span>}
      </span>
      {isShowInfoIcon && (
        <span className={cn('label-info')}>
          <Info weight="bold" size={20}/>
          {infoText && <span className={cn('label-info-text')}>{infoText}</span>}
        </span>
      )}
    </label>
  );
};

export default Label;
