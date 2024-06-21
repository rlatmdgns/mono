export const isEmailValid = (email: string) => {
  const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
  return regex.test(email)
}

export const shortenEmail = (value: string) => {
  if (value.length <= 8) return value
  return value.slice(0, 8) + '...'
}
