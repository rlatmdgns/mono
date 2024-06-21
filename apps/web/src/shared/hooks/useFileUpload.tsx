import temporaryFile from '@/services/temporaryFile'

export const useFileUpload = () => {
  const fileUpload = async (file: File) => {
    const formData = new FormData()
    const name = file.name
    formData.append('file', file)
    const { temporary } = await temporaryFile(formData)
    const { url, file_name } = temporary

    return { url, name, file_name }
  }

  return { fileUpload }
}
