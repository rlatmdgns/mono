import * as Styles from './styles'
import { EvaluationIdentification } from '@/interface/applicants'
import { Avatar, Badge, Dropdown } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface EvaluationStateListProps {
  evaluationIdentificationList: EvaluationIdentification[]
}

const EvaluationStateList = ({ evaluationIdentificationList }: EvaluationStateListProps) => {
  const $t = useTranslations('common')
  return (
    <Styles.Wrapper>
      {evaluationIdentificationList.map((user, index) => {
        const text = user.is_submitted ? $t('submit') : $t('not_submit')
        const type = user.is_submitted ? 'gray' : 'warning'

        return (
          <Dropdown.Item key={index} size="lg">
            <Avatar alt={user.user_name} src={user.user_profile} size="sm" />
            <Styles.Name>{user.user_name}</Styles.Name>
            <Badge text={text} type={type} />
          </Dropdown.Item>
        )
      })}
    </Styles.Wrapper>
  )
}

export default EvaluationStateList
