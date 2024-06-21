import * as yup from 'yup'
import { useTranslations } from 'next-intl'

export const useValidation = () => {
  const $t = useTranslations()
  const createApplicantFileSchema = (fileNames: string[]) =>
    yup.object({
      file_name: yup
        .string()
        .required($t('applicant_file.file_input_placeholder'))
        .test(
          'file_name',
          $t('messages.already_file_name_valid'),
          (file_name) => !fileNames.some((name) => name === file_name),
        ),
      applicant_file: yup
        .mixed<FileList>()
        .test(
          'fileRequired',
          $t('messages.file_upload_required'),
          (files) => !!files && files.length > 0,
        )
        .test(
          'fileSize',
          $t('messages.file_size_upload_15mb_limit'),
          (files) =>
            files && Array.from(files).every((file) => file && file.size <= 15 * 1000 * 1000),
        ),
    })
  return { createApplicantFileSchema }
}
