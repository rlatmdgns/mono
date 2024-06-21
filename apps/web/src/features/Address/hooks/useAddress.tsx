import { Toast } from '@/shared/ui'
import { AddInterviewPlaceRequest } from '@/interface/interview'
import useAddInterviewPlace from '@/modals/ReqeustInterviewModal/hooks/useAddInterviewPlace'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

const useAddress = (onClose: () => void) => {
  const $t = useTranslations('messages')
  const [baseAddressInput, setBaseAddressInput] = useState('')
  const { addInterviewPlaceMutate } = useAddInterviewPlace()

  const postAddress = (detailAddress: string, contact: string[]) => {
    if (contact.find((item) => item === baseAddressInput)) {
      Toast.error($t('already_registered_address'))
      return
    }
    const postData: AddInterviewPlaceRequest = {
      interview_type: 'contact',
      address: baseAddressInput,
      detail_address: detailAddress,
    }

    addInterviewPlaceMutate(postData)
    onClose()
  }

  return {
    baseAddressInput,
    setBaseAddressInput,
    postAddress,
  }
}
export default useAddress
