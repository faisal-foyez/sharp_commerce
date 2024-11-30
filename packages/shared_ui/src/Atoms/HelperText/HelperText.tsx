import React, {useContext} from "react";
import { Info } from "@dsc/phosphor_icons";
import "@dsc/scss/lib/HelperText.css";
import { InputFieldContext } from "../../Molecules/Input/InputField";
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
  const {isError} = useContext(InputFieldContext);
  return (
    <div className={`helper-text`} {...props}>
      {isShowInfoIcon && <Info data-testid="info-icon" size={20} />}
      <span className={isError ? 'error' : ''}>{children}</span>
    </div>
  );
};

export default HelperText;
