import { Button } from '@/shared/ui'
import { IconNames } from "@repo/ui/src/components/Icon";

interface ToastButtonProps {
  button?: {
    icon: IconNames
    text: string
    onClick: () => void
  }
  state: 'primary' | 'warning'
}

export const ToastButton = ({button, state}: ToastButtonProps) => {
  if (!button) return null

  const {onClick, icon, text} = button

  return (
    <Button
      onClick={onClick}
      iconSource={icon}
      text={text}
      state={state}
      size="xs"
      style="fill-weak"
      width="fit-content"
    />
  )
}
