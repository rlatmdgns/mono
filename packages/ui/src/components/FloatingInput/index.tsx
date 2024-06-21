"use client";

import { useState } from "react";
import { iconWrapper, input, inputBox, inputBoxIconWrapper, labelStyle, message, } from "./styles.css";
import { Icon, IconNames } from "../Icon";
import { Button } from "../Button";
import { getInputPadding } from "./FloatingInput.function";

interface FloatingInputProps {
  type?: "text" | "password" | "tel" | "email";
  value?: string;
  defaultValue?: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register?: any;
  pattern?: string;
  icon: IconNames;
  isCorrect?: boolean;
  isError?: boolean;
  isEye?: boolean;
  isReadOnly?: boolean;
  validationMessage?: any;
  autoComplete?: "new-password";
  maxLength?: number;
}

export const FloatingInput = ({
                                type = "text",
                                value,
                                defaultValue,
                                placeholder,
                                onChange,
                                register,
                                pattern,
                                icon,
                                isCorrect = false,
                                isError = false,
                                isEye = false,
                                isReadOnly = false,
                                validationMessage,
                                autoComplete,
                                maxLength,
                              }: FloatingInputProps) => {
  const [eyeToggle, setEyeToggle] = useState(false);

  const isValidate = isError && validationMessage;
  const stateIconSource = isError
    ? "icon/warning-solid"
    : isCorrect
      ? "icon/check-solid"
      : null;
  const stateIconColor = isError ? "red500" : isCorrect ? "blue500" : null;
  const showIcon = eyeToggle ? "icon/show-solid" : "icon/hide-solid";

  const onEyeToggle = () => {
    setEyeToggle(!eyeToggle);
  };
  const onGetType = () => {
    if (isEye && eyeToggle) return "text";
    return type;
  };

  return (
    <div>
      <div className={inputBox}>
        <div className={inputBoxIconWrapper}>
          <Icon icon={icon} size={20} color="neutralGray500"/>
        </div>
        <input
          className={input}
          style={{
            padding: getInputPadding(stateIconSource, isEye),
          }}
          type={onGetType()}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          pattern={pattern}
          {...register}
          placeholder=""
          readOnly={isReadOnly}
          autoComplete={autoComplete}
          maxLength={maxLength}
        />
        <label className={labelStyle}>{placeholder}</label>
        <div className={iconWrapper}>
          {isEye && (
            <Button
              size={"sm"}
              leadingIcon={showIcon}
              style={"mono"}
              state={"secondary"}
              onClick={onEyeToggle}
            />
          )}
          {stateIconSource && stateIconColor && (
            <Icon icon={stateIconSource} color={stateIconColor}/>
          )}
        </div>
      </div>
      {isValidate && <p className={message}>{validationMessage}</p>}
    </div>
  );
};

export default FloatingInput;
