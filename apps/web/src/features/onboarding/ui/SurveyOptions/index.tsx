import { SurveyRadioOption } from '@/features/onboarding'
import { SurveyCheckboxOption } from '@/features/onboarding/ui/SurveyOptions/SurveyCheckboxOption'
import { SurveyEssayOption } from '@/features/onboarding/ui/SurveyOptions/SurveyEssayOption'

interface SurveyOptionsProps {
  index: number
  type: any
}

export const SurveyOptions = ({ index, type }: SurveyOptionsProps) => {
  return (
    <>
      <SurveyRadioOption index={index} />
      <SurveyCheckboxOption index={index} />
      <SurveyEssayOption index={index} />
    </>
  )
}
