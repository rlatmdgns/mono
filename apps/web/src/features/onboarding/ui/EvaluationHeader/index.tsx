import { descriptionStyle, evaluationHeader, titleStyle } from './styles.css'
import { useFormContext } from 'react-hook-form'

export const EvaluationHeader = () => {
  const { register, control, watch } = useFormContext()

  return (
    <div className={evaluationHeader}>
      <input
        className={titleStyle}
        placeholder="평가표 제목을 입력해주세요."
        {...register('title')}
      />
      <input className={descriptionStyle} placeholder="평가표 설명" {...register('description')} />
    </div>
  )
}
