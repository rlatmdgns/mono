import { Toast } from '@/shared/ui'
import { APPLICATION_ITEM_NAMES } from '@/widgets/recruit-application/consts'
import { getDefaultValuesValid } from '@/features/Application/lib/getDefaultValuesValid'
import { PostingApplicationFormResponse } from '@/entities/recruit/types/PostingApplicationForm'
import { FieldValues } from 'react-hook-form'

export const stringValidation = (
  init: PostingApplicationFormResponse,
  form: FieldValues,
  key: string,
) => {
  const initObject = () => {
    if (key === 'road_address') {
      return init.datas?.find((item) => item.key === 'address')
    }
    if (key === 'profile_image') {
      return init.datas?.find((item) => item.key === 'profile')
    }
    return init.datas?.find((item) => item.key === key)
  }

  const isDefault = key === 'name' || key === 'phone' || key === 'email'
  const isValid = isDefault ? !!form[key] : !(initObject()?.is_required && !form[key])

  if (!isValid && key === 'resume') {
    Toast.warning('이력서를 업로드해주세요.')
    return false
  }

  if (!isValid) {
    Toast.warning(`${APPLICATION_ITEM_NAMES[key]}을 입력해주세요.`)
    return false
  }

  if (isDefault && !getDefaultValuesValid(key, form[key])) {
    Toast.warning(`올바른 ${APPLICATION_ITEM_NAMES[key]}을 입력해주세요.`)
    return false
  }

  return true
}
