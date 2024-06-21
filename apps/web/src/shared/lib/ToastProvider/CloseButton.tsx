import { ToastContentProps } from 'react-toastify'
import { IconBoxButton } from '@/shared/ui'

const CloseButton = ({ closeToast }: Partial<ToastContentProps>) => {
  return (
    <IconBoxButton
      size="xs"
      state="standard"
      style="mono"
      onClick={closeToast}
      icon="icon/cancle-line1"
    />
  )
}

export default CloseButton
