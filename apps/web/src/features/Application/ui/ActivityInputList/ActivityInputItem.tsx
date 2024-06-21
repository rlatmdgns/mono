'use client'

import * as Styles from './styles'
import { Button, LabelTextarea, Select, SelectDatePicker, TextInput } from '@/shared/ui'
import { useState } from 'react'
import { UseFieldArrayRemove, UseFieldArrayUpdate } from 'react-hook-form'
import { ACTIVITY_STATUS, ACTIVITY_TYPES } from '../../constants/activityTypes'
import { Activity, ApplicantRequest } from '@/entities/Application/types/ApplicantRequest'

interface ActivityInputItemProps {
  update: UseFieldArrayUpdate<ApplicantRequest, 'activities'>
  remove: UseFieldArrayRemove
  activityIndex: number
  activity: Activity
}

export const ActivityInputItem = ({
  update,
  remove,
  activityIndex,
  activity,
}: ActivityInputItemProps) => {
  const [activitySelect, setActivitySelect] = useState(activity?.type || '')

  const handleChange = (key: string, value: string | boolean | Date | null) => {
    const isOnWorking = key === 'status' && value === '활동중'
    const newValues = isOnWorking ? { status: value, end_date: null } : { [key]: value }

    const newItem = {
      ...activity,
      ...newValues,
    }
    update(activityIndex, newItem)
  }

  const handleTypeSelect = (value: string) => {
    setActivitySelect(value)

    if (value === '직접 입력') return

    const newItem = {
      ...activity,
      type: value,
    }

    update(activityIndex, newItem)
  }

  const getSelectValue = (key: keyof Activity) => {
    return activity[key] && { label: activity[key], value: activity[key] }
  }

  return (
    <Styles.ItemWrapper>
      {!!activityIndex && (
        <Styles.DeleteButtonBox>
          <Button
            text="삭제하기"
            size="xs"
            style="mono"
            state="standard"
            width="fit-content"
            onClick={() => remove(activityIndex)}
          />
        </Styles.DeleteButtonBox>
      )}
      <Styles.ItemContainer>
        <Styles.InputItem>
          <Styles.SectionTitle>활동 구분</Styles.SectionTitle>
          <Select
            options={ACTIVITY_TYPES}
            onChange={({ value }) => handleTypeSelect(value)}
            placeholder={'활동 구분을 선택해주세요.'}
            closeMenuOnScroll
          />
          {activitySelect === '직접 입력' && (
            <TextInput
              onChange={(event) => handleChange('type', event.target.value)}
              placeholder="활동 유형을 입력해주세요."
            />
          )}
        </Styles.InputItem>
        <Styles.InputItem>
          <Styles.SectionTitle>활동명</Styles.SectionTitle>
          <TextInput
            value={activity.name}
            onChange={(event) => handleChange('name', event.target.value)}
            placeholder={`활동명을 입력해주세요.`}
          />
        </Styles.InputItem>
        <Styles.InputItem>
          <Styles.SectionTitle>활동 기간</Styles.SectionTitle>
          <Styles.SectionPeriod>
            <Select
              value={getSelectValue('status')}
              onChange={(option) => handleChange('status', option.label)}
              options={ACTIVITY_STATUS}
              placeholder={'활동 여부'}
              closeMenuOnScroll
            />
            <SelectDatePicker
              value={activity.start_date}
              onChange={(date) => handleChange('start_date', date)}
              placeholder={'활동 시작 기간'}
              closeOnScroll
            />
            <SelectDatePicker
              value={activity.end_date}
              disabled={activity.status === '활동중'}
              onChange={(date) => handleChange('end_date', date)}
              placeholder={'활동 종료 기간'}
              minDate={activity.start_date}
              closeOnScroll
            />
          </Styles.SectionPeriod>
        </Styles.InputItem>
        <Styles.InputItem>
          <LabelTextarea
            label="활동 상세 설명"
            value={activity.description}
            onChange={(event) => handleChange('description', event.target.value)}
            placeholder="활동 상세 설명을 입력해주세요."
            maxLength={100}
          />
        </Styles.InputItem>
      </Styles.ItemContainer>
    </Styles.ItemWrapper>
  )
}
