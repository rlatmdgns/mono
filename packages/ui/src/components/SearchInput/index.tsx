"use client";

import React from "react";
import { box, iconBox, input } from "./styles.css";
import { Icon } from "../Icon";
import { TextInput } from "../TextInput";

export interface SearchInputProps {
  value?: string;
  placeholder?: string;
  maxWidth?: string;
  width?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  register?: unknown;
  size?: "sm" | "md";
  disabled?: boolean;
}

export const SearchInput = ({
                              value,
                              placeholder,
                              onClick,
                              onChange,
                              onKeyUp,
                              register,
                              maxWidth = "100%",
                              width = "100%",
                              size = "md",
                              disabled = false,
                            }: SearchInputProps) => {
  return (
    <div
      className={box}
      style={{
        maxWidth: maxWidth,
        width: width,
      }}
    >
      <div
        className={input({
          size,
        })}
        style={{
          width: width,
        }}
      >
        <TextInput
          value={value}
          placeholder={placeholder}
          width={"100%"}
          onClick={onClick}
          onChange={onChange}
          onKeyUp={onKeyUp}
          register={register}
          disabled={disabled}
        />
        <div className={iconBox}>
          <Icon icon={"icon/search-line"} color="neutralGray300"/>
        </div>
      </div>
    </div>
  );
};
