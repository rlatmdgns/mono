import { Applicant } from '@/interface/applicants'

export interface RequestInterviewProps {
  id: string
  title: string
  applicants: Applicant[]
  children?: React.ReactNode
  onClose: () => void
}
