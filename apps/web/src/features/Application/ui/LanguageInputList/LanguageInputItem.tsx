'use client'

import { Button, Select, SelectDatePicker, TextInput } from '@/shared/ui'
import { useState } from 'react'
import { UseFieldArrayUpdate } from 'react-hook-form'
import { LANGUAGE_TYPES } from '../../constants/languageTypes'
import { getLanguageOption } from '../../lib'
import * as Styles from './styles'
import { ApplicantRequest, Language } from '@/entities/Application/types/ApplicantRequest'

interface LevelOption {
  label: string
  value: string
}

interface DetailOptionsInterface {
  label: string
  value: string
  maxScore: number
  levels: LevelOption[]
}

interface LanguageInputItemProps {
  languageIndex: number
  language: Language
  update: UseFieldArrayUpdate<ApplicantRequest, 'languages'>
  remove: (index: number) => void
}

export const LanguageInputItem = ({
  languageIndex,
  language,
  update,
  remove,
}: LanguageInputItemProps) => {
  const [detailOptions, setDetailOptions] = useState<DetailOptionsInterface[]>([])

  const [currentExam, setCurrentExam] = useState<DetailOptionsInterface>({
    label: '',
    value: '',
    maxScore: 0,
    levels: [],
  })

  const getSelectValue = (key: keyof Language) => {
    return language[key] && { label: language[key], value: language[key] }
  }

  const onChange = (key: string, value: string | Date | null) => {
    update(languageIndex, {
      ...language,
      [key]: value,
    })
  }

  const handleChangeLanguageCategory = (value: string, objectKey: string) => {
    const categoryValue = getLanguageOption(objectKey)
    update(languageIndex, {
      ...language,
      category: value,
      type: '',
      level: '',
      score: '',
      exam_date: null,
      qualification_number: '',
    })
    setDetailOptions(categoryValue)
  }

  const handleChangeExam = (exam: string) => {
    const currentExam = detailOptions.find((option) => option.label === exam)
    if (!currentExam) return
    setCurrentExam(currentExam)
    onChange('type', currentExam.value)
    update(languageIndex, {
      ...language,
      type: currentExam.value,
      level: '',
      score: '',
    })
  }

  return (
    <Styles.ItemWrapper>
      {!!languageIndex && (
        <Styles.RemoveButtonWrapper>
          <Button
            text="삭제하기"
            size="xs"
            style="mono"
            state="standard"
            width="fit-content"
            onClick={() => remove(languageIndex)}
          />
        </Styles.RemoveButtonWrapper>
      )}
      <Styles.ItemContainer>
        <Styles.InputItem>
          <Styles.SectionTitle>어학 유형 및 종류</Styles.SectionTitle>
          <Styles.SectionInput>
            <Select
              options={LANGUAGE_TYPES}
              placeholder="어학 유형"
              value={getSelectValue('category')}
              onChange={(option) => handleChangeLanguageCategory(option.value, option.objectKey)}
              isSearchable
              closeMenuOnScroll
            />
            <Select
              options={detailOptions}
              placeholder="어학 종류"
              value={getSelectValue('type')}
              onChange={(options) => handleChangeExam(options.value)}
              isSearchable
              closeMenuOnScroll
            />
          </Styles.SectionInput>
        </Styles.InputItem>
        <Styles.InputItem>
          <Styles.SectionTitle>급수 또는 점수</Styles.SectionTitle>
          <Styles.SectionInput>
            <Select
              value={getSelectValue('level')}
              onChange={({ value }) => onChange('level', value)}
              options={currentExam.levels}
              placeholder="급수"
              closeMenuOnScroll
            />
            <TextInput
              value={language.score}
              onChange={(event) => onChange('score', event.target.value)}
              placeholder="점수를 입력해주세요."
              disabled={!currentExam.maxScore}
            />
          </Styles.SectionInput>
        </Styles.InputItem>
        <Styles.InputItem>
          <Styles.SectionTitle>응시 일자</Styles.SectionTitle>
          <SelectDatePicker
            value={language.exam_date}
            onChange={(date) => onChange('exam_date', date)}
            placeholder="응시 일자를 선택해주세요."
            closeOnScroll
          />
        </Styles.InputItem>
        <Styles.InputItem>
          <Styles.SectionTitle>자격 번호</Styles.SectionTitle>
          <TextInput
            value={language.qualification_number}
            onChange={(event) => onChange('qualification_number', event.target.value)}
            placeholder="자격번호를 입력해주세요."
          />
        </Styles.InputItem>
      </Styles.ItemContainer>
    </Styles.ItemWrapper>
  )
}
