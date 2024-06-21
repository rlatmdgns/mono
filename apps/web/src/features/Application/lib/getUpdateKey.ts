export const getUpdateKey = (key: string, property: string) => {
  if (key.includes('documents')) {
    return `documents.${property}`
  }
  if (key.includes('questions')) {
    return `questions.${property}`
  }
  return property
}
