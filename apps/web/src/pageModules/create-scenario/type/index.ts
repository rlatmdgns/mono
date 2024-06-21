import {
  UseFieldArrayAppend,
  UseFieldArrayInsert,
  UseFieldArrayRemove,
  UseFieldArrayReplace,
  UseFieldArrayUpdate,
} from 'react-hook-form'
import { Scene, SequenceInterface } from '@/entities/onboarding/types'

export type TargetType = {
  sequence: SequenceInterface
  index: number
  type: 'manager' | 'freshman'
}

export type SequenceField = { d_day: number; scenes: Scene[]; isAppend: boolean }

export type SequenceFieldArray = {
  manager: SequenceField[]
  freshman: SequenceField[]
}

export type ActionType<T extends keyof SequenceFieldArray> = {
  remove?: UseFieldArrayRemove
  append?: UseFieldArrayAppend<SequenceFieldArray, T>
  insert?: UseFieldArrayInsert<SequenceFieldArray, T>
  update?: UseFieldArrayUpdate<SequenceFieldArray, T>
  replace?: UseFieldArrayReplace<SequenceFieldArray, T>
}

export type ManagerActionType = ActionType<'manager'>
export type FreshmanActionType = ActionType<'freshman'>
