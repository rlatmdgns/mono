'use client'

import ChangeAuthority from '@/app/[locale]/settings/member/_components/ChangeAuthority'
import DeleteMember from '@/app/[locale]/settings/member/_components/DeleteMember'
import { getEnterpriseMemberSearchParams } from '@/app/[locale]/settings/member/_components/MemberRow/member.factory'
import * as MemberTableStyles from '@/app/[locale]/settings/member/_container/MemberContainer/styles'
import useDeleteMember from '@/app/[locale]/settings/member/_hooks/useDeleteMember'
import useGetEnterpriseMember from '@/app/[locale]/settings/member/_hooks/useGetEnterpriseMember'
import useUpdateMemberAuthority from '@/app/[locale]/settings/member/_hooks/useUpdateMemberAuthority'
import {
  CurrentAuthorityAtom,
  CurrentMemberAtom,
  CurrentTabAtom,
  searchAtom,
  TabCountAtom,
} from '@/app/[locale]/settings/member/_recoil/atom'
import { userAtom } from '@/shared/model/user/atom'
import { Avatar, Toast, Tooltip } from '@/shared/ui'
import { PAGE } from '@/shared/constants'
import ConfirmModal from '@/modals/ConfirmModal'
import deleteUser from '@/services/auth/user/deleteUser'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import * as Styles from './styles'
import { EnterpriseMemberResponse } from '@/interface/enterpriseMember'
import { PostingMember } from '@/interface/posting'
import { MemberData } from '@/interface/member'
import { useTranslations } from 'next-intl'

interface MemberRowProps {
  initialData?: EnterpriseMemberResponse
}

