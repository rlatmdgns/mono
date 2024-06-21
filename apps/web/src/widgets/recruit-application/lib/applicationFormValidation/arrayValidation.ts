import { Toast } from '@/shared/ui'
import { APPLICATION_ITEM_NAMES } from '@/widgets/recruit-application/consts'
import { PostingApplicationFormResponse } from '@/entities/recruit/types/PostingApplicationForm'
import { FieldValues } from 'react-hook-form'

export const arrayValidation = (
  init: PostingApplicationFormResponse,
  form: FieldValues,
  key: string,
) => {
  const initArray = init.datas?.find((item) => item.key === key)
  const isValid = !(initArray?.is_required && !form[key]?.length)

  if (!isValid) {
    Toast.warning(`${APPLICATION_ITEM_NAMES[key]}을 입력해주세요.`)
    return false
  }

  return true
}
