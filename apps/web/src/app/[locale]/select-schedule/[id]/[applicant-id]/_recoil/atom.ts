import { atom } from 'recoil'
import { RequestInterviewResponse } from '@/interface/interview'

export const InterviewCodeAtom = atom({
  key: 'interviewCode',
  default: '',
})

export const ApplicantIdAtom = atom({
  key: 'applicantId',
  default: '',
})

export const InterviewDateAtoms = atom<string[]>({
  key: 'interviewDate',
  default: [],
})

export const InterviewResponseAtoms = atom({
  key: 'interviewResponse',
  default: false,
})

export const InterviewResponseDataAtoms = atom<RequestInterviewResponse>({
  key: 'interviewResponseData',
  default: {
    enterprise_name: '',
    posting_title: '',
    interview_location: '',
    interview_date: '',
    applicant_name: '',
    applicant_phone: '',
    applicant_email: '',
    application_date: '',
  },
})
