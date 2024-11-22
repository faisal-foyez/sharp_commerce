import React from "react";
import Avatar from "../../Molecules/Avatar";
import ImageTest from "../../../assets/image.jpg";
import { X } from '@dsc/phosphor_icons';
import '@dsc/scss/lib/TagButton.css';
import { TagButtonSize, TagButtonState } from '@dsc/foundation/lib';

interface TagButtonProps {
  size?: keyof typeof TagButtonSize;
  isShowAvatar?: boolean;
  isShowCloseIcon?: boolean;
  state?: keyof typeof TagButtonState;
  label?: string;
}

const TagButton = ({
  size = 'medium', 
  isShowAvatar = false,
  isShowCloseIcon = true,
  label = 'Chip Text',
  state
}: TagButtonProps) => {
  return (
    <span data-testid="tag-button-testid" className={`btn-tag ${state ? `btn-tag-${state}` : ''} btn-tag-${size}`}>
      {
        isShowAvatar && (
          <>
            <Avatar type="image" image={ImageTest} size="xsmall"/>
          </>
        )
      }
      <span>{label}</span>
      {
        isShowCloseIcon && (
          <X data-testid="close-icon-testid" weight="bold" height={16}/>
        )
      }
    </span>
  );
};

export default TagButton;