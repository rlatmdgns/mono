'use client'

import { Button } from '@/shared/ui'

interface AddMultipleInputButtonProps {
  text: string
  onClick: () => void
  isAddDisabled?: boolean
}

export const AddMultipleInputButton = ({
  text,
  onClick,
  isAddDisabled,
}: AddMultipleInputButtonProps) => {
  return (
    <Button
      disabled={isAddDisabled}
      state="standard"
      size="sm"
      iconSource="icon/plus-line"
      text={text}
      onClick={onClick}
    />
  )
}
