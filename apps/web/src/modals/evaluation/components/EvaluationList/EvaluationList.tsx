import EvaluationItem from '@/modals/evaluation/components/EvaluationItem'
import { useFieldArray, useFormContext } from 'react-hook-form'

const EvaluationList = () => {
  const { control } = useFormContext()
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: 'evaluation_sections',
  })

  return fields?.map((field, index) => (
    <EvaluationItem
      key={field.id}
      index={index}
      append={append}
      update={update}
      remove={remove}
      {...field}
    />
  ))
}

export default EvaluationList
