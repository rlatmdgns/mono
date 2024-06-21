import {
  DocumentControl,
  NoteControl,
  PreQuestionControl,
  RequiredResponseControl,
  TermsControl,
  ViewerControl,
} from '@/features/Application/ui'
import {
  SelectedApplicantBasicItemAtom,
  SelectedApplicantItemAtom,
  SelectedApplicantPersonItemAtom,
  SelectedDocumentIndexAtom,
} from '@/pageModules/build-application/recoil/atom'
import { useRecoilValue } from 'recoil'
import * as Styles from './styles'

interface ApplicationOptionListProps {
  onUpdate: (key: string, value: boolean) => void
  onChange: (key: string, value: string) => void
}

export const ApplicationOptionList = ({ onUpdate, onChange }: ApplicationOptionListProps) => {
  const selectedBasicItem = useRecoilValue(SelectedApplicantBasicItemAtom)
  const selectedItem = useRecoilValue(SelectedApplicantItemAtom)
  const selectedPersonItem = useRecoilValue(SelectedApplicantPersonItemAtom)
  const selectedDocumentIndex = useRecoilValue(SelectedDocumentIndexAtom)

  const isDocuments = selectedItem.key === 'documents'
  const isQuestions = selectedItem.key === 'pre_questions'
  const isAgreement = selectedPersonItem.key

  const isMultipleSelected = () => {
    if (isDocuments || isQuestions) {
      return selectedDocumentIndex !== null
    }

    return true
  }

  const getSelectedItemKey = () => {
    if (selectedBasicItem.key) {
      return `basic_list.${selectedBasicItem.index}`
    }

    if (isDocuments && selectedDocumentIndex !== null) {
      return `applicant_list.${selectedItem.index}.documents.${selectedDocumentIndex}`
    }

    if (isQuestions && selectedDocumentIndex !== null) {
      return `applicant_list.${selectedItem.index}.questions.${selectedDocumentIndex}`
    }

    if (isAgreement) {
      return `terms`
    }

    return `applicant_list.${selectedItem.index}`
  }

  const isSelected = !!(
    selectedBasicItem.key ||
    (selectedItem.key && isMultipleSelected()) ||
    selectedPersonItem.key
  )

  const onSwitchChange = (key: string, value: boolean) => {
    onUpdate(key, value)
  }

  const onInputChange = (key: string, value: string) => {
    onChange(key, value)
  }

  if (!isSelected) return null

  return (
    <Styles.Wrapper>
      <Styles.Title>항목 상세 설정</Styles.Title>
      <Styles.Options>
        <RequiredResponseControl
          selectedItem={getSelectedItemKey()}
          onSwitchChange={onSwitchChange}
        />
        <ViewerControl selectedItem={getSelectedItemKey()} onSwitchChange={onSwitchChange} />
        <DocumentControl selectedItem={getSelectedItemKey()} onInputChange={onInputChange} />
        <PreQuestionControl selectedItem={getSelectedItemKey()} onInputChange={onInputChange} />
        <TermsControl onInputChange={onInputChange} />
        <NoteControl
          selectedItem={getSelectedItemKey()}
          onSwitchChange={onSwitchChange}
          onInputChange={onInputChange}
        />
      </Styles.Options>
    </Styles.Wrapper>
  )
}
