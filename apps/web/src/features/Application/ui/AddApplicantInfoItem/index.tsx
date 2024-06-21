'use client'

import { AddApplicantInfoItemContents } from '@/entities/Application'
import {
  SelectedApplicantItemAtom,
  SelectedDocumentIndexAtom,
} from '@/pageModules/build-application/recoil'
import { Toast } from '@/shared/ui'
import { ApplicantInfo } from 'features/build-application/types'
import { useSetRecoilState } from 'recoil'
import * as Styles from './styles'
import { RecruitApplicationItem } from '@/entities/build-application/types/applicationItem'

interface AddApplicantInfoItemProps {
  item: ApplicantInfo
  applicantItems?: RecruitApplicationItem[]
  isDisabled: boolean
  onClick: (key: string) => void
}

export const AddApplicantInfoItem = ({
  item,
  applicantItems,
  onClick,
  isDisabled,
}: AddApplicantInfoItemProps) => {
  const setSelectedItem = useSetRecoilState(SelectedApplicantItemAtom)
  const setSelectedDocumentIndex = useSetRecoilState(SelectedDocumentIndexAtom)

  const documents = applicantItems?.find((item) => item.key === 'documents')?.documents
  const preQuestions = applicantItems?.find((item) => item.key === 'pre_questions')?.questions

  const handleClick = () => {
    if (isDisabled) {
      if (item.key === 'documents') {
        return Toast.warning('해당 항목은 7개까지 추가 가능합니다.')
      }
      return Toast.warning('해당 항목은 한 개만 추가 가능합니다.')
    }
    onClick(item.key)

    if (item.key === 'documents') {
      const index = !documents
        ? applicantItems?.length
        : applicantItems?.findIndex((item) => item.key === 'documents')
      const documentItemIndex = !documents ? 0 : documents?.length

      setSelectedItem({ key: item.key, index: index || -1 })
      setSelectedDocumentIndex(documentItemIndex)
      return
    }

    if (item.key === 'pre_questions') {
      const index = !preQuestions
        ? applicantItems?.length
        : applicantItems?.findIndex((item) => item.key === 'pre_questions')
      const questionIndex = !preQuestions ? 0 : preQuestions?.length

      setSelectedItem({ key: item.key, index: index || -1 })
      setSelectedDocumentIndex(questionIndex)
      return
    }

    setSelectedItem({ key: item.key, index: applicantItems?.length || -1 })
    Toast.success('항목이 추가되었습니다.')
  }

  return (
    <Styles.Item $disabled={isDisabled} onClick={handleClick}>
      <AddApplicantInfoItemContents item={item} />
    </Styles.Item>
  )
}
