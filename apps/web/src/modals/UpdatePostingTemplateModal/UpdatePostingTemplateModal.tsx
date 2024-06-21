import CreatePostingField from '@/app/[locale]/(posting)/_components/CreatePostingField'
import { useTemplateContent } from '@/shared/hooks'
import { Button, IconButton, ModalLayout } from '@/shared/ui'
import React, { useEffect } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as Styles from './styles'
import {
  CurrentContactPlaceAtom,
  CurrentInterviewPlaceAtom,
} from '@/shared/ui/LocationSelect/recoil/atom'
import { useTranslations } from 'next-intl'
import { useCreatePostingFieldConstants } from '@/app/[locale]/(posting)/_components/CreatePostingField/hooks/useCreatePostingFieldConstants'
import { useGetUtils } from '@/app/[locale]/(posting)/hooks/useGetUtils'

interface Props {
  onClose: () => void
  title: string
  onSubmit: (values: FieldValues) => void
  id: number
}

const UpdatePostingTemplateModal = ({ onClose, title, onSubmit, id }: Props) => {
  const $t = useTranslations('common')
  const { data } = useTemplateContent(id)
  const method = useForm()
  const { isPostingValidation } = useGetUtils()

  const setCurrentPlace = useSetRecoilState(CurrentInterviewPlaceAtom)
  const [currentContactPlace, setCurrentContactPlace] = useRecoilState(CurrentContactPlaceAtom)
  const { FIELD_OF_EMPLOYMENT } = useCreatePostingFieldConstants()

  const field = FIELD_OF_EMPLOYMENT.filter(
    (field) => field.label === data?.template_contents.posting_field,
  )[0]

  const setDefaultValues = () => {
    if (!data) return
    const contents = data?.template_contents
    method.reset({
      ...contents,
      min_experience_years: contents?.min_experience_years || undefined,
      max_experience_years: contents?.max_experience_years || undefined,
      template_title: data?.template_title,
      posting_field: field,
    })
    method.setValue('posting_work_place', contents?.posting_work_place)
    method.setValue('posting_work_place_detail', contents?.posting_work_place_detail)

    if (!contents?.posting_work_place) return
    setCurrentPlace({
      type: 'contact',
      desc: contents?.posting_work_place_detail
        ? `${contents?.posting_work_place} ${contents?.posting_work_place_detail ? contents?.posting_work_place_detail : ''}`.trim()
        : contents.posting_work_place.trim(),
    })

    setCurrentContactPlace({
      address: contents?.posting_work_place,
      detail_address: contents?.posting_work_place_detail,
    })
  }

  useEffect(() => {
    setDefaultValues()
  }, [data])

  useEffect(() => {
    method.setValue('posting_work_place', currentContactPlace?.address)
    method.setValue('posting_work_place_detail', currentContactPlace?.detail_address)
  }, [currentContactPlace])

  const handleSubmit = (values: FieldValues) => {
    if (!isPostingValidation(values)) return

    const payload = {
      template_title: values.template_title,
      template_contents: {
        ...values,
        posting_field: values.posting_field.label,
      },
    }
    onSubmit(payload)
    onClose()
  }

  return (
    <ModalLayout isDimmed>
      <FormProvider {...method}>
        <Styles.Form onSubmit={method.handleSubmit(handleSubmit)} noValidate>
          <Styles.Header>
            {title}
            <IconButton icon="icon/cancle-line1" onClick={onClose} />
          </Styles.Header>
          <Styles.Inner>
            <CreatePostingField isTemplate />
          </Styles.Inner>
          <Styles.Footer>
            <Button
              size="sm"
              width="50px"
              text={$t('cancel')}
              style="mono"
              state="standard"
              onClick={onClose}
            />
            <Button type="submit" size="sm" width="72px" text={id ? $t('modify') : $t('save')} />
          </Styles.Footer>
        </Styles.Form>
      </FormProvider>
    </ModalLayout>
  )
}

export default UpdatePostingTemplateModal
