import * as Styles from './styles'
import MemberList from '@/modals/evaluation/UpdateEvaluationMemberModal/components/MemberList'
import { PostingMember } from '@/interface/posting'
import { useEvaluationMembers } from '@/modals/evaluation/UpdateEvaluationMemberModal/hooks/useEvaluationMembers'
import { CheckBoxIcon, SearchInput } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface EvaluationUserBodyProps {
  postingMembers: PostingMember[]
  defaultSelectedMemberIds: string[]
}

const UpdateEvaluationMemberBody = ({
  postingMembers,
  defaultSelectedMemberIds,
}: EvaluationUserBodyProps) => {
  const {
    searchValue,
    handleSearch,
    searchPostingMembers,
    isSelected,
    handleSelect,
    handleSelectAll,
    isAllSelected,
  } = useEvaluationMembers(postingMembers, defaultSelectedMemberIds)

  const $t = useTranslations('common')
  return (
    <Styles.Wrapper>
      <SearchInput value={searchValue} onChange={handleSearch} placeholder="검색" />
      <Styles.AllCheckBox onClick={handleSelectAll}>
        <CheckBoxIcon checked={isAllSelected} />
        {$t('whole_selection')}
      </Styles.AllCheckBox>
      <MemberList
        postingMembers={searchPostingMembers}
        isSelected={isSelected}
        onSelect={handleSelect}
      />
    </Styles.Wrapper>
  )
}

export default UpdateEvaluationMemberBody
