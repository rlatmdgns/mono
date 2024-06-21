import * as yup from 'yup'
import { Toast } from '@/shared/ui'

export const createScheduleSchema = yup.object().shape({
  schedule_title: yup.string().required('제목 입력해 주세요.'),
  date: yup.date().required('날짜를 선택해 주세요.'),
  start_time: yup
    .date()
    .required('시작 시간을 선택해 주세요.')
    .test(
      'start-time-check',
      () => Toast.error('시작 시간은 종료 시간을 넘어설 수 없습니다.'),
      (start_time, { parent }) => {
        const end_time = parent.end_time
        if (!end_time) return true
        return start_time <= end_time
      },
    ),
  end_time: yup
    .date()
    .required('종료 시간을 선택해 주세요.')
    .test(
      'end-time-check',
      () => {
        Toast.error('종료 시간은 시작 시간 이전으로 설정할 수 없습니다.')
      },
      (end_time, { parent }) => {
        const start_time = parent.start_time
        if (!start_time) return true
        return end_time >= start_time
      },
    ),
  posting: yup.object().required('공고를 선택해 주세요.'),
  interview_guide: yup.string(),
  schedule_applicant: yup.array().min(1).required('지원자를 선택해 주세요.'),
  schedule_attendant: yup.array().min(1).required('면접관을 선택해 주세요.'),
  schedule_alarm: yup.object().required('알림 사간을 선택해 주세요.'),
})
