import { Icon } from '@repo/ui'
import { DeleteButton } from './DeleteButton'
import { SelectedNumber } from './SelectedNumber'
import { innerWrap, wrapper, closeButton } from './style.css'

interface SelectToolbarProps {
  number: number
  onClose: () => void
}

export const SelectToolbar = ({ number, onClose }: SelectToolbarProps) => {
  if (number < 1) return null
  return (
    <div className={wrapper}>
      <SelectedNumber number={number} />
      <div className={innerWrap}>
        <DeleteButton />
      </div>
      <button className={closeButton} onClick={onClose} type="button">
        <Icon icon="icon/cancle-line1" color="neutralGray400" size={18} />
      </button>
    </div>
  )
}
