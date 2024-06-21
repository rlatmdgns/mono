import { isBoardViewAtom } from '@/app/[locale]/postings/_recoil'
import React from 'react'

import { useRecoilState } from 'recoil'
import * as Styles from './styles'

import { Icon } from '@repo/ui'

const ViewToggle = () => {
  const [isBoardView, setIsBoardView] = useRecoilState(isBoardViewAtom)

  const handleToggle = () => {
    setIsBoardView(!isBoardView)
  }

  return (
    <Styles.ToggleButton $isBoardView={isBoardView} onClick={handleToggle}>
      <Icon icon="icon/kanban-solid" color="neutralGray400" />
      <Icon icon="icon/list-solid" color="neutralGray400" />
    </Styles.ToggleButton>
  )
}

export default ViewToggle
