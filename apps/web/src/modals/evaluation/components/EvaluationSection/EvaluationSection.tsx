import FloatTextInput from '@/modals/evaluation/components/FloatTextInput'
import { useFormContext } from 'react-hook-form'
import EvaluationItemWrapper from '@/modals/evaluation/components/EvaluationItemWrapper'
import { useRecoilValue } from 'recoil'
import { focusedIdAtom } from '@/modals/evaluation/CreateEvaluationTableModal/recoil/atom'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import { useLocale, useTranslations } from 'next-intl'

interface EvaluationSectionProps {
  index: number
  id: string
  append: (item: object) => void
  update: (index: number, item: object) => void
  remove: (index: number) => void
}

export const EvaluationSection = ({
  index,
  id,
  append,
  update,
  remove,
}: EvaluationSectionProps) => {
  const { openModal, closeModal } = useModal()
  const focusedId = useRecoilValue(focusedIdAtom)
  const { register, watch } = useFormContext()

  const isNoSection = !watch(`evaluation_sections.${index}`)?.hasOwnProperty('section_title')
  const sectionId = `${id}_section`
  const isFocused = sectionId === focusedId

  const $t = useTranslations()
  const currentLocale = useLocale()
  const handleDelete = () => {
    const hasEvaluationItems = watch(`evaluation_sections.${index}.evaluation_items`).length > 0

    if (!hasEvaluationItems) {
      return remove(index)
    }

    const getSubTitle = () => {
      if (currentLocale !== 'ko') {
        return (
          <>
            Deleting this section will also delete all evaluation items in the section.
            <br />
            Are you sure you want to proceed?
          </>
        )
      }
      return (
        <>
          섹션을 삭제할 경우 섹션의 평가 항목이 모두 삭제됩니다.
          <br /> 그래도 삭제하시겠습니까?
        </>
      )
    }

    openModal(MODAL.CONFIRM, {
      title: $t('messages.delete_evaluation_section_confirm'),
      subtitle: getSubTitle(),
      width: '380px',
      iconSource: 'icon/delete-solid',
      textConfirm: $t('common.delete'),
      onClick: () => {
        remove(index)
        closeModal(MODAL.CONFIRM)
      },
    })
  }

  const handleCopy = () => {
    append({
      section_title: watch(`evaluation_sections.${index}.section_title`),
      section_description: watch(`evaluation_sections.${index}.section_description`),
      evaluation_items: [],
    })
  }

  if (isNoSection) return null

  return (
    <EvaluationItemWrapper
      isFocused={isFocused}
      id={sectionId}
      append={append}
      update={update}
      sectionIndex={index}
      onCopy={handleCopy}
      onDelete={handleDelete}
    >
      <FloatTextInput
        isTitle
        isFocused={isFocused}
        label={$t('common.section_title')}
        placeholder={$t('common.add_section_title')}
        maxLength={100}
        register={register(`evaluation_sections.${index}.section_title`, {
          required: true,
        })}
      />
      <FloatTextInput
        isDescription
        isFocused={isFocused}
        label={$t('common.section_description')}
        placeholder={$t('common.add_section_description')}
        maxLength={50}
        register={register(`evaluation_sections.${index}.section_description`)}
      />
    </EvaluationItemWrapper>
  )
}

export default EvaluationSection
