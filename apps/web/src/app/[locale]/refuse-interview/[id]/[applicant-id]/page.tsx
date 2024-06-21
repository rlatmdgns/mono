import RefuseScheduleContainer from '@/app/[locale]/refuse-interview/[id]/[applicant-id]/_container'

interface RefuseScheduleIdPageProps {
  params: {
    'applicant-id': string
    id: string
  }
}

export default function RefuseScheduleIdPage({ params }: RefuseScheduleIdPageProps) {
  return <RefuseScheduleContainer applicantId={params['applicant-id']} interviewCode={params.id} />
}
