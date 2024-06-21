import { FieldValues } from 'react-hook-form'

export const filterIds = (data: FieldValues) => {
  const ids = []
  for (const key in data) {
    if (data[key]) {
      ids.push(key)
    }
  }
  return ids
}
