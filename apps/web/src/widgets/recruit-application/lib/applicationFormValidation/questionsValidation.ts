import { Toast } from '@/shared/ui'
import { PostingApplicationFormResponse } from '@/entities/recruit/types/PostingApplicationForm'
import { PreQuestion } from '@/entities/Application/types'

export const questionsValidation = (
  init: PostingApplicationFormResponse,
  questions?: PreQuestion[],
) => {
  if (!questions) return true

  const initQuestions = init.datas?.find((item) => item.key === 'pre_questions')?.questions || []

  return questions?.every((question) => {
    const initQuestion = initQuestions.find(
      (initQuestion) => `${initQuestion.id}` === question.posting_applicant_form_pre_question_id,
    )
    const initQuestionIndex = initQuestion ? initQuestions.indexOf(initQuestion) + 1 : 1

    const isValid = !(initQuestion?.is_required && !question.description)

    if (!isValid) {
      Toast.warning(`${initQuestionIndex}번 사전 질문에 답변해주세요.`)
      return false
    }

    return true
  })
}
