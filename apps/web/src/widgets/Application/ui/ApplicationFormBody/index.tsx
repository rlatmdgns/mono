import {
  ApplicationAddItem,
  ApplicationBasicItem,
  ApplicationItemHandler,
} from '@/features/Application/ui'
import {
  SelectedApplicantBasicItemAtom,
  SelectedApplicantItemAtom,
  SelectedApplicantPersonItemAtom,
  SelectedDocumentIndexAtom,
} from '@/pageModules/build-application/recoil'
import { AgreementForm } from '@/widgets/Application/ui'
import { useFormContext } from 'react-hook-form'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as Styles from './styles'
import React from 'react'
import {
  BasicApplicationItem,
  RecruitApplicationItem,
} from '@/entities/build-application/types/applicationItem'

interface ApplicationFormBodyProps {
  basicItems: BasicApplicationItem[]
  applicantItems: RecruitApplicationItem[]
  onMoveUp: (index: number, type?: 'documents' | 'questions') => void
  onMoveDown: (index: number, type?: 'documents' | 'questions') => void
  onDelete: (index: number, type?: 'documents' | 'questions') => void
  onContentChange: (key: string, value: string) => void
}

export const ApplicationFormBody = ({
  basicItems,
  applicantItems,
  onMoveUp,
  onMoveDown,
  onDelete,
  onContentChange,
}: ApplicationFormBodyProps) => {
  const { setValue, watch } = useFormContext()

  const [selectedAddItem, setSelectedAddItem] = useRecoilState(SelectedApplicantItemAtom)
  const setSelectedBasicItem = useSetRecoilState(SelectedApplicantBasicItemAtom)
  const setSelectedPersonItem = useSetRecoilState(SelectedApplicantPersonItemAtom)
  const setSelectedDocumentIndex = useSetRecoilState(SelectedDocumentIndexAtom)

  const isDeletable = !watch(`applicant_list.${selectedAddItem.index}.isBasic`)

  const handleApplicationBasicSelectItem = (key: string, index: number) => {
    setSelectedBasicItem({ key: key, index: index })
    setSelectedAddItem({ key: '', index: -1 })
    setSelectedPersonItem({ key: '', index: -1 })
  }

  const handleApplicantSelectItem = (key: string, index: number) => {
    const isMultiple = key.includes('documents') || key.includes('questions')
    if (!isMultiple) {
      setSelectedDocumentIndex(null)
    }
    setSelectedAddItem({ key: key, index: index })
    setSelectedBasicItem({ key: '', index: -1 })
    setSelectedPersonItem({ key: '', index: -1 })
  }

  const handlePersonalSelect = (key: string, index: number) => {
    setSelectedPersonItem({ key: key, index: index })
    setSelectedAddItem({ key: '', index: -1 })
    setSelectedBasicItem({ key: '', index: -1 })
  }

  const handleChange = (objectKey: string, index: number, value: string) => {
    const valueKeyIndex = objectKey.lastIndexOf('_') + 1
    const setValueName = objectKey.slice(valueKeyIndex)
    setValue(`applicant_list.${index}.applicant_${setValueName}`, value)
  }

  return (
    <Styles.Body>
      {basicItems.map((item, index: number) => {
        return (
          <Styles.Item
            key={item.key}
            onClick={() => handleApplicationBasicSelectItem(item.key, index)}
          >
            <Styles.ItemContainer>
              <ApplicationBasicItem
                item={item}
                onChange={(inputValue) => handleChange(item.key, index, inputValue)}
                isBuild
              />
            </Styles.ItemContainer>
          </Styles.Item>
        )
      })}
      {applicantItems.map((item, index: number) => {
        return (
          <Styles.Item key={item.key}>
            <Styles.ItemContainer onClick={() => handleApplicantSelectItem(item.key, index)}>
              <ApplicationAddItem
                name={item.key}
                index={index}
                isRequired={item.is_required}
                isCanView={item.is_canview}
                isNote={item.is_note}
                note={item.note}
                onMoveUp={onMoveUp}
                onMoveDown={onMoveDown}
                onDelete={onDelete}
                onContentChange={onContentChange}
              />
            </Styles.ItemContainer>
            <ApplicationItemHandler
              index={index}
              objectKey={item.key}
              isDeletable={isDeletable}
              onMoveUp={onMoveUp}
              onMoveDown={onMoveDown}
              onDelete={onDelete}
            />
          </Styles.Item>
        )
      })}
      <Styles.Item onClick={() => handlePersonalSelect('enterprise_required_personal_terms', -1)}>
        <AgreementForm value={false} />
      </Styles.Item>
    </Styles.Body>
  )
}
