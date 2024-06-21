export interface ApplicantQuestionData {
  add_answer: string
  add_question: string
  add_question_view: boolean
}

export interface UpdateApplicantQuestionRequest extends ApplicantQuestionData {
  index: number
}

export interface ApplicantQuestionItemData extends ApplicantQuestionData {
  index: number
  isEvaluator: boolean
}
