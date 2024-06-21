export const isDateValid = (date: number) => {
  const stringValue = date.toString()
  const dateString = `20${stringValue.slice(0, 2)}-${stringValue.slice(2, 4)}-${stringValue.slice(4)}`
  return new Date(dateString).toString() === 'Invalid Date'
}
