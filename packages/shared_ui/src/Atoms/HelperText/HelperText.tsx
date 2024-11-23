import React from "react";
import { Info } from "@dsc/phosphor_icons";
import "@dsc/scss/lib/HelperText.css";

interface HelperTextProps {
  children: string;
  isShowInfoIcon?: boolean;
  props?: any;
}

const HelperText = ({ 
  children, 
  isShowInfoIcon = true,
  ...props
}: HelperTextProps) => {
  return (
    <div className="helper-text" {...props}>
      {isShowInfoIcon && <Info data-testid="info-icon" size={20} />}
      <span>{children}</span>
    </div>
  );
};

export default HelperText;
