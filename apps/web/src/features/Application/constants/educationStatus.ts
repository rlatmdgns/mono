import { Education } from '@/entities/Application/types/ApplicantRequest'

export const ENTER_TYPE = [
  {
    label: '입학',
    value: '입학',
  },
  {
    label: '편입학',
    value: '편입학',
  },
  {
    label: '재입학',
    value: '재입학',
  },
]

export const LEAVE_TYPE = [
  {
    label: '졸업',
    value: '졸업',
  },
  {
    label: '재학 중',
    value: '재학 중',
  },
  {
    label: '휴학',
    value: '휴학',
  },
  {
    label: '자퇴',
    value: '자퇴',
  },
  {
    label: '제적',
    value: '제적',
  },
  {
    label: '수료',
    value: '수료',
  },
]

export const DEFAULT_DATA: Education = {
  education_type: '',
  name: '',
  major: '',
  is_general_educational: false,
  is_major: false,
  is_minor: false,
  is_double_major: false,
  classfication: '',
  is_transfer: false,
  is_night_school: false,
  minor: '',
  double_major: '',
  line: '',
  minor_line: '',
  double_major_line: '',
  passing_date: undefined,
  period_enrollment: '입학',
  period_graduation: '졸업',
  enrollment_date: undefined,
  graduation_date: undefined,
  grade: 0,
  maximum_grade: 4.5,
}
