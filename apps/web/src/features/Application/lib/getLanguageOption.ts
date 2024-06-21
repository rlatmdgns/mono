import LANGUAGES from '@/features/Application/constants/languageSelect'

interface LanguageOptions {
  name: string
  score?: number
  level?: string[]
}

export const getLanguageOption = (languageKey: string) => {
  const key = `LANGUAGE_SELECT_${languageKey}`
  if (!LANGUAGES[key]) return []

  return LANGUAGES[key].map((language: LanguageOptions) => {
    return {
      label: language.name,
      value: language.name,
      maxScore: !language.score ? 0 : language.score,
      levels: !language.level
        ? []
        : language.level.map((level: string) => {
            return {
              label: level,
              value: level,
            }
          }),
    }
  })
}
