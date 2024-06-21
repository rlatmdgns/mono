import * as Styles from './styles'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'

interface EvaluationUserSelectHeaderProps {
  count: number
}

const UpdateEvaluationMemberHeader = ({ count }: EvaluationUserSelectHeaderProps) => {
  const { watch } = useFormContext()
  const selectedMembers = watch('evaluationMembers').length
  const $t = useTranslations('evaluation')
  return (
    <Styles.Wrapper>
      <Styles.TitleBox>
        <Styles.Title>{$t('evaluation_processing_member')}</Styles.Title>
        <Styles.CountBox>
          <Styles.SelectCount>{selectedMembers}</Styles.SelectCount>/{count}
        </Styles.CountBox>
      </Styles.TitleBox>
      <Styles.Description>
        {$t('evaluation_processing_select_member_description')}
      </Styles.Description>
    </Styles.Wrapper>
  )
}

export default UpdateEvaluationMemberHeader
