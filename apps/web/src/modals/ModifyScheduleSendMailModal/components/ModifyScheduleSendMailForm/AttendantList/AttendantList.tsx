import { AttendantCheckBoxItem } from '@/interface/schedules'
import { useRecoilValue } from 'recoil'
import { SendInterviewersAtom } from '@/modals/ModifyScheduleSendMailModal/recoil/atom'
import * as Styles from '@/modals/ModifyScheduleSendMailModal/container/SendMemberContainer/styles'
import { useFormContext } from 'react-hook-form'
import { Avatar, CheckBoxIcon } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const AttendantList = () => {
  const { register, setValue, watch } = useFormContext()
  const interviewers = useRecoilValue(SendInterviewersAtom)
  const isAllChecked = watch('send_interviewers')?.length === interviewers.length
  const $t = useTranslations('common')

  const handleAllCheck = () => {
    isAllChecked
      ? setValue('send_interviewers', [])
      : setValue(
          'send_interviewers',
          interviewers.map((interviewer: AttendantCheckBoxItem) => String(interviewer.value)),
        )
  }

  return (
    <Styles.Wrap>
      <Styles.Title>
        <Styles.CheckBoxIconWrapper onClick={handleAllCheck}>
          <CheckBoxIcon checked={isAllChecked} />
        </Styles.CheckBoxIconWrapper>
        <Styles.Info>
          <Styles.InfoTitle>{$t('interviewer')}</Styles.InfoTitle>
          <Styles.Count>
            {watch('send_interviewers').length}/{interviewers.length}
          </Styles.Count>
        </Styles.Info>
      </Styles.Title>
      <Styles.CheckBoxWrap>
        {interviewers.map((interviewer: AttendantCheckBoxItem) => (
          <Styles.CheckBoxRow key={interviewer.label}>
            <Styles.Member>
              <Avatar src={interviewer.image} alt={interviewer.label} size="xs" />
              {interviewer.label}
              <Styles.CheckBox
                {...register('send_interviewers')}
                value={interviewer.value}
                $isActive={watch('send_interviewers').includes(String(interviewer.value))}
              ></Styles.CheckBox>
            </Styles.Member>
          </Styles.CheckBoxRow>
        ))}
      </Styles.CheckBoxWrap>
    </Styles.Wrap>
  )
}

export default AttendantList
