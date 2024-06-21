import { OnBoardingPage } from '@/pageModules/onboarding/ui'
import { getServerFreshMen } from '@/entities/onboarding/api/getSeverFreshMen'
import { getSeverFinalStageApplicant } from '@/entities/onboarding/api/getSeverFinalStageApplicant'

export default async function Onboarding() {
  const initialData = await getServerFreshMen()
  const initFinalStageApplicant = await getSeverFinalStageApplicant()

  return (
    <OnBoardingPage
      initialData={initialData}
      initialFinalStageApplicant={initFinalStageApplicant}
    />
  )
}
