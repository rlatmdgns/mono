/**
 * 멤버 필터링
 * @param sourceMemberList : 엑셀 멤버 리스트
 * @param dataEmailList : 멤버 유효성 데이터 리스트
 */
export const getMembersFilter = (sourceMemberList: any, dataEmailList: any) => {
  if (!(Array.isArray(sourceMemberList) || Array.isArray(dataEmailList))) return

  return sourceMemberList.filter((item: any) =>
    dataEmailList.some((member: any) => item.email === member),
  )
}
