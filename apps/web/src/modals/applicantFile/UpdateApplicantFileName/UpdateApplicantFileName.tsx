import * as Styles from './styles'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import ApplicantFileHeader from '@/modals/applicantFile/components/ApplicantFileHeader'
import ApplicantFileBody from '@/modals/applicantFile/components/ApplicantFileBody'
import ApplicantFileFooter from '@/modals/applicantFile/components/ApplicantFileFooter'
import { ModalLayout, Tooltip } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useRecoilValue } from 'recoil'
import { applicantNameAtom } from '@/modals/ApplicantModal/recoil'
import useUpdateApplicantFileName from '@/modals/applicantFile/UpdateApplicantFileName/hooks/useUpdateApplicantFileName'
import React from 'react'
import { useTranslations } from 'next-intl'

interface CreateApplicantFileProps {
  onClose: () => void
  file_name: string
  id: number
}

const UpdateApplicantFileName = ({ onClose, id, file_name }: CreateApplicantFileProps) => {
  const applicantName = useRecoilValue(applicantNameAtom)
  const { updateApplicantFileNameMutate } = useUpdateApplicantFileName(`${id}`)
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      file_name: file_name,
    },
  })
  const { handleSubmit } = methods

  const fileNameWithUnderBar = file_name.replace(/ /g, '_')
  const fileName = `${applicantName}_${fileNameWithUnderBar}.pdf`

  const $t = useTranslations()
  const handleSubmitForm = (form: FieldValues) => {
    const { file_name } = form
    updateApplicantFileNameMutate({ file_name: file_name })
    onClose()
  }

  return (
    <ModalLayout isDimmed>
      <FormProvider {...methods}>
        <Styles.Form onSubmit={handleSubmit(handleSubmitForm)}>
          <ApplicantFileHeader title={$t('applicant_file.file_modify')}>
            <Tooltip text={$t('messages.upload_file_not_change')} direction="right">
              <Icon icon="icon/info-solid" color="neutralGray300" />
            </Tooltip>
          </ApplicantFileHeader>
          <ApplicantFileBody>
            <Styles.FileBox>
              <Icon icon="icon/document-solid" color="blue500" />
              <Styles.FileText>{fileName}</Styles.FileText>
            </Styles.FileBox>
          </ApplicantFileBody>
          <ApplicantFileFooter onClose={onClose} />
        </Styles.Form>
      </FormProvider>
    </ModalLayout>
  )
}

export default UpdateApplicantFileName
