'use client'

import { Select, SelectDatePicker, TextInput } from '@/shared/ui'
import { MILITARY_END_TYPES, MILITARY_LEVELS, MILITARY_TYPES } from '../../constants'
import * as Styles from './styles'

interface MilitaryInputProps {
  hasMilitary: boolean
  enlistmentDate: Date
  dischargeDate: Date
  dischargeSelect: string
  onChange: (key: string, value: string | boolean | Date | null) => void
  onDischargeSelect: (value: string) => void
}

export const MilitaryInput = ({
  hasMilitary,
  onChange,
  onDischargeSelect,
  enlistmentDate,
  dischargeDate,
  dischargeSelect,
}: MilitaryInputProps) => {
  if (!hasMilitary) return null

  return (
    <Styles.Wrapper>
      <Styles.InnerWrapper>
        <Styles.SectionTitle>병역 사항</Styles.SectionTitle>
        <Styles.InputItem>
          <Styles.SectionTitle>군별</Styles.SectionTitle>
          <Select
            options={MILITARY_TYPES}
            onChange={({ value }) => onChange('type', value)}
            placeholder="군별을 선택해주세요."
            isSearchable
            closeMenuOnScroll
          />
        </Styles.InputItem>
        <Styles.InputItem>
          <Styles.SectionTitle>계급</Styles.SectionTitle>
          <Select
            options={MILITARY_LEVELS}
            onChange={({ value }) => onChange('rank', value)}
            placeholder="계급을 선택해주세요."
            isSearchable
            closeMenuOnScroll
          />
        </Styles.InputItem>
        <Styles.InputItem>
          <Styles.SectionTitle>전역 구분</Styles.SectionTitle>
          <Select
            onChange={({ value }) => onDischargeSelect(value)}
            options={MILITARY_END_TYPES}
            placeholder="전역 구분을 선택해주세요."
            closeMenuOnScroll
          />
          {dischargeSelect === '직접 입력' && (
            <TextInput
              onChange={(event) => onChange('discharge', event.target.value)}
              placeholder="전역 사유를 입력해주세요."
            />
          )}
        </Styles.InputItem>
        <Styles.InputItem>
          <Styles.SectionTitle>복무 기간</Styles.SectionTitle>
          <Styles.SectionInput>
            <SelectDatePicker
              placeholder="입대 연월"
              value={enlistmentDate}
              onChange={(date) => onChange('enlistment_date', date)}
              closeOnScroll
            />
            <SelectDatePicker
              placeholder="전역 연월"
              disabled={dischargeSelect === '복무중'}
              value={dischargeDate}
              onChange={(date) => onChange('discharge_date', date)}
              closeOnScroll
            />
          </Styles.SectionInput>
        </Styles.InputItem>
      </Styles.InnerWrapper>
    </Styles.Wrapper>
  )
}
