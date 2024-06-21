'use client'

import { MODAL, PAGE } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { IconButton } from '@/shared/ui'
import { useParams, useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'
import * as Styles from './styles'
import { RecruitApplicationItem } from '@/entities/build-application/types/applicationItem'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import { selectedTabState } from '@/shared/ui/Tabs/atom'
import {
  SelectedApplicantBasicItemAtom,
  SelectedApplicantItemAtom,
  SelectedDocumentIndexAtom,
} from '@/pageModules/build-application/recoil'

interface BackButtonProps {
  title?: string
  originalApplicantItems: RecruitApplicationItem[]
  originalTermsData: string
  isChanged: boolean
  isTemplate?: boolean
}

export const BackButton = ({
  title,
  isChanged,
  originalApplicantItems,
  originalTermsData,
  isTemplate,
}: BackButtonProps) => {
  const pathname = useParams()
  const id = pathname?.id as string
  const setSettingsTemplateSelectedTab = useSetRecoilState(selectedTabState)
  const resetSelectedApplicantBasicItem = useResetRecoilState(SelectedApplicantBasicItemAtom)
  const resetSelectedApplicantItem = useResetRecoilState(SelectedApplicantItemAtom)
  const resetSelectedDocumentIndex = useResetRecoilState(SelectedDocumentIndexAtom)

  const { openModal } = useModal()
  const router = useRouter()
  const { setValue } = useFormContext()

  const handleResetSelected = () => {
    resetSelectedApplicantBasicItem()
    resetSelectedApplicantItem()
    resetSelectedDocumentIndex()
  }

  const pageBack = () => {
    handleResetSelected()

    if (isTemplate) {
      setSettingsTemplateSelectedTab(3)
      return router.replace(PAGE.SETTINGS_TEMPLATE)
    }
    return router.replace(PAGE.POSTINGS(Number(id)))
  }

  const handleBack = () => {
    if (!isChanged) {
      pageBack()
      return
    }
    openModal(MODAL.CONFIRM, {
      state: 'negative',
      title: (
        <>
          저장하지 않은 정보는 삭제됩니다.
          <br />
          뒤로 가시겠습니까?
        </>
      ),
      iconSource: 'icon/warning-solid',
      textConfirm: '뒤로가기',
      textCancel: '닫기',
      onClick: () => handleConfirm(),
    })
  }

  const handleConfirm = () => {
    if (isChanged) {
      setValue('applicant_list', originalApplicantItems)
      setValue('terms.description', originalTermsData)
      pageBack()
      return
    }

    pageBack()
  }

  return (
    <Styles.Back>
      <IconButton icon="icon/back-line" color="neutralGray800" onClick={handleBack} />
      <Styles.Text>{title || '지원서 양식 '}</Styles.Text>
    </Styles.Back>
  )
}
