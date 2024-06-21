'use client'

import { convertDateFormat } from '@/shared/lib'
import { Button, LabelInput, LabelTextarea, Select, SelectDatePicker, TextInput } from '@/shared/ui'
import { UseFieldArrayRemove, UseFieldArrayUpdate } from 'react-hook-form'
import { CAREER_PERIODS, CAREER_POSITIONS } from '../../constants'
import * as Styles from './styles'
import { ApplicantRequest, Career } from '@/entities/Application/types/ApplicantRequest'

interface CareerInputItemProps {
  careersIndex: number
  careerIndex: number
  career: Career
  update: UseFieldArrayUpdate<ApplicantRequest, 'careers'>
  remove: UseFieldArrayRemove
}

export const CareerInputItem = ({ career, careerIndex, update, remove }: CareerInputItemProps) => {
  const careerItem = career

  const isDeletable = careerIndex > 0

  const handleChange = (key: string, value: string) => {
    const isOnWorking = key === 'working_status' && value === '재직 중'
    const newValues = isOnWorking ? { working_status: value, end_date: '' } : { [key]: value }

    const newItem = {
      ...careerItem,
      ...newValues,
    } as Career
    update(careerIndex, newItem)
  }

  const handleCareerRemove = (index: number) => {
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
            onClick={() => handleCareerRemove(careerIndex)}
          />
        </Styles.RemoveButtonWrap>
      )}
      <Styles.InputItem>
        <LabelInput
          label="회사명"
          placeholder="회사명을 입력해주세요. "
          onChange={(event) => handleChange('company_name', event.target.value)}
        />
      </Styles.InputItem>
      <Styles.InputItem>
        <Styles.SectionTitle>근무 기간</Styles.SectionTitle>
        <Styles.SectionPeriod>
          <Select
            options={CAREER_PERIODS}
            placeholder="재직 중"
            isSearchable
            defaultValue={CAREER_PERIODS[1]}
            onChange={(option) => handleChange('working_status', option.value)}
            closeMenuOnScroll
          />
          <SelectDatePicker
            placeholder={'입사 연월'}
            value={career.start_date}
            onChange={(date) => handleChange('start_date', convertDateFormat(date))}
            closeOnScroll
          />
          <SelectDatePicker
            disabled={career.working_status === '재직 중'}
            placeholder={'퇴사 연월'}
            value={career.end_date}
            onChange={(date) => handleChange('end_date', convertDateFormat(date))}
            minDate={career.start_date}
            closeOnScroll
          />
        </Styles.SectionPeriod>
      </Styles.InputItem>
      <Styles.InputItem>
        <Styles.SectionTitle>직책</Styles.SectionTitle>
        <Styles.SectionPosition>
          <Select
            options={CAREER_POSITIONS}
            placeholder="고용 형태"
            onChange={(option) => handleChange('employment_type', option.value)}
            closeMenuOnScroll
          />
          <TextInput
            placeholder="부서"
            onChange={(event) => handleChange('department', event.target.value)}
          />
          <TextInput
            placeholder="직책"
            onChange={(event) => handleChange('position', event.target.value)}
          />
        </Styles.SectionPosition>
      </Styles.InputItem>
      <Styles.InputItem>
        <LabelTextarea
          label="담당 업무"
          placeholder="담당 업무를 입력해주세요."
          onChange={(event) => handleChange('role', event.target.value)}
          maxLength={300}
        />
      </Styles.InputItem>
    </Styles.InnerWrapper>
  )
}
