export interface OnboardingGuide {
  name: string
  day_of_join: string
  sequences: GuideSequence[]
}

export interface GuideSequence {
  id: number
  scenes: GuideScene[]
}

export interface GuideScene {
  id: number
  title: string
  is_completed: boolean
  due_date: string
  contents: any
}
