import { QUERY_KEY } from '@/shared/constants'
import { Template, TemplateParams } from '@/interface/template'
import getTemplates from '@/services/template/getTemplates'
import { useQuery } from '@tanstack/react-query'

const useTemplates = (params: TemplateParams, initialData?: Template[]) => {
  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEY.SETTING_TEMPLATE],
    queryFn: () => getTemplates(params),
    initialData,
  })
  return {
    data,
    refetch,
  }
}

export default useTemplates
