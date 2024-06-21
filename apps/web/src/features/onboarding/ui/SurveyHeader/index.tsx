import { descriptionStyle, surveyHeader, titleStyle } from './styles.css'
import { useFormContext } from 'react-hook-form'

export const SurveyHeader = () => {
  const { register, watch } = useFormContext()

  return (
    <div className={surveyHeader}>
      <input className={titleStyle} placeholder="설문지 제목" {...register('title')} />
      <input className={descriptionStyle} placeholder="설문지 설명" {...register('description')} />
    </div>
  )
}
