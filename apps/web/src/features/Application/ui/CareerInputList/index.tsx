'use client'

import { UseFieldArrayRemove, UseFieldArrayUpdate } from 'react-hook-form'
import { AddMultipleInputButton } from '../AddMultipleInputButton'
import { CareerInputItem } from './CareerInputItem'
import * as Styles from './styles'
import { ApplicantRequest, Career } from '@/entities/Application/types/ApplicantRequest'

interface CareerInputListProps {
  hasCareer: boolean
  index: number
  onAppend: () => void
  update: UseFieldArrayUpdate<ApplicantRequest, 'careers'>
  remove: UseFieldArrayRemove
  careers: Career[]
}

export const CareerInputList = ({
  hasCareer,
  index,
  careers,
  onAppend,
  update,
  remove,
}: CareerInputListProps) => {
  if (!hasCareer) return null
  return (
    <Styles.Wrapper>
      {careers?.map((career, career_index) => (
        <CareerInputItem
          key={`career_${career_index}`}
          careersIndex={index}
          careerIndex={career_index}
          career={career}
          update={update}
          remove={remove}
        />
      ))}
      <AddMultipleInputButton text="경력 추가" onClick={() => onAppend()} />
    </Styles.Wrapper>
  )
}
