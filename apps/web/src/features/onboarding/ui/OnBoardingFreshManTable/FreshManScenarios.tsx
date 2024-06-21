import { scenarioChipBox } from './styles.css'
import { Button } from '@repo/ui'
import { FreshManScenarioSummary } from './FreshManScenarioSummary'
import { FreshMenScenario } from '@/entities/onboarding/types'
import { FreshManFirstScenario } from '@/features/onboarding/ui/OnBoardingFreshManTable/FreshManFirstScenario'
import { useRouter } from 'next/navigation'

interface FreshManTableBodyProps {
  name: string
  scenarios: FreshMenScenario[]
}

export const FreshManScenarios = ({ name, scenarios }: FreshManTableBodyProps) => {
  const router = useRouter()

  const handleEdit = () => {
    router.push('/create-scenario?isPublish')
  }

  return (
    <div className={scenarioChipBox}>
      <FreshManFirstScenario scenarios={scenarios} />
      <FreshManScenarioSummary scenarios={scenarios} />
      {!!scenarios?.length && (
        <Button text="온보딩 편집" trailingIcon="icon/right-line" size="sm" onClick={handleEdit} />
      )}
    </div>
  )
}
