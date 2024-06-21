export const getState = (isInputStarted: boolean, isValid: boolean) => {
  if (isInputStarted && isValid) return 'success'
  if (isInputStarted && !isValid) return 'error'
  return undefined
}

export const getGuideText = (isInputStarted: boolean, isValid: boolean, message: string) => {
  if (isInputStarted && !isValid) return message
  return undefined
}
