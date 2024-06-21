'use client'

import * as Styles from './styles'
import { Button, LabelInput, LabelTextarea, SelectDatePicker } from '@/shared/ui'
import { UseFieldArrayRemove, UseFieldArrayUpdate } from 'react-hook-form'
import { ApplicantRequest, Award } from '@/entities/Application/types/ApplicantRequest'

interface AwardInputItemProps {
  awardIndex: number
  award: Award
  update: UseFieldArrayUpdate<ApplicantRequest, 'awards'>
  remove: UseFieldArrayRemove
}

export const AwardInputItem = ({ awardIndex, award, update, remove }: AwardInputItemProps) => {
  const handleChange = (key: string, value: string | boolean | Date | null) => {
    const newItem = {
      ...award,
      [key]: value,
    }
    update(awardIndex, newItem)
  }

  return (
    <Styles.ItemWrapper>
      {!!awardIndex && (
        <Styles.RemoveButtonWrapper>
          <Button
            text="삭제하기"
            size="xs"
            style="mono"
            state="standard"
            width="fit-content"
            onClick={() => remove(awardIndex)}
          />
        </Styles.RemoveButtonWrapper>
      )}
      <Styles.ItemContainer>
        <Styles.InputItem>
          <LabelInput
            label="수상 내용"
            placeholder="수상 내용을 입력해주세요."
            onChange={(event) => handleChange('detail_description', event.target.value)}
          />
        </Styles.InputItem>
        <Styles.InputItem>
          <LabelInput
            label="시상 단체"
            placeholder="시상 단체를 입력해주세요."
            onChange={(event) => handleChange('organization', event.target.value)}
          />
        </Styles.InputItem>
        <Styles.InputItem>
          <Styles.SectionTitle>수상 일자</Styles.SectionTitle>
          <SelectDatePicker
            value={award.award_date}
            placeholder="수상 일자를 선택해주세요."
            onChange={(date) => handleChange('award_date', date)}
            closeOnScroll
          />
        </Styles.InputItem>
        <Styles.InputItem>
          <LabelTextarea
            label="수상 상세 설명"
            maxLength={100}
            onChange={(event) => handleChange('description', event.target.value)}
          />
        </Styles.InputItem>
      </Styles.ItemContainer>
    </Styles.ItemWrapper>
  )
}
