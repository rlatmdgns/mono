import { POST_CODE } from '@/shared/constants'
import useAddress from '@/features/Address/hooks/useAddress'
import { Map, TextInput } from 'shared/ui'
import { Icon } from '@repo/ui'
import { ContactInterviewPlace, ModifyInterviewPlaceRequest } from '@/interface/interview'
import { ChangeEvent, useEffect, useState } from 'react'
import { useDaumPostcodePopup } from 'react-daum-postcode'
import * as Styles from './styles'
import AddressFooter from '@/features/Address/containers/AddressFooter'
import { useAddressUpdate } from '@/shared/hooks'
import { useTranslations } from 'next-intl'

interface AddressProps {
  addressType: 'form' | 'mutate'
  modifyAddress?: ContactInterviewPlace
  modifyAddressIndex?: number
  contact: string[]
  handleGetAddress?: (address: string, detailAddress: string) => void
  onClose: () => void
}

const Address = ({
  addressType,
  modifyAddress,
  modifyAddressIndex,
  contact,
  handleGetAddress,
  onClose,
}: AddressProps) => {
  const { baseAddressInput, setBaseAddressInput, postAddress } = useAddress(onClose)
  const [detailAddress, setDetailAddress] = useState('')
  const open = useDaumPostcodePopup(POST_CODE)
  const { addressUpdateMutate } = useAddressUpdate('contact')

  const $t = useTranslations('placement')

  const handleComplete = (data: any) => {
    setBaseAddressInput(data.address)
  }
  const handleClick = async () => {
    const popupPosition = {
      top: window.screen.height / 2 - 250,
      left: window.screen.width / 2,
    }

    // @ts-ignore
    await open({
      onComplete: handleComplete,
      top: popupPosition.top,
      left: popupPosition.left,
    })
  }
  const handleDetailAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(event.target.value)
  }

  const handleSetAddress = (address: string, detailAddress: string) => {
    if (!handleGetAddress) return
    handleGetAddress(address, detailAddress)
    onClose()
  }

  const handleAddressAdd = (detailAddress: string) => {
    postAddress(detailAddress, contact)
  }

  const handleAddressModify = (detailAddress: string) => {
    if (typeof modifyAddressIndex !== 'number') return
    const postData: ModifyInterviewPlaceRequest = {
      interview_place_key: modifyAddressIndex,
      address: baseAddressInput,
      detail_address: detailAddress,
    }

    addressUpdateMutate(postData)
    onClose()
  }

  const getModifyAddress = () => {
    if (!modifyAddress) return
    setBaseAddressInput(modifyAddress.address)
    setDetailAddress(modifyAddress.detail_address)
  }

  useEffect(() => {
    getModifyAddress()
  }, [])

  return (
    <Styles.AddressInputWrap>
      <Styles.InputRow $baseAddress onClick={handleClick}>
        <Styles.BaseAddress $isBaseAddress={!!baseAddressInput}>
          {baseAddressInput ? baseAddressInput : $t('address_placeholder')}
          <Icon icon="icon/search-line" color="neutralGray600" size={20} />
        </Styles.BaseAddress>
      </Styles.InputRow>
      {baseAddressInput && (
        <Styles.InputRow>
          <TextInput
            placeholder={$t('detail_address_placeholder')}
            value={detailAddress}
            onChange={handleDetailAddressChange}
          />
        </Styles.InputRow>
      )}
      <Styles.MapContainer>
        {!baseAddressInput && <Styles.NoAddress>{$t('empty_address')}</Styles.NoAddress>}
        {baseAddressInput && (
          <Map mapId="addressMap" address={baseAddressInput} draggable={false} />
        )}
      </Styles.MapContainer>
      <AddressFooter
        addressType={addressType}
        address={baseAddressInput}
        modifyAddress={modifyAddress}
        detailAddress={detailAddress}
        handleSetAddress={handleSetAddress}
        handleAddressAdd={handleAddressAdd}
        handleAddressModify={handleAddressModify}
        onClose={onClose}
      />
    </Styles.AddressInputWrap>
  )
}
export default Address
