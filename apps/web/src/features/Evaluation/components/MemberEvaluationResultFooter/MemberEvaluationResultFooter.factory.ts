import { EvaluationMemberResult } from '@/features/Evaluation/Evaluation.interface'

export const getMemberEvaluationResult = (
  evaluationMemberResult: EvaluationMemberResult,
  handleSelectedIdChange: (id: string) => void,
) => {
  const { identifications, selectedIdentification } = evaluationMemberResult
  const selectedIdentificationIndex = identifications.findIndex(
    (id) => id === selectedIdentification,
  )
  const isArrowDisabled = identifications.length < 2
  const prevMemberId =
    identifications[selectedIdentificationIndex - 1] || identifications[identifications.length - 1]
  const nextMemberId = identifications[selectedIdentificationIndex + 1] || identifications[0]

  const handlePrev = () => {
    handleSelectedIdChange(prevMemberId)
  }

  const handleNext = () => {
    handleSelectedIdChange(nextMemberId)
  }

  return {
    isArrowDisabled,
    handlePrev,
    handleNext,
  }
}
