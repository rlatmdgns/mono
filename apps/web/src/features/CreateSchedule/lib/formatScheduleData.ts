import { FieldValues } from 'react-hook-form'
import { getDayFormat } from '@/shared/lib/utils'

interface SelectOption {
  [key: string]: any
}

interface ScheduleData {
  values: FieldValues
  currentPlace: {
    type: string
    desc: string
  }
  location: {
    address: string
    detail_address: string
  }
}

export const formatScheduleData = ({ values, currentPlace, location }: ScheduleData) => {
  const getValues = (members: SelectOption[]) => {
    return members?.map((member) => member.value)
  }

  return {
    posting_id: values.posting.value,
    schedule_alarm: values.schedule_alarm.value,
    schedule_address: currentPlace.type === 'contact' ? location.address : currentPlace.desc,
    schedule_detail_address: currentPlace.type === 'contact' ? location.detail_address : '',
    interview_guide: values.interview_guide,
    schedule_title: values.schedule_title,
    schedule_applicant: getValues(values.schedule_applicant),
    schedule_attendant: getValues(values.schedule_attendant),
    schedule_date: getDayFormat(values.date, 'YYYY-MM-DD'),
    start_time: getDayFormat(values.start_time, 'HH:mm'),
    end_time: getDayFormat(values.end_time, 'HH:mm'),
    interview_type: currentPlace.type,
  }
}
