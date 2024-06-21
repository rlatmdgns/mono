import { bodyWrapper } from './style.css'
import { FreshmanSurviveList } from 'features/onboarding/ui/FreshmanSurviveList'
import { FormProvider, useForm } from 'react-hook-form'

interface FreshmanSurveyBodyProps {
  type: string
  survives: any[]
}

export const FreshmanSurveyBody = ({ type, survives }: FreshmanSurveyBodyProps) => {
  const methods = useForm()

  if (type !== 'survey') return null
  return (
    <FormProvider {...methods}>
      <div className={bodyWrapper}>
        {survives.map((field, index) => {
          return (
            <>
              <FreshmanSurviveList key={`survey_list_${index}`} field={field} index={index} />
            </>
          )
        })}
      </div>
    </FormProvider>
  )
}
