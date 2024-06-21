import { getURLSearchParams } from '@/shared/lib/utils'

export const getEnterpriseMemberSearchParams = (search: string, currentTab: string) => {
  const params = () => {
    const isEnterpriseMembers = currentTab === 'enterprise'
    if (!search && isEnterpriseMembers) {
      return ''
    }
    if (!search && !isEnterpriseMembers) {
      return {
        user_authority: `${currentTab}Member`,
      }
    }
    if (search && isEnterpriseMembers) {
      return {
        search: search,
      }
    }
    if (search && !isEnterpriseMembers) {
      return {
        search: search,
        user_authority: `${currentTab}Member`,
      }
    }
  }
  return getURLSearchParams(params())
}
