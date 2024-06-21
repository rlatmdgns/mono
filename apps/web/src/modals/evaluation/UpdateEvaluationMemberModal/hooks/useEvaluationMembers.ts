import { ChangeEvent, useState } from 'react'
import { PostingMember } from '@/interface/posting'
import { useFormContext } from 'react-hook-form'
import { AUTHORITY } from '@/shared/constants'

export const useEvaluationMembers = (
  postingMembers: PostingMember[],
  defaultSelectedMemberIds: string[],
) => {
  const { watch, setValue } = useFormContext()
  const [searchValue, setSearchValue] = useState('')

  const selectedMembers = watch('evaluationMembers')

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)

  const isSelected = (identification: string) => selectedMembers.includes(identification)

  const sortMemberByIsSelected = postingMembers?.toSorted((prevMember, nextMember) => {
    const isSelectedFront =
      defaultSelectedMemberIds.includes(prevMember.identification) &&
      !defaultSelectedMemberIds.includes(nextMember.identification)
    if (isSelectedFront) {
      return -1
    }
    return 1
  })
  const searchPostingMembers = sortMemberByIsSelected.filter((member) =>
    member.user_name.includes(searchValue),
  )

  const isAllSelected = selectedMembers.length === sortMemberByIsSelected.length

  const handleSelect = (identification: string) => {
    if (isSelected(identification)) {
      return setValue(
        'evaluationMembers',
        selectedMembers.filter((id: string) => id !== identification),
      )
    }
    setValue('evaluationMembers', [...selectedMembers, identification])
  }

  const handleSelectAll = () => {
    const fixedMemberIds = sortMemberByIsSelected
      .filter((member) => member.user_authority !== AUTHORITY.EVALUATOR)
      .map((member) => member.identification)

    if (isAllSelected) {
      return setValue('evaluationMembers', fixedMemberIds)
    }
    setValue(
      'evaluationMembers',
      sortMemberByIsSelected.map((member) => member.identification),
    )
  }

  return {
    searchValue,
    handleSearch,
    searchPostingMembers,
    isSelected,
    handleSelect,
    isAllSelected,
    handleSelectAll,
  }
}
