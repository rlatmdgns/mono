import FloatTextInput from '@/modals/evaluation/components/FloatTextInput'
import EvaluationMethodDropdown from '@/modals/evaluation/components/EvaluationMethodDropdown'
import EvaluationItemWrapper from '@/modals/evaluation/components/EvaluationItemWrapper'
import CommentBox from '@/modals/evaluation/components/CommentBox'
import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'
import { focusedIdAtom } from '@/modals/evaluation/CreateEvaluationTableModal/recoil/atom'
import { useFormContext } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { useTranslations } from 'next-intl'

interface EvaluationArticleProps {
  sectionIndex: number
  itemIndex: number
  id: string
  append: (item: object) => void
  update: (index: number, item: object) => void
  remove: (index: number) => void
}

export const EvaluationArticle = ({
  sectionIndex,
  itemIndex,
  id,
  append,
  update,
  remove,
}: EvaluationArticleProps) => {
  const focusedId = useRecoilValue(focusedIdAtom)
  const { register, setValue, watch } = useFormContext()

  const articleId = `${id}_item_${itemIndex}`
  const itemTypeSrc = `evaluation_sections.${sectionIndex}.evaluation_items.${itemIndex}.item_type`
  const isFocused = articleId === focusedId
  const isPoint = watch(itemTypeSrc) !== 'essay'
  const isComment = watch(itemTypeSrc)?.includes('Comment')
  const isRequiredComment = watch(
    `evaluation_sections.${sectionIndex}.evaluation_items.${itemIndex}.is_required_comment`,
  )
  const isNoSection = !watch(`evaluation_sections.${sectionIndex}`)?.hasOwnProperty('section_title')

  const $t = useTranslations()
  const handleMethod = (label: EvaluationAllMethodLabel) => {
    const isComment = label.includes('Comment')
    if (isComment) {
      setValue(
        `evaluation_sections.${sectionIndex}.evaluation_items.${itemIndex}.is_required_comment`,
        true,
      )
      setValue(itemTypeSrc, label)
      return
    }
    delete watch(`evaluation_sections.${sectionIndex}.evaluation_items.${itemIndex}`)
      .is_required_comment
    setValue(itemTypeSrc, label)
  }

  const handleCopy = () => {
    update(sectionIndex, {
      ...watch(`evaluation_sections.${sectionIndex}`),
      evaluation_items: [
        ...watch(`evaluation_sections.${sectionIndex}.evaluation_items`),
        {
          item_title: watch(
            `evaluation_sections.${sectionIndex}.evaluation_items.${itemIndex}.item_title`,
          ),
          item_type: watch(
            `evaluation_sections.${sectionIndex}.evaluation_items.${itemIndex}.item_type`,
          ),
          is_required_comment: watch(
            `evaluation_sections.${sectionIndex}.evaluation_items.${itemIndex}.is_required_comment`,
          ),
        },
      ],
    })
  }

  const handleDelete = () => {
    const isOnlyItem = watch(`evaluation_sections.${sectionIndex}.evaluation_items`).length < 2
    const filteredItems = watch(`evaluation_sections.${sectionIndex}.evaluation_items`).filter(
      (item: object, index: number) => index !== itemIndex,
    )
    if (isOnlyItem && isNoSection) {
      return remove(sectionIndex)
    }
    update(sectionIndex, {
      ...watch(`evaluation_sections.${sectionIndex}`),
      evaluation_items: filteredItems,
    })
  }

  const handleToggleRequiredComment = () => {
    setValue(
      `evaluation_sections.${sectionIndex}.evaluation_items.${itemIndex}.is_required_comment`,
      !isRequiredComment,
    )
  }

  return (
    <EvaluationItemWrapper
      isFocused={isFocused}
      id={articleId}
      append={append}
      update={update}
      sectionIndex={sectionIndex}
      onCopy={handleCopy}
      onDelete={handleDelete}
    >
      <FloatTextInput
        isFocused={isFocused}
        isPoint={isPoint}
        label={$t('evaluation.evaluation_content')}
        placeholder={$t('evaluation.evaluation_content_placeholder')}
        register={register(
          `evaluation_sections.${sectionIndex}.evaluation_items.${itemIndex}.item_title`,
          {
            required: true,
          },
        )}
        maxLength={100}
      />
      <EvaluationMethodDropdown method={watch(itemTypeSrc)} onClick={handleMethod} />
      <CommentBox
        onClick={handleMethod}
        onToggle={handleToggleRequiredComment}
        isFocused={isFocused}
        method={watch(itemTypeSrc)}
        isComment={isComment}
        isRequiredComment={isRequiredComment}
      />
    </EvaluationItemWrapper>
  )
}

export default EvaluationArticle
