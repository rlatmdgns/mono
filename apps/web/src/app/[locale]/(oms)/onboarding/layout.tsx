import React from 'react'
import { OnboardingSidebarLayout } from '@/widgets/onboarding/ui/OnboardingSidebarLayout'

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return <OnboardingSidebarLayout>{children}</OnboardingSidebarLayout>
}
