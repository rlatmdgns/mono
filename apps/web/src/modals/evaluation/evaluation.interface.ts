export type EvaluationMethodLabel = 'choice' | 'grade' | 'points' | 'essay'

export type EvaluationMethodWithCommentLabel = 'choiceComment' | 'gradeComment' | 'pointsComment'

export type EvaluationAllMethodLabel = EvaluationMethodLabel | EvaluationMethodWithCommentLabel

export type EvaluationMethodValues = string[] | number[]

export interface EvaluationMethod {
  label: EvaluationMethodLabel
  values: EvaluationMethodValues
}

export type EvaluationMethodArray = [EvaluationMethodLabel, EvaluationMethodValues]

export type EvaluationMethods = Record<EvaluationMethodLabel, EvaluationMethodValues>
