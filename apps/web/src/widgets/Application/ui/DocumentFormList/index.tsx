'use client'

import * as Styles from './styles'
import DocumentFormItem from '@/widgets/Application/ui/DocumentFormItem'
import { useFormContext } from 'react-hook-form'
import { RecruitMultipleItem } from '@/entities/build-application/types/applicationItem'

interface DocumentFormListProps {
  index: number
  isSelected: boolean
  onContentChange: (key: string, value: string) => void
  onMoveUp: (index: number, type?: 'documents' | 'questions') => void
  onMoveDown: (index: number, type?: 'documents' | 'questions') => void
  onDelete: (index: number, type?: 'documents' | 'questions') => void
}

const DocumentFormList = ({
  index,
  isSelected,
  onContentChange,
  onMoveUp,
  onMoveDown,
  onDelete,
}: DocumentFormListProps) => {
  const { watch } = useFormContext()

  const documents: RecruitMultipleItem[] = watch(`applicant_list.${index}.documents`)
  const documentsIndexArray = documents?.map((_, index) => index)
  const isEmpty = !documents || documents.length < 1

  const handleMoveUp = (document_index: number) => {
    onMoveUp(document_index, 'documents')
  }
  const handleMoveDown = (document_index: number) => {
    onMoveDown(document_index, 'documents')
  }
  const handleDelete = (document_index: number) => {
    onDelete(document_index, 'documents')
  }

  if (isEmpty) return null
  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        {documentsIndexArray?.map((documents_index) => (
          <DocumentFormItem
            key={`documents_${documents_index}`}
            documentsIndex={index}
            documentIndex={documents_index}
            isSelected={isSelected}
            length={documents.length}
            onMoveUp={handleMoveUp}
            onMoveDown={handleMoveDown}
            onDelete={handleDelete}
            onContentChange={onContentChange}
          />
        ))}
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default DocumentFormList
