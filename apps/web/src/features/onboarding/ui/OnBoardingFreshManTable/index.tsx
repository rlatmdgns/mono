import { container, wrapper } from './styles.css'
import { Freshman, freshmanData } from '@/entities/onboarding/types/freshman'
import { FreshManTableHeader } from './FreshManTableHeader'
import { FreshManTableBody } from './FreshManTableBody'
import { FormProvider, useForm } from 'react-hook-form'
import { SelectToolbar } from '@/features/onboarding'

interface OnBoardingFreshManTableProps {
  initialData: Freshman[]
}

export const OnBoardingFreshManTable = ({ initialData }: OnBoardingFreshManTableProps) => {
  const methods = useForm<{
    freshmen: freshmanData[]
  }>({
    defaultValues: {
      freshmen: [],
    },
  })
  const { control, reset, watch } = methods
  const freshmen = [...initialData]
  const selectedFreshmenLength = watch('freshmen').length

  const handleReset = () => reset({ freshmen: [] })

  return (
    <FormProvider {...methods}>
      <div className={wrapper}>
        <div className={container}>
          <FreshManTableHeader onboardingFreshman={freshmen} control={control} />
          <FreshManTableBody freshmen={freshmen} control={control} />
          <SelectToolbar onClose={handleReset} number={selectedFreshmenLength} />
        </div>
      </div>
    </FormProvider>
  )
}
