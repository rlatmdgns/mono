'use client'

import {
  SelectedApplicantBasicItemAtom,
  SelectedApplicantItemAtom,
} from '@/pageModules/build-application/recoil/atom'
import { IconButton } from '@/shared/ui'
import { useFormContext } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import * as Styles from './styles'

interface ApplicationItemHandlerProps {
  objectKey: string
  index: number
  isDeletable: boolean
  onMoveUp: (index: number) => void
  onMoveDown: (index: number) => void
  onDelete: (index: number) => void
}

export const ApplicationItemHandler = ({
  objectKey,
  index,
  isDeletable,
  onMoveUp,
  onMoveDown,
  onDelete,
}: ApplicationItemHandlerProps) => {
  const { watch } = useFormContext()

  const selectedBasicItem = useRecoilValue(SelectedApplicantBasicItemAtom)
  const selectedItem = useRecoilValue(SelectedApplicantItemAtom)

  const isNavigable = !(
    objectKey?.includes('name') ||
    objectKey?.includes('email') ||
    objectKey?.includes('contact') ||
    objectKey?.includes('personal_info')
  )

  const isUpNavigable = isNavigable && !!index
  const isDownNavigable = isNavigable && index !== watch('applicant_list')?.length - 1
  const isMultiple = objectKey === 'documents' || objectKey === 'pre_questions'

  const isSelected = () => {
    if (selectedBasicItem.key) {
      return `${selectedBasicItem.key}` === objectKey
    }

    return selectedItem.key === objectKey
  }

  if (!isSelected()) return null

  return (
    <Styles.Wrapper>
      <Styles.Inner>
        <IconButton
          icon={'icon/up-solid'}
          onClick={() => onMoveUp(index)}
          disabled={!isUpNavigable}
        />
        <IconButton
          icon={'icon/down-solid'}
          onClick={() => onMoveDown(index)}
          disabled={!isDownNavigable}
        />
        {!isMultiple && (
          <IconButton
            icon={'icon/delete-line'}
            onClick={() => onDelete(index)}
            disabled={!isDeletable}
          />
        )}
      </Styles.Inner>
    </Styles.Wrapper>
  )
}
