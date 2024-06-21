export const getCheckIcon = (
  isMemberEvaluationSubmitted?: boolean,
): {
  iconSource: 'icon/loading-solid' | 'icon/check-solid'
  iconColor: 'neutralGray600' | 'blue500'
} => {
  if (!isMemberEvaluationSubmitted)
    return {
      iconSource: 'icon/loading-solid',
      iconColor: 'neutralGray600',
    }

  return {
    iconSource: 'icon/check-solid',
    iconColor: 'blue500',
  }
}
