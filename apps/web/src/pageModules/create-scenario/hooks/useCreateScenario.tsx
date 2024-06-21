import { AddSequenceValue } from '@/features/onboarding/type'
import { useFieldArray, useForm } from 'react-hook-form'
import { useScenarioHandler } from '@/pageModules/create-scenario/hooks/useScenarioHandler'
import { removeSequence } from '@/pageModules/create-scenario/model/removeSequence'
import { SequenceInterface } from '@/entities/onboarding/types'
import { appendValidWithAction } from '@/pageModules/create-scenario/model/appendSequence'
import { updateValidWithAction } from '@/pageModules/create-scenario/model/updateSequence'
import { DEFAULT_SCENARIO } from '@/entities/onboarding/constants'

export const useCreateScenario = (initialData: any, scrollElement: HTMLDivElement | null) => {
  // const {initManager, initFreshman} = getConvertSequenceRow(initSequence)
  const methods = useForm({
    defaultValues: {
      manager: initialData.manager || DEFAULT_SCENARIO.manager,
      freshman: initialData.freshman || DEFAULT_SCENARIO.freshman,
    },
  })

  const {
    fields: managerFields,
    append: managerAppend,
    remove: managerRemove,
    update: managerUpdate,
  } = useFieldArray({
    control: methods.control,
    name: 'manager',
  })

  const {
    fields: freshmanFields,
    append: freshmanAppend,
    remove: freshmanRemove,
    update: freshmanUpdate,
  } = useFieldArray({
    control: methods.control,
    name: 'freshman',
  })

  const { handleUpdateConfirmModal, handleOpenModal } = useScenarioHandler()

  const moveAppendWithUpdateScrollPosition = (d_day: number) => {
    const sequenceIndex = methods
      .watch('manager')
      .findIndex((sequence: SequenceInterface) => sequence.d_day === d_day)
    if (!scrollElement) return
    if (sequenceIndex === -1) return

    scrollElement.scrollTo({
      top: sequenceIndex * 300,
      behavior: 'smooth',
    })
  }

  const moveRemoveScrollPosition = (index: number) => {
    const hasRemoveSequence = methods.watch('manager')[index + 1]
    if (!scrollElement) return
    if (!hasRemoveSequence) return

    scrollElement.scrollTo({
      top: (index + 1) * 300,
      behavior: 'smooth',
    })
  }

  const getSortSequence = () => {
    methods
      .getValues('manager')
      .sort((a: SequenceInterface, b: SequenceInterface) => a.d_day - b.d_day)
    methods
      .getValues('freshman')
      .sort((a: SequenceInterface, b: SequenceInterface) => a.d_day - b.d_day)
  }

  const handleAppend = (value: AddSequenceValue) => {
    const action = {
      freshman: {
        update: freshmanUpdate,
        append: freshmanAppend,
      },
      manager: {
        update: managerUpdate,
        append: managerAppend,
      },
    }
    const { authority, d_day } = value
    const sequences = {
      manager: methods.getValues('manager'),
      freshman: methods.getValues('freshman'),
    }

    appendValidWithAction(authority, d_day, sequences, action)
    getSortSequence()
    moveAppendWithUpdateScrollPosition(d_day)
  }

  const handleUpdate = (index: number, type: 'manager' | 'freshman', d_day: number) => {
    const action = {
      freshman: {
        append: freshmanAppend,
        update: freshmanUpdate,
      },
      manager: {
        append: managerAppend,
        update: managerUpdate,
      },
    }
    const sequences = {
      manager: methods.getValues('manager'),
      freshman: methods.getValues('freshman'),
    }

    updateValidWithAction(type, index, d_day, sequences, action, methods)
    getSortSequence()
    moveAppendWithUpdateScrollPosition(d_day)
  }

  const handleRemove = (index: number, type: 'manager' | 'freshman') => {
    const target = {
      sequence: methods.getValues(type)[index],
      index,
      type,
    }

    const action = {
      manager: {
        update: managerUpdate,
      },
      freshman: {
        update: freshmanUpdate,
      },
    }
    const { isSequenceInnerScenes, removeSequenceApply } = removeSequence(target, action[type])
    if (isSequenceInnerScenes) {
      return handleOpenModal(removeSequenceApply)
    }
    removeSequenceApply()
    moveRemoveScrollPosition(index)
  }

  return {
    methods,
    handleAppend,
    handleRemove,
    handleUpdate,
  }
}
