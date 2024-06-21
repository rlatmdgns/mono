"use client";

import { ChangeEvent } from "react";
import { CHECKBOX_IMAGE_SIZE } from "./CheckBox.constants";
import { CheckBoxProps } from "./CheckBox.interface";
import {
  container,
  inner,
  input,
  label,
  textWrapper,
  wrapper,
} from "./styles.css";
import { Icon } from "../Icon";
import { Label } from "../Label";

export const CheckBox = ({
  isChecked,
  isPartial = false,
  name,
  text,
  size = "md",
  type = "primary",
  isRequired = false,
  hasInfo = false,
  disabled = false,
  onChange,
}: CheckBoxProps) => {
  const isActive = isChecked || isPartial;
  const imageSize = CHECKBOX_IMAGE_SIZE[size];

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    onChange(event.target.checked);
  };

  return (
    <div className={wrapper}>
      <label
        className={label({
          size,
          type,
          disabled,
          isActive,
        })}
      >
        <div
          className={container({
            size,
            isActive,
          })}
        >
          <div
            className={inner({
              size,
              type,
              isActive,
            })}
          >
            <input
              type="checkbox"
              name={name}
              className={input}
              disabled={disabled}
              defaultChecked={isChecked}
              onChange={handleInputChange}
            />
            {isChecked && (
              <Icon icon="icon/check-line1" color="white" size={imageSize} />
            )}
            {isPartial && (
              <Icon icon="icon/minus-line" color="white" size={imageSize} />
            )}
          </div>
        </div>
      </label>
      {text && (
        <p className={textWrapper}>
          <Label label={text} isRequired={isRequired} hasInfo={hasInfo} />
        </p>
      )}
    </div>
  );
};
