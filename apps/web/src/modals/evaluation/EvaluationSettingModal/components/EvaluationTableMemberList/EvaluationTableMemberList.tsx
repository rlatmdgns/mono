import * as Styles from './styles'
import EvaluationTableMemberItem from '@/modals/evaluation/EvaluationSettingModal/components/EvaluationTableMemberItem'
import { useFieldArray, useFormContext } from 'react-hook-form'

const EvaluationTableMemberList = () => {
  const { control } = useFormContext()
  const { update, fields } = useFieldArray({
    control,
    name: 'evaluationMembers',
  })

  return (
    <Styles.Wrapper>
      {fields?.map((member, index) => (
        <EvaluationTableMemberItem key={member.id} index={index} update={update} {...member} />
      ))}
    </Styles.Wrapper>
  )
}

export default EvaluationTableMemberList
