import SelectScheduleContainer from '@/app/[locale]/select-schedule/[id]/[applicant-id]/_container'

interface SelectScheduleIdPageProps {
  params: {
    'applicant-id': string
    id: string
  }
}

export default function SelectScheduleIdPage({ params }: SelectScheduleIdPageProps) {
  return <SelectScheduleContainer applicantId={params['applicant-id']} interviewCode={params.id} />
}
