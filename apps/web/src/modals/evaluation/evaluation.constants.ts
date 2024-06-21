import { EvaluationMethods } from '@/modals/evaluation/evaluation.interface'

const question = {
  choice: ['아니다', '그렇다'],
  essay: ['주관식 답변'],
}

const point_system = {
  grade: ['최하', '하', '중', '상', '최상'],
  points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}

export const EVALUATION_METHODS: EvaluationMethods = {
  choice: question.choice,
  ...point_system,
  essay: question.essay,
}
