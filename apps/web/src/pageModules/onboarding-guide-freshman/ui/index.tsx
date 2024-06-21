'use client'

import { FreshmanSequenceList, FreshmanWelcomeBanner } from '@/entities/onboarding'
import { ONBOARDING_GUIDE_INITIAL_DATA } from '@/entities/onboarding/dummy'
import { wrapper } from './styles.css'

export default function OnboardingGuideFreshmanPage() {
  return (
    <div className={wrapper}>
      <FreshmanWelcomeBanner
        freshmanName={ONBOARDING_GUIDE_INITIAL_DATA.name}
        dayOfJoin={ONBOARDING_GUIDE_INITIAL_DATA.day_of_join}
      />
      <FreshmanSequenceList sequences={ONBOARDING_GUIDE_INITIAL_DATA.sequences} />
    </div>
  )
}
