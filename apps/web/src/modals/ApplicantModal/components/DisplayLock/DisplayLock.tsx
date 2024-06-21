import * as Styles from './styles'
import { Icon } from '@repo/ui'
import { useTranslations } from 'next-intl'

interface HeaderLockProps {
  isPublic: boolean
}

const DisplayLock = ({ isPublic }: HeaderLockProps) => {
  const $t = useTranslations('messages')
  if (isPublic) return null
  return (
    <Styles.Wrapper>
      <Icon icon="icon/lock-solid" color="white" />
      <Styles.Title>{$t('evaluation_member_access_denied')}</Styles.Title>
    </Styles.Wrapper>
  )
}

export default DisplayLock
