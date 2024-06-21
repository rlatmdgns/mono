import { ModalLayout, Toast } from '@/shared/ui'
import { ModalHeader } from '@repo/ui'
import { CreateFreshManFormContent } from './CreateFreshManFormContent'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { useEffect, useMemo, useState } from 'react'
import {
  FinalStageApplicant,
  FinalStageApplicantResponse,
} from '@/entities/onboarding/types/finalStageApplicant'
import { CreateFreshManRequest } from '@/features/onboarding/type'
import { useCreateAtsFreshMan } from '@/features/onboarding/hooks/useCreateAtsFreshMan'
import { useGetOmsPosting } from '@/entities/onboarding/hooks/useGetOmsPosting'
import { useGetFinalStageApplicant } from '@/entities/onboarding/hooks/useGetFinalStageApplicant'
import { useInView } from 'react-intersection-observer'

interface CreateFreshManModalProps {
  initialFinalStageApplicant: FinalStageApplicantResponse
  onClose: () => void
}

const CreateAtsFreshManModal = ({
  initialFinalStageApplicant,
  onClose,
}: CreateFreshManModalProps) => {
  const [isFirstStep, setIsFirstStep] = useState(true)
  const [isBatchUpdate, setIsBatchUpdate] = useState(false)
  const [postingId, setPostingId] = useState<number | undefined>(undefined)

  const { ref, inView } = useInView()
  const { data: postings } = useGetOmsPosting()
  const {
    data: finalStageApplicantResponse,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = useGetFinalStageApplicant(initialFinalStageApplicant, postingId)
  const { createFreshManMutate } = useCreateAtsFreshMan(onClose)

  const methods = useForm<CreateFreshManRequest>({
    mode: 'all',
    defaultValues: {
      freshmen: [],
    },
  })
  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { isDirty, isValid, errors },
  } = methods

  const finalStageApplicants = useMemo(() => {
    if (!finalStageApplicantResponse) return []
    return finalStageApplicantResponse.pages.flatMap((page) => page.applicants)
  }, [finalStageApplicantResponse])

  const handleNextStep = () => {
    setIsFirstStep(false)
  }

  const handleClose = () => {
    if (isFirstStep) {
      return onClose()
    }
    setIsFirstStep(true)
  }

  const handleUpdateStartDate = () => {
    if (!isBatchUpdate) {
      const hasStartDateIndex = getValues('freshmen').findIndex(
        (man: FinalStageApplicant) => `${man.employment_date || ''}` !== '',
      )
      const updateDate = getValues(`freshmen.${hasStartDateIndex}.employment_date`)
      const updateFields = getValues('freshmen')?.map((man: FinalStageApplicant) => {
        {
          return {
            ...man,
            employment_date: updateDate,
          }
        }
      })
      reset({ freshmen: updateFields })
    }
    setIsBatchUpdate(!isBatchUpdate)
  }

  const handleFilterPosting = (posting_id?: number) => {
    setPostingId(posting_id)
  }

  const handleValidation = () => {
    if (isValid) return
    if (
      !errors.hasOwnProperty('freshmen') ||
      !Array.isArray(errors.freshmen) ||
      errors.freshmen.length < 1
    ) {
      return Toast.error('필수 입력 항목을 모두 입력해주세요.')
    }

    const errorMessageIndex = errors.freshmen.findIndex((error) => !!error)
    const errorMessage =
      errors.freshmen[errorMessageIndex]?.pass_date?.message ||
      errors.freshmen[errorMessageIndex]?.employment_date?.message
    return Toast.error(errorMessage)
  }

  const handleFormSubmit = (form: FieldValues) => {
    const formValues = form.freshmen?.map((applicant: FinalStageApplicant) => {
      const { posting_title, ...result } = applicant
      return result
    })
    createFreshManMutate(formValues)
  }

  const fetchMore = () => {
    if (!inView) {
      return
    }
    void fetchNextPage()
  }

  useEffect(() => {
    fetchMore()
  }, [inView, hasNextPage])

  useEffect(() => {
    refetch()
  }, [postingId])

  return (
    <FormProvider {...methods}>
      <ModalLayout isDimmed onClick={onClose}>
        <div>
          <ModalHeader
            title={isFirstStep ? '신규 입사자 추가하기' : '입사일 설정'}
            subtitle={isFirstStep ? '최종 절차에 있는 지원자만 표기됩니다.' : ''}
            onClick={onClose}
          />
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <CreateFreshManFormContent
              isFirstStep={isFirstStep}
              isDirty={isDirty}
              isBatchUpdate={isBatchUpdate}
              finalStageApplicants={finalStageApplicants}
              postings={postings}
              control={control}
              onNextStep={handleNextStep}
              onClose={handleClose}
              onUpdateStartDate={handleUpdateStartDate}
              onValidation={handleValidation}
              onFilterPosting={handleFilterPosting}
            />
            <div ref={ref} />
          </form>
        </div>
      </ModalLayout>
    </FormProvider>
  )
}

export default CreateAtsFreshManModal
