import { Badge } from '@/shared/ui'

interface StateBadgesProps {
  isTransfer?: boolean
  isNightSchool?: boolean
  periodEnrollment: string | null
  periodGraduation: string
}

export const StateBadge = ({
  isTransfer,
  isNightSchool,
  periodEnrollment,
  periodGraduation,
}: StateBadgesProps) => {
  const Transfer = () => {
    switch (isTransfer) {
      case false:
        return null
      default:
        return <Badge text="편입" type="gray" />
    }
  }

  const NightSchool = () => {
    switch (isNightSchool) {
      case false:
        return null
      default:
        return <Badge text="야간" type="gray" />
    }
  }

  const PeriodEnrollment = () => {
    switch (periodEnrollment) {
      case null:
        return null
      case '':
        return null
      case '입학':
        return null
      default:
        return <Badge text={periodEnrollment} type="gray" />
    }
  }

  const PeriodGraduation = () => {
    switch (periodGraduation) {
      case null:
        return null
      case '졸업':
        return <Badge text={periodGraduation} type="standard" />
      default:
        return <Badge text={periodGraduation} type="success" />
    }
  }

  return (
    <>
      <Transfer />
      <NightSchool />
      <PeriodEnrollment />
      <PeriodGraduation />
    </>
  )
}
