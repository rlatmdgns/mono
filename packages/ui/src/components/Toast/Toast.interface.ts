import { IconNames } from "../Icon";

export interface ToastButtonProps {
  text: string;
  icon: IconNames;
  onClick: () => void;
}
