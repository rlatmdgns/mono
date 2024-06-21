import { ChangeEvent, useState } from 'react'
import { useDaumPostcodePopup } from 'react-daum-postcode'
import { POST_CODE } from '@/shared/constants'
import { TextInput } from '@/shared/ui'
import { Icon } from '@repo/ui'
import * as Styles from './styles'
import { useFormContext } from 'react-hook-form'

export const LocationInput = () => {
  const [roadAddress, setRoadAddress] = useState<string>('')
  const { setValue, getValues } = useFormContext()
  const open = useDaumPostcodePopup(POST_CODE)

  const detailAddress = getValues('detail_address')

  const handleComplete = (data: any) => {
    setValue('road_address', data.address)
    setRoadAddress(data.address)
  }

  const handleClick = async () => {
    const popupPosition = {
      top: window.screen.height / 2 - 250,
      left: window.screen.width / 2,
    }

    await open({
      onComplete: handleComplete,
      top: popupPosition.top,
      left: popupPosition.left,
    })
  }

  const onChangeDetailAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('detail_address', event.target.value)
  }

  return (
    <Styles.Wrapper>
      <Styles.InnerWrapper>
        <Styles.InputItem>
          <Styles.InputRow $baseAddress onClick={handleClick}>
            <Styles.BaseAddress $isBaseAddress={!!roadAddress} type="button">
              {roadAddress ? roadAddress : '건물, 지번 또는 도로명을 검색해주세요.'}
              <Icon icon="icon/search-line" color="neutralGray600" size={20} />
            </Styles.BaseAddress>
          </Styles.InputRow>
          <Styles.InputRow>
            <TextInput
              placeholder="상세 주소를 입력해주세요."
              defaultValue={detailAddress}
              onChange={onChangeDetailAddress}
              disabled={!roadAddress}
            />
          </Styles.InputRow>
        </Styles.InputItem>
      </Styles.InnerWrapper>
    </Styles.Wrapper>
  )
}
