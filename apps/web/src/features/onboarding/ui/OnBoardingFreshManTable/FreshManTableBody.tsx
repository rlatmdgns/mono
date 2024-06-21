import { tableBody } from './styles.css'
import { Freshman, FreshMenControl } from '@/entities/onboarding/types/freshman'
import { EmptyFreshManTable } from '@/features/onboarding/ui/EmptyFreshManTable'
import { FreshManTableItem } from './FreshManTableItem'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import { useState } from 'react'

interface FreshManTableBodyProps {
  freshmen: Freshman[]
  control: FreshMenControl
}

export const FreshManTableBody = ({ freshmen, control }: FreshManTableBodyProps) => {
  const { openModal, closeModal } = useModal()
  const [currentInput, setCurrentTarget] = useState({
    freshmanId: 0,
    targetName: '',
  })
  const isEmpty = freshmen.length < 1

  const handleSetCurrentTarget = (freshmanId: number, targetName: string) => {
    setCurrentTarget({
      freshmanId,
      targetName,
    })
  }
  const handleCurrentTargetReset = () => {
    setCurrentTarget({
      freshmanId: 0,
      targetName: '',
    })
  }

  const handleClick = () => {
    openModal(MODAL.CREATE_ATS_FRESHMAN, {
      onClose: () => closeModal(MODAL.CREATE_ATS_FRESHMAN),
    })
  }

  if (isEmpty) {
    return (
      <div className={tableBody}>
        <EmptyFreshManTable onClick={handleClick} />
      </div>
    )
  }

  return (
    <div className={tableBody}>
      {freshmen?.map((freshman, index) => (
        <FreshManTableItem
          key={`freshman_item_${index}`}
          name={freshman.name}
          scenarios={freshman.scenarios}
          postingTitle={freshman.posting_title}
          passDate={freshman.pass_date}
          employmentDate={freshman.employment_date}
          id={freshman.id}
          email={freshman.email}
          phone={freshman.phone}
          currentInput={currentInput}
          onCurrentTarget={handleSetCurrentTarget}
          onCurrentTargetReset={handleCurrentTargetReset}
          control={control}
        />
      ))}
    </div>
  )
}
