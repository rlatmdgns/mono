import { FreshMenScenario } from '@/entities/onboarding/types'

export const getScenarioSummaryText = (scenarios: FreshMenScenario[]) => {
  const slicedArray = scenarios.slice(1)
  return slicedArray
    .map((item) => {
      const isChanged = item.is_changed ? '(수정됨)' : ''
      return `${item.title}${isChanged}`
    })
    .join(', ')
}
