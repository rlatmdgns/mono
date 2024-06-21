interface CustomError {
  message: string
  status: number
  success: boolean
}

export class ApiError extends Error {
  success: boolean
  status: number

  constructor(error: CustomError) {
    super(error.message)
    this.name = getErrorName(error.status)
    this.success = error.success
    this.status = error.status
  }
}

const getErrorName = (status: number) => {
  let name = 'Api Error'
  switch (status) {
    case 400:
      name = 'Bad Request'
      break
    case 401:
      name = 'Unauthorized'
      break
    case 403:
      name = 'Forbidden'
      break
    case 404:
      name = 'Not Found'
      break
    case 405:
      name = 'Method Not Allowed'
      break
    case 500:
      name = 'Internal Server Error'
      break
    case 503:
      name = 'Time Out'
      break
    default:
      name = `[${status}] Api Error`
  }

  return name
}
