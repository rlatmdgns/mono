import * as Styles from './styles'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import { focusedIdAtom } from '@/modals/evaluation/CreateEvaluationTableModal/recoil/atom'
import AddEvaluationButtonBox from '@/modals/evaluation/components/AddEvaluationButtonBox'
import CopyDeleteButtonBox from '@/modals/evaluation/components/CopyDeleteButtonBox'
import { useFormContext } from 'react-hook-form'
import { EvaluationTableSection } from '@/interface/evaluation'
import { useTranslations } from 'next-intl'

interface EvaluationItemWrapperProps {
  isFocused?: boolean
  children?: React.ReactNode
  id: string
  sectionIndex: number
  append: (item: any) => void
  update: (sectionIndex: number, item: any) => void
  onCopy: () => void
  onDelete: () => void
}

const EvaluationItemWrapper = ({
  isFocused,
  children,
  id,
  sectionIndex,
  append,
  update,
  onCopy,
  onDelete,
}: EvaluationItemWrapperProps) => {
  const setFocusedId = useSetRecoilState(focusedIdAtom)
  const { watch } = useFormContext()

  const $t = useTranslations()
  const isOnlySection =
    watch(`evaluation_sections`)?.filter((section: EvaluationTableSection) =>
      section.hasOwnProperty('section_title'),
    ).length < 2
  const isOnlyItem =
    watch('evaluation_sections')
      ?.map((section: EvaluationTableSection) => section?.evaluation_items)
      .flat().length < 2
  const isDeleteDisabled = isOnlySection && isOnlyItem

  const handleClick = () => {
    setFocusedId(id)
  }

  const handleMethodAdd = () => {
    update(sectionIndex, {
      ...watch(`evaluation_sections.${sectionIndex}`),
      evaluation_items: [
        ...watch(`evaluation_sections.${sectionIndex}.evaluation_items`),
        {
          item_title: '',
          item_type: 'choice',
        },
      ],
    })
  }
  const handleSectionAdd = () => {
    append({
      section_title: $t('common.section_name'),
      section_description: '',
      evaluation_items: [],
    })
  }

  return (
    <Styles.Wrapper>
      <Styles.Container onClick={handleClick} $isFocused={isFocused}>
        {children}
      </Styles.Container>
      <AddEvaluationButtonBox
        isFocused={isFocused}
        onAddMethod={handleMethodAdd}
        onAddSection={handleSectionAdd}
      />
      <CopyDeleteButtonBox
        isFocused={isFocused}
        onCopy={onCopy}
        onDelete={onDelete}
        isDeleteDisabled={isDeleteDisabled}
      />
    </Styles.Wrapper>
  )
}

export default EvaluationItemWrapper
