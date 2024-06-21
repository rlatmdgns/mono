'use client'

import * as Styles from './styles'
import { AwardInputItem } from './AwardInputItem'
import { AddMultipleInputButton } from '../AddMultipleInputButton'
import { UseFieldArrayRemove, UseFieldArrayUpdate } from 'react-hook-form'
import { ApplicantRequest, Award } from '@/entities/Application/types/ApplicantRequest'

interface AwardInputListProps {
  hasAward: boolean
  awards: Award[]
  onAppend: () => void
  update: UseFieldArrayUpdate<ApplicantRequest, 'awards'>
  remove: UseFieldArrayRemove
}

export const AwardInputList = ({
  hasAward,
  awards,
  update,
  remove,
  onAppend,
}: AwardInputListProps) => {
  const isAddDisabled = !awards[awards?.length - 1]?.is_award

  if (!hasAward) return null

  return (
    <Styles.Wrapper>
      {awards.map((award, award_index) => {
        return (
          <AwardInputItem
            key={`award_${award_index}`}
            awardIndex={award_index}
            award={award}
            update={update}
            remove={remove}
          />
        )
      })}
      <AddMultipleInputButton text="수상 추가" isAddDisabled={isAddDisabled} onClick={onAppend} />
    </Styles.Wrapper>
  )
}
