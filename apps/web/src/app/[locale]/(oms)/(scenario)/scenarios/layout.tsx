import React from 'react'
import { OnboardingSidebarLayout } from '@/widgets/onboarding/ui/OnboardingSidebarLayout'

export default function ScenariosLayout({ children }: { children: React.ReactNode }) {
  return <OnboardingSidebarLayout>{children}</OnboardingSidebarLayout>
}
