import { Icon } from '@repo/ui'
import { title, topWrapper } from './style.css'

interface SceneMemberSelectorHeaderProps {
  onClose: () => void
}

export const SceneMemberSelectorHeader = ({ onClose }: SceneMemberSelectorHeaderProps) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <div className={topWrapper}>
      <span className={title}>담당자</span>
      <Icon icon="icon/cancle-line1" color="neutralGray400" size={12} onClick={handleClose} />
    </div>
  )
}
