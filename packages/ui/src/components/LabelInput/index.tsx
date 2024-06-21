"use client";

import { LabelInputProps } from "./LabelInput.interface";
import { theme } from "../../globalTheme.css";
import { guideContainer, labelStyle, requiredMark, textContainer, textStyle, wrapper, } from "./styles.css";
import { TextInput } from "../TextInput";
import { Icon } from "../Icon";

export const LabelInput = ({
                             label,
                             labelTextSize = "md",
                             isLabelRequired = false,
                             guideText,
                             type = "text",
                             state = "success",
                             value,
                             placeholder,
                             width = "100%",
                             onClick,
                             onChange,
                             onKeyUp,
                             register,
                             pattern,
                             maxLength,
                             disabled = false,
                             isReadOnly = false,
                             icon,
                           }: LabelInputProps) => {
  const iconColor = state === "error" ? "red500" : "neutralGray400";

  return (
    <div className={wrapper}>
      <label className={labelStyle}>
        {label && (
          <div className={textContainer}>
            {icon}
            <span
              className={textStyle}
              style={{
                ...(labelTextSize === "md" ? theme.fonts[14] : theme.fonts[16]),
              }}
            >
              {label}
            </span>
            {isLabelRequired && <span className={requiredMark}>*</span>}
          </div>
        )}
        <TextInput
          width={width}
          state={state}
          type={type}
          value={value}
          placeholder={placeholder}
          onClick={onClick}
          onChange={onChange}
          onKeyUp={onKeyUp}
          pattern={pattern}
          disabled={disabled}
          register={register}
          maxLength={maxLength}
          isReadOnly={isReadOnly}
        />
      </label>
      {guideText && (
        <div className={guideContainer}>
          <Icon icon="icon/info-solid" color={iconColor} size={14}/>
          <span
            className={guideText}
            style={{
              color:
                state === "error"
                  ? theme.colors.red500
                  : theme.colors.neutralGray400,
            }}
          >
            {guideText}
          </span>
        </div>
      )}
    </div>
  );
};
