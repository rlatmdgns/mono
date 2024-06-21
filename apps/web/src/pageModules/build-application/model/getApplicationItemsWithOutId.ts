export const getApplicationItemsWithOutId = (values: any[]) => {
  return values.map((value) => {
    const {
      id,
      created_at,
      updated_at,
      is_deleted,
      documents,
      questions,
      en,
      ko,
      Component,
      icon,
      ...rest
    } = value
    if (documents) {
      return {
        ...rest,
        documents: documents.map((document: any) => {
          const { id, created_at, updated_at, is_deleted, ...rest } = document
          return rest
        }),
      }
    }
    if (questions) {
      return {
        ...rest,
        questions: questions.map((question: any) => {
          const { id, created_at, updated_at, is_deleted, ...rest } = question
          return rest
        }),
      }
    }
    return rest
  })
}
