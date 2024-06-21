import icons from "../../assets/icons.json";
import { COLORS } from "../../constants";

export type ChipStatus = "info" | "success" | "danger" | "warning" | "default";
export type ChipSize = "sm" | "md";
export type IconNames = keyof typeof icons;
export type colorType = keyof typeof COLORS;

export interface ChipProps {
  readonly status?: ChipStatus;
  readonly size?: ChipSize;
  readonly leadingIcon?: IconNames;
  readonly trailingIcon?: IconNames;
  readonly label: string;
}
