import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { uploadStreamDocs } from '@/features/streamdocs/api/uploadStreamDocs'
import { UploadStreamDocsRequest } from '@/features/streamdocs/type'

export const useUploadStreamDocs = (id: number) => {
  const queryClient = useQueryClient()
  const { mutate: uploadStreamDocsMutate, isSuccess } = useMutation({
    mutationKey: [MUTATION_KEY.APPLICANT_FILE_STREAMDOC],
    mutationFn: (steadDoc: UploadStreamDocsRequest) => uploadStreamDocs(steadDoc.id, steadDoc.type),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.APPLICANT_FILE, id] })
    },
    onError: (error) => {
      console.error(error)
    },
  })
  return {
    isSuccess,
    uploadStreamDocsMutate,
  }
}
