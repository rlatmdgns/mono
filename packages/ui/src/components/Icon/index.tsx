import icons from "../../assets/icons.json";
import React, { ReactElement } from "react";
import { COLORS } from "../../constants";

export type IconNames = keyof typeof icons;
export type colorType = keyof typeof COLORS;

export interface IconProps {
  icon: IconNames;
  size?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
  color?: colorType;
}

export const Icon = ({
  icon,
  size = 16,
  style,
  onClick,
  color = "black",
}: IconProps): ReactElement => {
  const path = `${icons[icon].svg}`;
  const fill = COLORS[color];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      style={style}
      onClick={onClick}
    >
      <path d={path} fill={fill} transform="translate(-0.5, 0.5)"></path>
    </svg>
  );
};
