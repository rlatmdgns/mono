import * as Styles from './styles'
import { Switch } from '@/shared/ui'
import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'
import { filterMethodWithOutComment } from '@/modals/evaluation/evaluation.factory'
import React from 'react'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

interface CommentSettingProps {
  method: EvaluationAllMethodLabel
  isComment?: boolean
  isRequiredComment?: boolean
  onToggle: () => void
  onClick?: (label: EvaluationAllMethodLabel) => void
}

const CommentSetting = ({
  method,
  isComment,
  isRequiredComment = true,
  onToggle,
  onClick,
}: CommentSettingProps) => {
  const $t = useTranslations()

  const handleCommentRemove = () => {
    if (!onClick) return
    const filterMethod = filterMethodWithOutComment(method)
    onClick(filterMethod)
  }

  if (!isComment) return null
  return (
    <Styles.Wrapper>
      <Styles.TextBox>
        {$t('evaluation.essay_comment')}
        <Styles.Description> ({$t('common.text_limit', { limit: 100 })})</Styles.Description>
      </Styles.TextBox>
      <Styles.OptionBox>
        <Styles.OptionLabel>{$t('common.required_response')}</Styles.OptionLabel>
        <Switch isChecked={isRequiredComment} onChange={onToggle} size="xs" />
        <Styles.RemoveButton onClick={handleCommentRemove}>
          <Icon icon="icon/cancle-solid" color="neutralGray300" />
        </Styles.RemoveButton>
      </Styles.OptionBox>
    </Styles.Wrapper>
  )
}

export default CommentSetting
