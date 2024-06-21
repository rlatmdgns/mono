import React from 'react'
import * as Styles from './styles'

interface FilterDimmedProps {
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  selectMenu?: string
}

const FilterDimmed = ({ children, onClick, selectMenu }: FilterDimmedProps) => {
  return (
    <>
      {children}
      {selectMenu && <Styles.ModalLayout onClick={onClick}></Styles.ModalLayout>}
    </>
  )
}

export default FilterDimmed
