import { PreQuestionInputItemForApply } from './PreQuestionInputForApply'
import * as Styles from './styles'
import { RecruitMultipleItem } from '@/entities/build-application/types/applicationItem'

interface PreQuestionInputListForApplyProps {
  preQuestions?: RecruitMultipleItem[]
}

export const PreQuestionInputListForApply = ({
  preQuestions,
}: PreQuestionInputListForApplyProps) => {
  if (!preQuestions || preQuestions?.length < 1) return null
  return (
    <Styles.Wrapper>
      {preQuestions?.map((preQuestion: RecruitMultipleItem, preQuestion_index: number) => (
        <PreQuestionInputItemForApply
          key={`preQuestion_${preQuestion_index}`}
          preQuestion={preQuestion}
          preQuestionIndex={preQuestion_index}
        />
      ))}
    </Styles.Wrapper>
  )
}
