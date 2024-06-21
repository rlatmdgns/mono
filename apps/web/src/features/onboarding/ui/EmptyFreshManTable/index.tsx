import { Button, Empty } from '@repo/ui'

interface EmptyFreshManTableProps {
  onClick: () => void
}

export const EmptyFreshManTable = ({ onClick }: EmptyFreshManTableProps) => {
  return (
    <Empty
      iconSource="icon/member-solid"
      title="입사자가 없습니다"
      description="ATS 최종 절차에 있는 지원자를 추가해 온보딩을 진행해보세요."
    >
      <Button onClick={onClick} text="입사자 추가" leadingIcon="icon/plus-line" />
    </Empty>
  )
}
