import { useRecoilValue } from 'recoil'
import { applicantModalSidebarIsFoldAtom } from '@/modals/ApplicantModal/recoil'
import { ApplicantResponse } from '@/services/applicant/getApplicant/getApplicant.interface'
import ApplicantInfoUpdate from '@/modals/ApplicantModal/components/ApplicantInfoUpdate'
import MenuDropdown from './MenuDropdown'
import * as Styles from './styles'
import { useAuthority } from '@/shared/hooks'
import { AUTHORITY } from '@/shared/constants'
import { Badge, Tooltip } from '@/shared/ui'
import { ellipsisText } from '@/shared/lib/utils'
import { useTranslations } from 'next-intl'

interface MenuProps {
  stepName: string
  applicantName: string
  applicant?: ApplicantResponse
  onClose: () => void
}

const ApplicantControlMenu = ({ applicant, stepName, applicantName, onClose }: MenuProps) => {
  const { authority } = useAuthority()
  const isEvaluator = authority === AUTHORITY.EVALUATOR
  const $t = useTranslations()

  const isFold = useRecoilValue(applicantModalSidebarIsFoldAtom)
  const name = applicant?.applicant.applicant_name || applicantName

  if (isFold) return null

  return (
    <Styles.Wrapper>
      <Styles.Content>
        <ApplicantInfoUpdate
          applicant={applicant}
          label={$t('form.name')}
          name={'applicant_name'}
          value={name}
          button={
            <Tooltip text={name} disabled={name.length < 6}>
              <Styles.Name>{ellipsisText(name, 6)}</Styles.Name>
            </Tooltip>
          }
          disabled={isEvaluator}
          options={{
            required: $t('validation.name_required_message'),
            maxLength: {
              value: 16,
              message: $t('validation.name_length_validation_message', { length: 16 }),
            },
          }}
        />
        <Badge text={stepName} />
      </Styles.Content>
      <MenuDropdown onClose={onClose} />
    </Styles.Wrapper>
  )
}

export default ApplicantControlMenu
