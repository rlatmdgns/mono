export const validateName = (name: string) => {
  const regex = /^[a-zA-Z가-힣\s]*$/
  return regex.test(name) && name.trim() !== ''
}

export const validatePhoneNumber = (phone: string) => {
  return /^010[0-9]{4}[0-9]{4}$/.test(phone)
}

export const validateEmail = (email: string) => {
  const regex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z][-_]*)*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/gi
  return regex.test(email)
}

export const getDefaultValuesValid = (key: string, value: string) => {
  let isValid
  switch (key) {
    case 'name':
      isValid = validateName(value)
      break
    case 'phone':
      isValid = validatePhoneNumber(value)
      break
    case 'email':
      isValid = validateEmail(value)
      break
    default:
      isValid = true
  }

  return isValid
}
