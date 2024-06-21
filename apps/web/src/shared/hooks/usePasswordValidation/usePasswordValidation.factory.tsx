import { defaultConditions } from '@/shared/hooks/usePasswordValidation/usePasswordValidation.constant'

const validation = (text: string, password: string) => {
  const upperCaseReg = /[A-Z]/g
  const lowerCaseReg = /[a-z]/g
  const numberReg = /[0-9]/g
  const specialCharReg = /[!@#$%^&*(),.?":{}|<>]/g
  const minLengthReg = /.{7,}/g

  switch (text) {
    case '영어 대문자':
      return upperCaseReg.test(password)
    case '영어 소문자':
      return lowerCaseReg.test(password)
    case '숫자':
      return numberReg.test(password)
    case '특수문자':
      return specialCharReg.test(password)
    case '7자 이상':
      return minLengthReg.test(password)
    default:
      return false
  }
}

export const createPasswordConditions = (password: string) => {
  return defaultConditions?.map((condition) => {
    return {
      ...condition,
      isChecked: validation(condition.text, password),
    }
  })
}
