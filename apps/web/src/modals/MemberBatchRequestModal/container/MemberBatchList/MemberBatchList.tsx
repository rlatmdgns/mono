import { useRecoilState } from 'recoil'
import {
  DuplicateMembersAtom,
  InvalidMembersAtom,
  MemberBatchRequestExcelDataAtom,
  RegisterOrInvitedMembersAtom,
  RequestMembersAtom,
} from '@/modals/MemberBatchRequestModal/recoil/atom'
import * as Styles from './styles'
import { ENTERPRISE_AUTHORITY_OPTIONS } from '@/shared/constants'
import { useEffect, useState } from 'react'
import InviteMemberList from '@/modals/MemberBatchRequestModal/components/InviteMemberList'
import getEnterpriseMemberCheck from '@/entities/enterprise/api/getEnterpriseMemberCheck'
import { Toast } from '@/shared/ui'
import RegisterOrMemberList from '@/modals/MemberBatchRequestModal/components/RegisterOrMemberList'
import { getMembersFilter } from '@/modals/MemberBatchRequestModal/container/MemberBatchList/MemberBatchList.function'
import { useTranslations } from 'next-intl'

const MemberBatchList = () => {
  const $t = useTranslations('messages')
  const [excelData, setExcelData] = useRecoilState(MemberBatchRequestExcelDataAtom)
  const [duplicateMember, setDuplicateMember] = useRecoilState(DuplicateMembersAtom)
  const [requestMember, setRequestMember] = useRecoilState(RequestMembersAtom)
  const [invalidMember, setInvalidMember] = useRecoilState(InvalidMembersAtom)
  const [registerOrInvitedMember, setRegisterOrInvitedMember] = useRecoilState(
    RegisterOrInvitedMembersAtom,
  )

  const [errorRows, setErrorRows] = useState<number[]>([])

  // 엑셀 데이터 변환
  const convertExcelData = () => {
    const convertBatchList = excelData
      .filter((item) => item.user_authority && item.email)
      .map((item) => ({
        email: item.email,
        user_authority: ENTERPRISE_AUTHORITY_OPTIONS.find(
          (option) => option.label === item.user_authority,
        )?.value,
      }))

    const emptyList = excelData.filter((item) => !item.user_authority || !item.email)

    if (emptyList.length > 0) {
      setErrorRows(emptyList.map((item) => item.__rowNum__))
    }

    const uniqueEmails = new Set()
    const duplicateList: any = []
    const requestMembers: any = []

    convertBatchList.forEach((item) => {
      if (uniqueEmails.has(item.email)) {
        duplicateList.push(item)
        return
      }

      uniqueEmails.add(item.email)
      requestMembers.push(item)
    })

    const correctWithRequestMembers = requestMembers.filter((item: any) => {
      return !duplicateList.some((data: any) => data.email === item.email)
    })

    // 중복되는 목록
    if (duplicateList.length > 0) {
      setDuplicateMember([...duplicateList])
    }

    // 요청 멤버
    if (requestMembers.length > 0) {
      handleValid(correctWithRequestMembers)
    }
  }

  const handleValid = async (invite_member: any) => {
    const invite_member_checklist = invite_member.map((member: any) => member.email).join(',')
    const response = await getEnterpriseMemberCheck(invite_member_checklist)
    const { data, success } = response

    if (success) {
      // 엑셀데이터 문제가 없을 때
      return setRequestMember([...invite_member])
    }

    // 유효성 검사 실패한 멤버들
    if (data?.invalid_member && data?.invalid_member.length > 0) {
      const invalidMember = getMembersFilter(invite_member, data.invalid_member)

      setInvalidMember([...invalidMember])
    }

    /**
     * 이미 초대된 멤버거나, 등록된 멤버
     */
    if (
      (data?.invited_member && data?.invited_member.length > 0) ||
      (data?.registered_member && data?.registered_member.length > 0)
    ) {
      const requestInvitedMember = [
        // 등록 되어있는 멤버
        ...getMembersFilter(invite_member, data.registered_member),

        // 이미 초대된 되어있는 멤버
        ...getMembersFilter(invite_member, data.invited_member),
      ]

      const duplicateInvitedMember = [
        ...getMembersFilter(duplicateMember, data.registered_member),
        ...getMembersFilter(duplicateMember, data.invited_member),
      ]

      if (requestInvitedMember.length > 0) {
        setRegisterOrInvitedMember(requestInvitedMember)
      }

      if (duplicateInvitedMember.length > 0) {
        const containMember = duplicateMember.filter(
          (member) => !duplicateInvitedMember.some((item) => item.email === member.email),
        )
        setDuplicateMember(containMember)
      }
    }

    if (data?.valid_member && data?.valid_member.length === 0) {
      Toast.error($t('empty_valid_data'))
    }

    // 유효성 검사 통과한 멤버들
    if (data?.valid_member && data?.valid_member.length > 0) {
      const validMember = invite_member.filter((item: any) =>
        data.valid_member.some((member: any) => item.email === member),
      )
      setRequestMember([...validMember])
    }
  }

  useEffect(() => {
    if (excelData.length > -1) {
      convertExcelData()
    }
  }, [excelData])

  if (excelData.length === 0) return

  return (
    <Styles.MemberBatchList>
      <RegisterOrMemberList />
      <InviteMemberList errorRows={errorRows} />
    </Styles.MemberBatchList>
  )
}

export default MemberBatchList
