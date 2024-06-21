'use client'

import * as Styles from './styles'
import { convertDateFormat } from '@/shared/lib'
import { Button, LabelInput, SelectDatePicker } from '@/shared/ui'
import { UseFieldArrayRemove, UseFieldArrayUpdate } from 'react-hook-form'
import { ApplicantRequest, License } from '@/entities/Application/types/ApplicantRequest'

interface LicenseInputItemProps {
  licenseIndex: number
  license: License
  update: UseFieldArrayUpdate<ApplicantRequest, 'licenses'>
  remove: UseFieldArrayRemove
}

export const LicenseInputItem = ({
  license,
  licenseIndex,
  update,
  remove,
}: LicenseInputItemProps) => {
  const licenseItem = license

  const isDeletable = licenseIndex > 0

  const handleChange = (key: string, value: string) => {
    const newItem = {
      ...licenseItem,
      [key]: value,
    }
    update(licenseIndex, newItem)
  }

  const handleLicenseRemove = (index: number) => {
    remove(index)
  }

  return (
    <Styles.InnerWrapper>
      {isDeletable && (
        <Styles.RemoveButtonWrap>
          <Button
            text="삭제하기"
            size="xs"
            style="mono"
            state="standard"
            width="fit-content"
            onClick={() => handleLicenseRemove(licenseIndex)}
          />
        </Styles.RemoveButtonWrap>
      )}
      <Styles.InputItem>
        <LabelInput
          label="자격 또는 면허 이름"
          placeholder="자격 또는 면허 이름을 입력해주세요."
          onChange={(event) => handleChange('name', event.target.value)}
        />
      </Styles.InputItem>
      <Styles.InputItem>
        <LabelInput
          label="등급"
          placeholder="등급을 입력해주세요."
          onChange={(event) => handleChange('level', event.target.value)}
        />
      </Styles.InputItem>
      <Styles.InputItem>
        <Styles.SectionTitle>취득 일자</Styles.SectionTitle>
        <SelectDatePicker
          value={license.acquisition_date}
          placeholder="취득 일자를 선택해주세요."
          onChange={(date) => handleChange('acquisition_date', convertDateFormat(date))}
          closeOnScroll
        />
      </Styles.InputItem>
      <Styles.InputItem>
        <LabelInput
          label="발급 기관"
          placeholder="발급 기관을 입력해주세요."
          onChange={(event) => handleChange('issuing_authority', event.target.value)}
        />
      </Styles.InputItem>
      <Styles.InputItem>
        <LabelInput
          label="자격 번호"
          placeholder="자격 번호를 입력해주세요."
          onChange={(event) => handleChange('qualification_number', event.target.value)}
        />
      </Styles.InputItem>
    </Styles.InnerWrapper>
  )
}
