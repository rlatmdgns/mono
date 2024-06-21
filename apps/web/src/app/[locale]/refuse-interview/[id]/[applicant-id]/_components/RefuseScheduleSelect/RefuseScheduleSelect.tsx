import { Select, TextInput } from '@/shared/ui'
import SELECT_OPTIONS from '@/app/[locale]/refuse-interview/[id]/[applicant-id]/_components/RefuseScheduleBody/RefuseScheduleBody.contants'
import { ChangeEvent, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  IsRefusalStatusAtom,
  RefusalReasonAtom,
} from '@/app/[locale]/refuse-interview/[id]/[applicant-id]/_recoil/atom'

const RefuseScheduleSelect = () => {
  const [isInputStatus, setIsInputStatus] = useState(false)
  const setRefusalReason = useSetRecoilState(RefusalReasonAtom)
  const isRefusalReason = useRecoilValue(IsRefusalStatusAtom)

  const handleOptionsChange = (option: any) => {
    const matchText = option.label.indexOf('입력하기') > -1

    if (!matchText) {
      setIsInputStatus(false)
      setRefusalReason(option.label)
      return
    }

    setIsInputStatus(true)
  }

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const reason = event.target.value
    setRefusalReason(reason)
  }
  if (!isRefusalReason) {
    return (
      <>
        <Select
          options={SELECT_OPTIONS}
          placeholder={'면접 거절 사유(선택)'}
          onChange={handleOptionsChange}
        />
        {isInputStatus && <TextInput onChange={handleTextChange} />}
      </>
    )
  }
}
export default RefuseScheduleSelect
