"use client";

import { colorType, Icon } from "../Icon";
import { ButtonProps } from "./Button.interface";
import { getIconColor } from "./Button.factory";
import { buttonLoading, wrapper } from "./styles.css";

export const Button = ({
                         type = "button",
                         state = "primary",
                         style = "fill-strong",
                         size = "md",
                         width,
                         text,
                         leadingIcon,
                         trailingIcon,
                         leadingIconColor,
                         trailingIconColor,
                         href,
                         isNewTab = true,
                         isLoading = false,
                         disabled = false,
                         onClick,
                         onMouseEnter,
                         onMouseLeave,
                       }: ButtonProps) => {
  const iconColor = getIconColor(state, style, disabled) as colorType;
  const getLeadingIconColor = () => {
    if (!leadingIconColor) return iconColor;
    return leadingIconColor as colorType;
  };

  const getTrailingIconColor = () => {
    if (!trailingIconColor) return iconColor;
    return trailingIconColor as colorType;
  };

  const handleClick = () => {
    if (!onClick) return;
    onClick();
  };

  const handleMouseEnter = () => {
    if (!onMouseEnter) return;
    onMouseEnter();
  };

  const handleMouseLeave = () => {
    if (!onMouseLeave) return;
    onMouseLeave();
  };

  if (isLoading && !disabled) {
    return (
      <button type={!href ? type : undefined} disabled={disabled}>
        <div
          className={buttonLoading({
            size,
            state,
            style,
          })}
          data-testid="loading-spinner"
        />
      </button>
    );
  }

  if (href) {
    return (
      <a
        className={wrapper({
          size,
          state,
          style,
        })}
        style={{width: `${width}px`}}
        href={href}
        target={isNewTab ? "_blank" : "_self"}
      >
        {leadingIcon && (
          <Icon icon={leadingIcon} color={getLeadingIconColor()}/>
        )}
        {text && <span>{text}</span>}
        {trailingIcon && (
          <Icon icon={trailingIcon} color={getTrailingIconColor()}/>
        )}
      </a>
    );
  }

  return (
    <button
      className={wrapper({
        size,
        state,
        style,
      })}
      style={{width: `${width}px`}}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {leadingIcon && <Icon icon={leadingIcon} color={getLeadingIconColor()}/>}
      {text && <span>{text}</span>}
      {trailingIcon && (
        <Icon icon={trailingIcon} color={getTrailingIconColor()}/>
      )}
    </button>
  );
};
