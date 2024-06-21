export interface LanguageSelectOptions {
  name: string
  score?: number
  level?: string[]
  limits?: string[]
}

export type LanguageSelect = LanguageSelectOptions[]

export interface Languages {
  [key: string]: LanguageSelect
}
