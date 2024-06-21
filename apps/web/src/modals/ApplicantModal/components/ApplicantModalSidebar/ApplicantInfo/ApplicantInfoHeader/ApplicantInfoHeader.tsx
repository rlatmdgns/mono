import * as Styles from './styles'
import { Tooltip } from '@/shared/ui'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

const ApplicantInfoHeader = () => {
  const $t = useTranslations()
  return (
    <Styles.Wrapper>
      <Tooltip text={$t('messages.not_access_evaluation_member')} direction="right">
        <Icon icon="icon/lock-solid" color="neutralGray800" />
      </Tooltip>
      <Styles.Title>{$t('common.applicant_information')}</Styles.Title>
    </Styles.Wrapper>
  )
}

export default ApplicantInfoHeader
