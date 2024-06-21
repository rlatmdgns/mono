import * as Styles from './styles'
import { useRecoilState, useRecoilValue } from 'recoil'
import ModifyScheduleSendMailFooter from '@/modals/ModifyScheduleSendMailModal/components/ModifyScheduleSendMailFooter'
import {
  SendAlarmAtom,
  SendInterviewersAtom,
} from '@/modals/ModifyScheduleSendMailModal/recoil/atom'
import SendMemberContainer from '@/modals/ModifyScheduleSendMailModal/container/SendMemberContainer'
import { FormProvider, useForm } from 'react-hook-form'
import { SendInterviewer } from '@/interface/interview'
import { ScheduleDetailAtom } from '@/features/InterviewSchedule'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

interface ModifyScheduleSendMailFormProps {
  postData: any
  onClose: () => void
  modifyScheduleClose: () => void
}

const ModifyScheduleSendMailForm = ({
  postData,
  onClose,
  modifyScheduleClose,
}: ModifyScheduleSendMailFormProps) => {
  const [sendAlarm, setSendAlarm] = useRecoilState(SendAlarmAtom)
  const scheduleDetail = useRecoilValue(ScheduleDetailAtom)
  const sendInterviewers = useRecoilValue(SendInterviewersAtom)
  const scheduleApplicant = scheduleDetail?.schedule_applicant
  const defaultApplicants = scheduleApplicant
    ?.filter((applicant) => !applicant.is_deleted)
    .map((applicant) => String(applicant.applicant_id))

  const defaultInterviews = sendInterviewers?.map((interview: SendInterviewer) =>
    String(interview.value),
  )
  const scheduleId = String(scheduleDetail?.schedule_id)
  const $t = useTranslations('schedule_mail')

  const methods = useForm({
    defaultValues: {
      send_applicants: defaultApplicants,
      send_interviewers: defaultInterviews,
    },
  })

  if (!scheduleId) return

  const handleSendAlarmStatus = (status: boolean) => {
    setSendAlarm(status)
  }

  return (
    <FormProvider {...methods}>
      <Styles.Form>
        <Styles.MailWrap $isActive={!sendAlarm} onClick={() => handleSendAlarmStatus(false)}>
          <Icon icon="icon/cancle-solid" color={sendAlarm ? 'neutralGray500' : 'red500'} />
          <Styles.MailTextBox>
            <Styles.MailNotSendTitle $isActive={!sendAlarm}>
              {$t('not_send')}
            </Styles.MailNotSendTitle>
            <Styles.MailTypeDesc>{$t('not_send_mail_description')}</Styles.MailTypeDesc>
          </Styles.MailTextBox>
        </Styles.MailWrap>
        <Styles.MailWrap $isActive={sendAlarm} onClick={() => handleSendAlarmStatus(true)}>
          <Icon icon="icon/send-solid" color={sendAlarm ? 'blue500' : 'neutralGray500'} />
          <Styles.MailTextBox>
            <Styles.MailSendTitle $isActive={sendAlarm}>{$t('send')}</Styles.MailSendTitle>
            <Styles.MailTypeDesc>{$t('send_mail_description')}</Styles.MailTypeDesc>
            <SendMemberContainer />
          </Styles.MailTextBox>
        </Styles.MailWrap>
        <ModifyScheduleSendMailFooter
          postData={postData}
          scheduleId={scheduleId}
          onClose={onClose}
          modifyScheduleClose={modifyScheduleClose}
        />
      </Styles.Form>
    </FormProvider>
  )
}
export default ModifyScheduleSendMailForm
