'use client'

import { DocumentInput, MultipleItemHandler } from '@/features/Application/ui'
import * as Styles from './styles'
import { useRecoilState } from 'recoil'
import { SelectedDocumentIndexAtom } from '@/pageModules/build-application/recoil'
import React from 'react'

interface DocumentFormItemProps {
  documentsIndex: number
  documentIndex: number
  isSelected: boolean
  onMoveUp: (index: number) => void
  onMoveDown: (index: number) => void
  onDelete: (index: number) => void
  onContentChange: (key: string, value: string) => void
  length: number
}

const DocumentFormItem = ({
  documentsIndex,
  documentIndex,
  isSelected,
  onMoveUp,
  onMoveDown,
  onDelete,
  onContentChange,
  length,
}: DocumentFormItemProps) => {
  const [selectedDocumentIndex, setSelectedDocumentIndex] =
    useRecoilState(SelectedDocumentIndexAtom)

  const isDocumentSelected = isSelected && documentIndex === selectedDocumentIndex

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (event.target instanceof HTMLButtonElement) {
      return event.stopPropagation()
    }
    setSelectedDocumentIndex(documentIndex)
  }

  return (
    <Styles.Wrapper
      $isDocumentSelected={isDocumentSelected}
      onClick={handleClick}
      data-type="docuemnt"
    >
      <MultipleItemHandler
        index={documentIndex}
        isDeletable={true}
        onMoveUp={onMoveUp}
        onMoveDown={onMoveDown}
        onDelete={onDelete}
        isSelected={isDocumentSelected}
        length={length}
      />
      <DocumentInput
        documentsIndex={documentsIndex}
        documentIndex={documentIndex}
        onContentChange={onContentChange}
      />
    </Styles.Wrapper>
  )
}

export default DocumentFormItem
