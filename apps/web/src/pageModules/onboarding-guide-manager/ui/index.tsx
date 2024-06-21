'use client'

import { ManagerSequenceList, ManagerWelcomeBanner } from '@/entities/onboarding'
import { wrapper } from './styles.css'
import { ONBOARDING_GUIDE_INITIAL_DATA_FOR_MANAGER } from '@/entities/onboarding/dummy'

export default function OnboardingGuideManagerPage() {
  return (
    <div className={wrapper}>
      <ManagerWelcomeBanner />
      <ManagerSequenceList sequences={ONBOARDING_GUIDE_INITIAL_DATA_FOR_MANAGER} />
    </div>
  )
}
