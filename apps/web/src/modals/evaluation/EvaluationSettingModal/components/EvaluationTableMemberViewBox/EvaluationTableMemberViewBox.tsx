import * as Styles from './styles'
import { AUTHORITY } from '@/shared/constants'
import { Button } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'

interface EvaluationTableMemberViewBoxProps {
  authority: string
  can_view?: boolean
  index: number
  update: (index: number, item: object) => void
}

const EvaluationTableMemberViewBox = ({
  authority,
  can_view,
  index,
  update,
}: EvaluationTableMemberViewBoxProps) => {
  const { watch } = useFormContext()
  const $t = useTranslations('evaluation')
  const memberSrc = `evaluationMembers.${index}`

  const isEvaluator = authority === AUTHORITY.EVALUATOR
  const canViewIcon = can_view || !isEvaluator ? 'icon/show-solid' : 'icon/hide-solid'
  const canViewText = can_view || !isEvaluator ? $t('result_view_enable') : $t('result_view_unable')

  const handleToggleCanView = () => {
    update(index, {
      ...watch(memberSrc),
      can_view: !watch(`${memberSrc}.can_view`),
    })
  }

  if (!isEvaluator) {
    return (
      <Styles.Box>
        <Icon icon={canViewIcon} color="neutralGray500" />
        {canViewText}
      </Styles.Box>
    )
  }
  return (
    <Button
      onClick={handleToggleCanView}
      iconSource={canViewIcon}
      text={canViewText}
      width="fit-content"
      state="standard"
      style="line"
      size="xs"
    />
  )
}

export default EvaluationTableMemberViewBox
