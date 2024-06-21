import * as Styles from './styles'
import { useFormContext } from 'react-hook-form'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { fileNamesAtom } from '@/modals/ApplicantModal/recoil'
import { ErrorMessage, TextInput } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface ApplicantFileBodyProps {
  children?: React.ReactNode
  isFileEssential?: boolean
}

const ApplicantFileBody = ({ isFileEssential, children }: ApplicantFileBodyProps) => {
  const fileNames = useRecoilValue(fileNamesAtom)
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const hasFileName = (file_name: string) => {
    return fileNames.some((name) => name === file_name)
  }

  const $t = useTranslations()
  return (
    <Styles.Wrapper>
      <Styles.InputBox>
        <Styles.Text $isEssential>{$t('applicant_file.file_input_text')}</Styles.Text>
        <TextInput
          width="100%"
          placeholder={$t('applicant_file.file_input_placeholder')}
          maxLength={20}
          register={register('file_name', {
            required: $t('applicant_file.file_input_placeholder'),
            validate: (file_name: string) =>
              !hasFileName(file_name) || $t('messages.already_file_name_valid'),
          })}
        />
        <ErrorMessage error={errors?.file_name} />
      </Styles.InputBox>
      <Styles.InputBox>
        <Styles.Text $isEssential={isFileEssential}>{$t('common.file_upload')}</Styles.Text>
        {children}
      </Styles.InputBox>
    </Styles.Wrapper>
  )
}

export default ApplicantFileBody
