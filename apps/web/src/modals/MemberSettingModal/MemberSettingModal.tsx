import useGetEnterpriseMember from '@/app/[locale]/settings/member/_hooks/useGetEnterpriseMember'
import { ModalLayout } from '@/shared/ui'
import { AUTHORITY } from '@/shared/constants'
import MemberSetting from '@/features/MemberSetting'
import { PostingMember } from '@/interface/posting'
import MemberSettingFooter from '@/modals/MemberSettingModal/components/MemberSettingFooter'
import MemberSettingHeader from '@/modals/MemberSettingModal/components/MemberSettingHeader'
import useUpdateMember from '@/modals/MemberSettingModal/hooks/useUpdateMember'
import React, { ChangeEvent, useDeferredValue, useEffect } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import * as Styles from './styles'
import { useDebounce, useGetPostingMember } from '@/shared/hooks'

interface MemberSettingModalProps {
  id: string
  onClose: () => void
}

type FormValues = {
  posting_member: PostingMember[]
}
const MemberSettingModal = ({ id, onClose }: MemberSettingModalProps) => {
  const method = useForm<FormValues>()

  const [search, setSearch] = React.useState('')
  const deferredQuery = useDeferredValue(`?search=${search}`)
  const { data } = useGetPostingMember(id)
  const { data: enterPriseData, refetch } = useGetEnterpriseMember(deferredQuery)
  const { updateMemberMutate } = useUpdateMember(id)

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (values: FieldValues) => {
    const postingMember = values.posting_member.filter(
      (member: PostingMember) => member.user_authority !== AUTHORITY.ADMIN,
    )
    const identifications = postingMember.map((member: PostingMember) => member.identification)
    updateMemberMutate(identifications)
    onClose()
  }

  useEffect(() => {
    if (!data) return

    method.setValue('posting_member', [...data.admin_member, ...data?.posting_member])
  }, [data])

  useDebounce(
    () => {
      if (!deferredQuery) return
      refetch()
    },
    500,
    deferredQuery,
  )

  return (
    <ModalLayout isDimmed>
      <Styles.Wrapper>
        <MemberSettingHeader onClick={onClose} />
        <FormProvider {...method}>
          <Styles.Form onSubmit={method.handleSubmit(handleSubmit)}>
            <Styles.Content>
              <MemberSetting
                members={enterPriseData?.enterprise_member || []}
                search={search}
                onSearch={handleSearch}
              />
            </Styles.Content>
            <MemberSettingFooter onClose={onClose} />
          </Styles.Form>
        </FormProvider>
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default MemberSettingModal
