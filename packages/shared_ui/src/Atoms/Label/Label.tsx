import React from "react";
import { Info } from '@dsc/phosphor_icons';
import '@dsc/scss/lib/Label.css';
import Badge from '../Badge/Badge';

interface LabelProps {
  children: React.ReactNode;
  isShowOptional?: boolean;
  isShowRequired?: boolean;
  isShowInfoIcon?: boolean;
  isShowBadge?: boolean;
  badgeText?: string;
  infoText?: string;
  props?: any;
}

const Label = ({ 
  children,
  isShowOptional,
  isShowRequired,
  isShowInfoIcon,
  isShowBadge,
  badgeText="Badge",
  infoText,
  ...props
}: LabelProps) => {
  return (
    <label
      className="label"
      {...props}
    >
      <span className="label-text">
        {children}
        {isShowOptional && <span className="optional-text">(Optional)</span>}
        {isShowBadge && <Badge color='blue' style='light' size='small'>{badgeText}</Badge>}
        {isShowRequired && <span className="required-text">*</span>}
      </span>
      {isShowInfoIcon && (
        <span className="label-info">
          <Info weight="bold" size={20}/>
          {infoText && <span className="label-info-text">{infoText}</span>}
        </span>
      )}
    </label>
  );
};

export default Label;
