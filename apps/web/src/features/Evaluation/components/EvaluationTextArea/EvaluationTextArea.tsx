import * as Styles from './styles'
import { UseFormRegisterReturn } from 'react-hook-form'

interface EvaluationTextAreaProps {
  placeholder?: string
  isComment?: boolean
  maxLength?: number
  register: UseFormRegisterReturn
}

const EvaluationTextArea = ({
  register,
  placeholder,
  maxLength,
  isComment,
}: EvaluationTextAreaProps) => {
  return (
    <Styles.Wrapper
      $isComment={isComment}
      placeholder={placeholder}
      maxLength={maxLength}
      {...register}
    />
  )
}

export default EvaluationTextArea