const MemberRow = ({ initialData }: MemberRowProps) => {
  const $t = useTranslations()
  const [members, setMembers] = useState<PostingMember[] | MemberData[]>([])

  const router = useRouter()
  const setTabCount = useSetRecoilState(TabCountAtom)
  const currentMember = useRecoilValue(CurrentMemberAtom)
  const currentAuthority = useRecoilValue(CurrentAuthorityAtom)

  const [changeConfirm, setChangeConfirm] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false)
  const [expireConfirm, setExpireConfirm] = useState(false)
  const clearCurrentMember = useResetRecoilState(CurrentMemberAtom)

  const currentTab = useRecoilValue(CurrentTabAtom)
  const searchData = useRecoilValue(searchAtom)

  const user = useRecoilValue(userAtom)
  const authority = user.enterprise.user_authority

  const searchParams = getEnterpriseMemberSearchParams(searchData, currentTab)
  const { data } = useGetEnterpriseMember(searchParams, initialData)

  const handleSetTabCount = () => {
    if (data) {
      setTabCount({
        admin: data.admin_member_count,
        evaluation: data.evaluation_member_count,
        recruitment: data.recruit_member_count,
        enterprise: data.enterprise_member_count,
        waiting: data.waiting_member_count,
      })
    }
  }

  const handleChangeConfirm = (status: boolean) => {
    setChangeConfirm(status)
  }

  const handleDeleteConfirm = (status: boolean) => {
    setDeleteConfirm(status)
  }

  const { updateMemberAuthorityMutate } = useUpdateMemberAuthority()
  const { deleteMemberMutate } = useDeleteMember()

  useEffect(() => {
    handleSetTabCount()
    if (!data) return
    setMembers(data.enterprise_member)
  }, [data])

  if (!data) return

  const handleUpdateMemberAuthority = () => {
    updateMemberAuthorityMutate({
      identification: currentMember.identification,
      user_authority: currentAuthority.value,
    })
  }

  const handleClearConfirm = () => {
    handleChangeConfirm(false)
    clearCurrentMember()
  }

  const handleExpireConfirm = (status: boolean) => {
    setExpireConfirm(status)
  }

  const handleExpire = async () => {
    const adminMemberListLength = members.filter(
      (member) => member.user_authority === 'adminMember',
    ).length
    if (adminMemberListLength === 1) {
      Toast.error($t('messages.admin_assignment_required_message'))
      return
    }

    try {
      await deleteUser()
      Toast.success($t('messages.workspace_withdraw_success'))
      router.push(PAGE.SIGN_IN)
    } catch (error: any) {
      Toast.error(error.message)
    }
  }

  if (members.length === 0) {
    return (
      <Styles.MemberBody>
        <Styles.NoList>{$t('setting.member_setting.no_search_member')}</Styles.NoList>
      </Styles.MemberBody>
    )
  }

  return (
    <Styles.MemberBody>
      {members.map((data, index) => (
        <MemberTableStyles.MemberRow key={`tr_${index}`}>
          <MemberTableStyles.Data>
            <Styles.MemberWrap>
              <Avatar alt={''} src={data.user_profile} />
              {data.user_name}
            </Styles.MemberWrap>
          </MemberTableStyles.Data>
          <MemberTableStyles.Data>
            <Tooltip text={!data.user_email ? '-' : (data.user_email as string)} isOverflow>
              {data.user_email}
            </Tooltip>
          </MemberTableStyles.Data>
          <MemberTableStyles.Data>
            <Tooltip
              text={!data.user_department ? '-' : (data.user_department as string)}
              isOverflow
            >
              {!data.user_department ? '-' : data.user_department}
            </Tooltip>
          </MemberTableStyles.Data>
          <MemberTableStyles.Data>
            <Tooltip text={!data.user_job ? '-' : (data.user_job as string)} isOverflow>
              {!data.user_job ? '-' : data.user_job}
            </Tooltip>
          </MemberTableStyles.Data>
          <MemberTableStyles.Data>
            <ChangeAuthority
              data={data}
              authority={authority}
              changeConfirm={changeConfirm}
              handleChangeConfirm={handleChangeConfirm}
            />
          </MemberTableStyles.Data>
          <DeleteMember
            data={data}
            authority={authority}
            deleteConfirm={deleteConfirm}
            expireConfirm={expireConfirm}
            handleDeleteConfirm={handleDeleteConfirm}
            handleExpireConfirm={handleExpireConfirm}
          />
        </MemberTableStyles.MemberRow>
      ))}
      {changeConfirm && (
        <Styles.ConfirmWrapper>
          <ConfirmModal
            iconSource="icon/member-solid"
            title={$t('messages.change_member_authority_confirm', {
              user_name: currentMember.user_name,
              authority: currentAuthority.label,
            })}
            textConfirm={$t('common.confirm')}
            textCancel={$t('common.close')}
            state={'positive'}
            onClick={() => {
              handleUpdateMemberAuthority()
              handleClearConfirm()
            }}
            onClose={handleClearConfirm}
          />
        </Styles.ConfirmWrapper>
      )}
      {deleteConfirm && (
        <Styles.ConfirmWrapper>
          <ConfirmModal
            iconSource="icon/warning-solid"
            title={$t('messages.kick_member_confirm', { user_name: currentMember.user_name })}
            textConfirm={$t('common.confirm')}
            onClick={() => {
              deleteMemberMutate(currentMember.identification)
              handleDeleteConfirm(false)
              Toast.success(
                $t('messages.kick_member_success', { user_name: currentMember.user_name }),
              )
            }}
            onClose={() => handleDeleteConfirm(false)}
          />
        </Styles.ConfirmWrapper>
      )}
      {expireConfirm && (
        <Styles.ConfirmWrapper>
          <ConfirmModal
            title={$t('messages.workspace_withdraw_confirm')}
            textCancel={$t('common.close')}
            textConfirm={$t('common.withdrawal')}
            onClick={handleExpire}
            onClose={() => handleExpireConfirm(false)}
          />
        </Styles.ConfirmWrapper>
      )}
    </Styles.MemberBody>
  )
}
export default MemberRow
