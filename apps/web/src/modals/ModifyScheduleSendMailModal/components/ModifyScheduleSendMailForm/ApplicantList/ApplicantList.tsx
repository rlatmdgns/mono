import * as Styles from '@/modals/ModifyScheduleSendMailModal/container/SendMemberContainer/styles'
import { useRecoilValue } from 'recoil'
import { useFormContext } from 'react-hook-form'
import { CheckBoxIcon, Tooltip } from '@/shared/ui'
import { ScheduleDetailAtom } from '@/features/InterviewSchedule'
import { useTranslations } from 'next-intl'

const ApplicantList = () => {
  const scheduleDetail = useRecoilValue(ScheduleDetailAtom)
  const scheduleApplicant = scheduleDetail?.schedule_applicant
  const notDeletedApplicant = scheduleApplicant?.filter((applicant) => !applicant.is_deleted)
  const { register, setValue, watch } = useFormContext()
  const isAllChecked = watch('send_applicants')?.length === notDeletedApplicant?.length
  const $t = useTranslations()

  if (!scheduleApplicant) return

  const handleAllCheck = () => {
    isAllChecked
      ? setValue('send_applicants', [])
      : setValue(
          'send_applicants',
          notDeletedApplicant?.map((applicant: any) => String(applicant.applicant_id)),
        )
  }

  return (
    <Styles.Wrap>
      <Styles.Title>
        <Styles.CheckBoxIconWrapper onClick={handleAllCheck}>
          <CheckBoxIcon checked={isAllChecked} />
        </Styles.CheckBoxIconWrapper>
        <Styles.Info>
          <Styles.InfoTitle>{$t('common.applicant')}</Styles.InfoTitle>
          <Styles.Count>
            {watch('send_applicants').length}/{notDeletedApplicant?.length}
          </Styles.Count>
        </Styles.Info>
      </Styles.Title>
      <Styles.CheckBoxWrap>
        {scheduleApplicant.map((applicant: any) => (
          <>
            {applicant.is_deleted && (
              <Styles.CheckBoxRow>
                <Styles.Member>
                  {`${applicant.applicant_name} ${applicant.is_deleted && `(${$t('common.deleted')})`}`}
                  <Styles.CheckBox value={applicant.applicant_id}></Styles.CheckBox>
                </Styles.Member>
              </Styles.CheckBoxRow>
            )}
            {!applicant.is_deleted && (
              <Tooltip
                text={applicant.applicant_email}
                key={applicant.applicant_name}
                direction="right"
              >
                <Styles.CheckBoxRow>
                  <Styles.Member>
                    {applicant.applicant_name}
                    <Styles.CheckBox
                      {...register('send_applicants')}
                      value={applicant.applicant_id}
                      $isActive={watch('send_applicants').includes(String(applicant.applicant_id))}
                    ></Styles.CheckBox>
                  </Styles.Member>
                </Styles.CheckBoxRow>
              </Tooltip>
            )}
          </>
        ))}
      </Styles.CheckBoxWrap>
    </Styles.Wrap>
  )
}

export default ApplicantList
