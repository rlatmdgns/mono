const getSourceStepApplicants = (applicants: any, id: string) => {
  return applicants.filter((applicant: any) => applicant.step_id === id)
}

const getDiffStepApplicants = (applicants: any, id: string) => {
  return applicants.filter((applicant: any) => applicant.step_id !== id)
}

const isIncluded = (selectApplicants: any, applicant: any) => {
  return selectApplicants.some(
    (selectApplicant: any) => selectApplicant.applicant_id === String(applicant.applicant_id),
  )
}

export const moveStep = (applicants: any, result: any) => {
  return applicants.map((applicant: any) => {
    if (String(applicant.applicant_id) === String(result.draggableId)) {
      return {
        ...applicant,
        step_id: result.destination.droppableId,
        index: result.destination.index,
      }
    }
    return applicant
  })
}

export const applicantSort = (applicants: any, result: any) => {
  const prevApplicants = getDiffStepApplicants(applicants, result.source.droppableId)

  const sourceStepApplicants = getSourceStepApplicants(applicants, result.source.droppableId)

  const [applicant] = sourceStepApplicants.splice(result.source.index, 1)
  const reorderedApplicant = { ...applicant, sort: result.destination.index }
  sourceStepApplicants.splice(result.destination.index, 0, reorderedApplicant)

  const newApplicants = sourceStepApplicants.map((applicant: any, index: any) => {
    return { ...applicant, sort: index }
  })

  return [...prevApplicants, ...newApplicants]
}

//multi drag

const getNoneTargetApplicants = (applicants: any, selectApplicants: any) => {
  return applicants.filter((applicant: any) => {
    if (!isIncluded(selectApplicants, applicant)) {
      return applicant
    }
  })
}

const getTargetApplicants = (applicants: any, selectApplicants: any) => {
  return applicants.filter((applicant: any) => {
    if (isIncluded(selectApplicants, applicant)) {
      return applicant
    }
  })
}

export const moveMultiStep = (applicants: any, selectApplicants: any, result: any) => {
  return applicants.map((applicant: any) => {
    if (isIncluded(selectApplicants, applicant)) {
      return {
        ...applicant,
        step_id: result.destination.droppableId,
      }
    }
    return applicant
  })
}

export const applicantMultiSort = (applicants: any, selectApplicants: any, result: any) => {
  const prevApplicants = getDiffStepApplicants(applicants, result.source.droppableId)

  const sourceStepApplicants = getSourceStepApplicants(applicants, result.source.droppableId)

  const noneTargetApplicants = getNoneTargetApplicants(sourceStepApplicants, selectApplicants)

  const targetApplicants = getTargetApplicants(sourceStepApplicants, selectApplicants)

  noneTargetApplicants.splice(result.destination.index, 0, ...targetApplicants)

  return [...prevApplicants, ...noneTargetApplicants]
}
