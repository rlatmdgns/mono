import { QUERY_KEY } from '@/shared/constants'
import getTemplateContent from '@/services/template/getTemplateContent'
import { useQuery } from '@tanstack/react-query'

export const useTemplateContent = (id?: string | number) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.TEMPLATE_CONTENT, id],
    queryFn: () => getTemplateContent(`${id}`),
    enabled: !!id,
  })

  return {
    data,
  }
}
