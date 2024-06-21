import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { getClosingStatusContent } from '@/modals/evaluation/EvaluationTableClosingStatusModal/EvaluationTableClosingStatusModal.factory'
import { EvaluationTableStatus } from '@/services/evaluation/getEvaluationTableApplicantStatus/getEvaluationTableApplicantStatus.interface'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'

interface ApplicantCardItemProps {
  applicantName: string
  defaultTableApplicantStatus: EvaluationTableStatus
  evaluationMembersCount: number
  evaluationCount: number
  applicantId: string
}

const ApplicantCardItem = ({
  applicantName,
  defaultTableApplicantStatus,
  evaluationMembersCount,
  evaluationCount,
  applicantId,
}: ApplicantCardItemProps) => {
  const { watch, setValue } = useFormContext()
  const isClosed = defaultTableApplicantStatus === 'TA_CLOSED'
  const isSelected = watch('applicant_ids').includes(applicantId)
  const isClosing = (isClosed && !isSelected) || (!isClosed && isSelected)
  const isCompleted = evaluationCount === evaluationMembersCount
  const TableApplicantStatus = isClosing
    ? 'TA_CLOSED'
    : isCompleted
      ? 'TA_COMPLETE'
      : 'TA_PROCEEDING'

  const { icon, text, bgColor } = getClosingStatusContent(TableApplicantStatus)
  const $t = useTranslations('evaluation')

  const handleClosingToggle = () => {
    if (!isSelected) {
      return setValue('applicant_ids', [...watch('applicant_ids'), applicantId], {
        shouldDirty: true,
      })
    }
    return setValue(
      'applicant_ids',
      watch('applicant_ids').filter((id: string) => id !== applicantId),
      { shouldDirty: true },
    )
  }

  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.IconBox $bgColor={bgColor}>{icon}</Styles.IconBox>
        <Styles.Content>
          <Styles.ApplicantName>{applicantName}</Styles.ApplicantName>
          <Styles.ClosingStatus>
            {text}
            <Styles.Count>
              {$t('submit_complete_count', {
                evaluationCount,
                evaluationMembersCount,
              })}
            </Styles.Count>
          </Styles.ClosingStatus>
        </Styles.Content>
      </Styles.Container>
      {isClosing ? (
        <Button
          onClick={handleClosingToggle}
          text={$t('close_cancel')}
          state="standard"
          style="fill-weak"
          size="xs"
          width="fit-content"
        />
      ) : (
        <Button
          onClick={handleClosingToggle}
          text={$t('close')}
          style="fill-weak"
          size="xs"
          width="fit-content"
        />
      )}
    </Styles.Wrapper>
  )
}

export default ApplicantCardItem
