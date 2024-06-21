import { Button, IconButton } from '@/shared/ui'

interface IntegrationButtonProps {
  isConnected: boolean
  isOpen: boolean
  onOpen: () => void
  onClick: () => void
}

export const IntegrationButton = ({
  isConnected,
  isOpen,
  onOpen,
  onClick,
}: IntegrationButtonProps) => {
  if (!isConnected) {
    return <Button text="연동하기" width="68px" size="xs" onClick={onClick} />
  }

  return (
    <IconButton
      icon={isOpen ? 'icon/up-line' : 'icon/down-line'}
      color="neutralGray800"
      onClick={onOpen}
    />
  )
}
