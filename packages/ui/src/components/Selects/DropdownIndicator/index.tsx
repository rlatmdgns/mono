"use client";

import { dropdownIndicatorArrow } from "./styles.css";
import { components, DropdownIndicatorProps } from "react-select";
import { colorType, Icon } from "../../Icon";

export const DropdownIndicator = (props: DropdownIndicatorProps) => {
  const getIconColor = (): colorType => {
    if (props.selectProps.isDisabled) {
      return "neutralGray400";
    }
    if (props.selectProps.menuIsOpen) {
      return "blue500";
    }
    return "neutralGray800";
  };

  return (
    <components.DropdownIndicator {...props}>
      <span
        className={dropdownIndicatorArrow({
          isMenuOpen: props.selectProps.menuIsOpen,
        })}
      >
        <Icon icon="icon/down-solid" color={getIconColor()}/>
      </span>
    </components.DropdownIndicator>
  );
};
