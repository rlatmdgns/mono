import { atom } from 'recoil'
import {
  EvaluationIds,
  EvaluationMemberResult,
  EvaluationSelectOption,
  EvaluationViewState,
} from '@/features/Evaluation/Evaluation.interface'
import { EvaluationMemberResultResponse } from '@/services/evaluation/getEvaluationMemberResult/getEvaluationMemberResult.interface'

export const evaluationTableStatusSelectAtom = atom<EvaluationSelectOption[]>({
  key: 'evaluationTableStatusSelectAtom',
  default: [{ value: 'all', label: '전체' }],
})

export const evaluationViewStateAtom = atom<EvaluationViewState>({
  key: 'evaluationViewState',
  default: 'main',
})

export const evaluationIdsAtom = atom<EvaluationIds>({
  key: 'evaluationIds',
  default: {
    evaluationId: '',
    tableId: '',
  },
})

export const evaluationMemberResultAtom = atom<EvaluationMemberResult>({
  key: 'evaluationMemberResult',
  default: {
    identifications: [],
    selectedIdentification: '',
  },
})

export const evaluationMemberAccessAtom = atom<boolean>({
  key: 'evaluationMemberAccess',
  default: false,
})

export const myEvaluationResultAtom = atom<EvaluationMemberResultResponse | null>({
  key: 'myEvaluationResult',
  default: null,
})
