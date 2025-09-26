import React from "react";
// import Avatar from "../../Molecules/Avatar/Avatar";
import ImageTest from "../../../assets/image.jpg";
import { X } from '@dsc/phosphor_icons';
import '@dsc/scss/lib/TagButton.css';
import { TagButtonSize, TagButtonState } from '@dsc/foundation/lib';
import { cn } from '../../utils/cn';

interface TagButtonProps {
  size?: keyof typeof TagButtonSize;
  // isShowAvatar?: boolean;
  isShowCloseIcon?: boolean;
  state?: keyof typeof TagButtonState;
  label?: string;
  onClose?: () => void;
  // Changed 'props' to a more specific type
  props?: React.HTMLAttributes<HTMLSpanElement>;
}

const TagButton = ({
  size = 'medium', 
  // isShowAvatar = false,
  isShowCloseIcon = true,
  label = 'Chip Text',
  state,
  onClose,
  ...props
}: TagButtonProps) => {
  return (
    <span data-testid="tag-button-testid" className={cn(
      'btn-tag',
      state ? `btn-tag-${state}` : '',
      `btn-tag-${size}`
    )} {...props}>
      {/* {isShowAvatar && (
        <Avatar type="image" image={ImageTest} size="xsmall"/>
      )} */}
      <span>{label}</span>
      {isShowCloseIcon && (
        <X data-testid="close-icon-testid" weight="bold" size={20} onClick={onClose}/>
      )}
    </span>
  );
};

export default TagButton;