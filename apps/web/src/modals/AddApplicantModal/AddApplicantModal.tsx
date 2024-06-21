import { usePostingApplicantForm } from '@/entities/build-application/hooks/usePostingApplicantForm'
import { useCreateApplicant } from '@/features/applicant/hooks/useCreateApplicant'
import { Button, ModalLayout } from '@/shared/ui'
import { RecruitApplicationForm } from '@/widgets/recruit-application'
import { useParams } from 'next/navigation'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import * as Styles from './styles'
import { RecruitLoading } from '@/widgets/recruit-application/entities'
import { useEffect } from 'react'
import { applicationFormValidation, initApplicationForm } from '@/widgets/recruit-application/lib'
import { useTranslations } from 'next-intl'

interface AddApplicantModalProps {
  onClose: () => void
}

const AddApplicantModal = ({ onClose }: AddApplicantModalProps) => {
  const pathname = useParams()
  const id = pathname?.id as string

  const $t = useTranslations('announcement_detail.features')

  const { data: customApplicantItems, isFetching } = usePostingApplicantForm(id)
  const { createApplicantMutate } = useCreateApplicant(id, onClose)

  const enterpriseName = customApplicantItems?.enterprise_name || ''
  const policy = customApplicantItems?.terms?.enterprise_required_personal_terms || ''

  const methods = useForm({
    mode: 'onBlur',
  })
  const {
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = methods

  const submitDisabled = !isValid || isSubmitting || !customApplicantItems?.datas

  const handleFormSubmit = async (form: FieldValues) => {
    if (!applicationFormValidation(customApplicantItems, form)) return
    createApplicantMutate(form)
  }

  const initValues = () => {
    reset({
      ...initApplicationForm(customApplicantItems),
      enterprise_select_personal_terms: false,
      enterprise_required_personal_terms: true,
      apply_route: '직접 등록',
      is_directed: true,
    })
  }

  useEffect(() => {
    initValues()
  }, [customApplicantItems])

  return (
    <ModalLayout isDimmed>
      <FormProvider {...methods}>
        <Styles.Wrapper>
          <Styles.Form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
            <Styles.Header>{$t('add_direct_applicant')}</Styles.Header>
            <Styles.Body>
              <Styles.List>
                {isFetching && <RecruitLoading />}
                {!isFetching && (
                  <RecruitApplicationForm
                    customApplicantItems={customApplicantItems?.datas || []}
                    enterpriseName={enterpriseName}
                    policy={policy}
                    isAddDirect
                  />
                )}
              </Styles.List>
            </Styles.Body>
            <Styles.Footer>
              <Button
                type="reset"
                size="sm"
                width="49px"
                state="standard"
                style="mono"
                text="취소"
                onClick={onClose}
              />
              <Button
                disabled={submitDisabled}
                type="submit"
                size="sm"
                width="73px"
                style="fill-strong"
                text="추가"
              />
            </Styles.Footer>
          </Styles.Form>
        </Styles.Wrapper>
      </FormProvider>
    </ModalLayout>
  )
}

export default AddApplicantModal
