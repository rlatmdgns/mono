"use client";

import React, { useState } from "react";
import { LabelTextareaProps } from "./Textarea.interface";
import { countBox, currentCount, labelText, supportiveBox, supportiveTextStyle, textBox, wrapper, } from "./styles.css";
import { Icon } from "../Icon";
import { Textarea } from "./Textarea";

export const LabelTextarea = ({
                                value,
                                defaultValue,
                                onChange,
                                maxLength = 20,
                                placeholder,
                                rows = 4,
                                disabled = false,
                                register,
                                state = "success",
                                label,
                                supportiveText,
                              }: LabelTextareaProps) => {
  const [textAreaCount, setTextAreaCount] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = event.target;
    if (value.length > maxLength) return;
    setTextAreaCount(value.length);
    if (!onChange) return;
    onChange(event);
  };

  return (
    <div className={wrapper}>
      <label className={labelText}>{label}</label>
      <Textarea
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        rows={rows}
        state={state}
        register={register}
      />
      <div className={textBox}>
        {state === "error" && supportiveText && (
          <div className={supportiveBox}>
            <Icon icon="icon/info-line" color="red500"/>
            <p className={supportiveTextStyle}>{supportiveText}</p>
          </div>
        )}
        <div className={countBox}>
          <span className={currentCount}>{textAreaCount}</span>
          {maxLength}
        </div>
      </div>
    </div>
  );
};
