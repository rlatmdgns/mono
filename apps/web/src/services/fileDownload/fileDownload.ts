import { Toast } from '@/shared/ui'
import { FileDownloadRequest } from '@/services/fileDownload/fileDownload.interface'

const getFileExtension = (url: string) => {
  const lastDotIndex = url.lastIndexOf('.')
  if (lastDotIndex === -1) {
    return ''
  }
  return url.substring(lastDotIndex + 1).split(/#|\?/)[0]
}

const fileDownload = async (file: FileDownloadRequest, title: string) => {
  fetch(file.file_url, {
    method: 'GET',
  })
    .then((res) => {
      return res.blob()
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob)
      const anchor = document.createElement('a')
      anchor.href = url
      anchor.download = `${title} ${file.file_name}.${getFileExtension(file.file_url)}`

      if (title === 'excel') {
        anchor.download = `${file.file_name}`
      }

      document.body.appendChild(anchor)
      anchor.click()
      setTimeout(() => {
        window.URL.revokeObjectURL(url)
      }, 60000)
      anchor.remove()
    })
    .catch((err) => {
      Toast.error(err)
    })
}

export default fileDownload
