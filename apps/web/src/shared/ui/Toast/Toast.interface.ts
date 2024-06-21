import { IconNames } from "@repo/ui/src/components/Icon";

export interface ToastButtonProps {
  text: string
  icon: IconNames
  onClick: () => void
}
