import { Icon, IconNames } from '../Icon'
import { ModalFooter } from '../ModalFooter'
import { contents, iconWrapper, subtitleStyle, titleStyle, wrapper } from './styles.css'

interface ConfirmModalProps {
  title: string
  subtitle?: string
  icon?: IconNames
  children: React.ReactNode
}

export const ConfirmModal = ({ icon, title, subtitle, children }: ConfirmModalProps) => {
  return (
    <div className={wrapper}>
      <div className={contents}>
        {icon && (
          <div className={iconWrapper}>
            <Icon icon={icon} size={20} />
          </div>
        )}
        <p className={titleStyle}>{title}</p>
        {subtitle && <p className={subtitleStyle}>{subtitle}</p>}
      </div>
      <ModalFooter>{children}</ModalFooter>
    </div>
  )
}
