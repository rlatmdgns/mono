import * as Styles from './styles'
import { ErrorMessage, FileInput, ModalLayout } from '@/shared/ui'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import ApplicantFileHeader from '@/modals/applicantFile/components/ApplicantFileHeader'
import ApplicantFileBody from '@/modals/applicantFile/components/ApplicantFileBody'
import ApplicantFileFooter from '@/modals/applicantFile/components/ApplicantFileFooter'
import useCreateApplicantFile from '@/modals/applicantFile/CreateApplicantFile/hooks/useCreateApplicantFile'
import { useRecoilValue } from 'recoil'
import { applicantIdAtom, fileNamesAtom } from '@/modals/ApplicantModal/recoil'
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useValidation } from '@/modals/applicantFile/CreateApplicantFile/hooks/useValidation'
import { useTranslations } from 'next-intl'

interface CreateApplicantFileProps {
  onClose: () => void
}

const CreateApplicantFile = ({ onClose }: CreateApplicantFileProps) => {
  const applicantId = useRecoilValue(applicantIdAtom)
  const fileNames = useRecoilValue(fileNamesAtom)

  const { createApplicantFileMutate } = useCreateApplicantFile()
  const { createApplicantFileSchema } = useValidation()

  const methods = useForm({
    resolver: yupResolver(createApplicantFileSchema(fileNames)),
    mode: 'all',
  })
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = methods

  const handleSubmitForm = async (form: FieldValues) => {
    const { file_name, applicant_file } = form

    createApplicantFileMutate({
      applicant_id: applicantId,
      request_body: {
        file_name,
        is_public: true,
        applicant_file: applicant_file[0],
      },
    })
    onClose()
  }

  const $t = useTranslations('common')

  const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return
    setValue('applicant_file', event.target.files, { shouldValidate: true })
  }

  const handleRemoveFile = () => {
    setValue('applicant_file', undefined, { shouldValidate: true })
  }

  return (
    <ModalLayout isDimmed>
      <FormProvider {...methods}>
        <Styles.Form onSubmit={handleSubmit(handleSubmitForm)}>
          <ApplicantFileHeader title={$t('add_document')} />
          <ApplicantFileBody isFileEssential>
            <FileInput
              files={watch('applicant_file')}
              onChange={handleUploadFile}
              onRemove={handleRemoveFile}
            />
            <ErrorMessage error={errors?.applicant_file} />
          </ApplicantFileBody>
          <ApplicantFileFooter onClose={onClose} textConfirm={$t('save_as')} />
        </Styles.Form>
      </FormProvider>
    </ModalLayout>
  )
}
export default CreateApplicantFile
