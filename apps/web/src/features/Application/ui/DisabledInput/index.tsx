'use client'

import { Select } from '@/shared/ui'
import { DISABLED_LEVELS, DISABLED_TYPES } from '../../constants'
import * as Styles from './styles'

interface DisabledInputProps {
  hasDisabled: boolean
  onLevelChange: (level: string) => void
  onTypeChange: (classification: string) => void
}

export const DisabledInput = ({
  hasDisabled = false,
  onTypeChange,
  onLevelChange,
}: DisabledInputProps) => {
  if (!hasDisabled) return null

  return (
    <Styles.Wrapper>
      <Styles.InnerWrapper>
        <Styles.InputItem>
          <Styles.SectionTitle>장애 분류</Styles.SectionTitle>
          <Select
            options={DISABLED_TYPES}
            onChange={({ value }) => onTypeChange(value)}
            placeholder="장애 분류를 선택해주세요."
            closeMenuOnScroll
          />
        </Styles.InputItem>
        <Styles.InputItem>
          <Styles.SectionTitle>장애 등급</Styles.SectionTitle>
          <Select
            options={DISABLED_LEVELS}
            onChange={({ value }) => onLevelChange(value)}
            placeholder="장애 등급을 선택해주세요."
            closeMenuOnScroll
          />
        </Styles.InputItem>
      </Styles.InnerWrapper>
    </Styles.Wrapper>
  )
}
