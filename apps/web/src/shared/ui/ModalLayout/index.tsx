'use client'

import React, { useEffect, useRef } from 'react'
import * as Styles from './styles'
import { useRecoilValue } from 'recoil'
import { modalListAtom } from '@/shared/model/modal/atom'

interface DimmedProps {
  children: React.ReactNode
  onClick?: () => void
  isDimmed?: boolean
  zIndex?: number
}

export const ModalLayout = ({ children, onClick, isDimmed = false, zIndex }: DimmedProps) => {
  const modalRef = useRef<null>(null)
  const modals = useRecoilValue(modalListAtom)

  const handleClick = (event: any) => {
    if (modalRef?.current !== event?.target) return
    if (!onClick) return
    onClick()
  }

  useEffect(() => {
    if (modals?.length < 1) {
      document.body.style.overflow = 'auto'
      return
    }
    document.body.style.overflow = 'hidden'
  }, [modals])

  return (
    <Styles.ModalLayout onClick={handleClick} ref={modalRef} $isDimmed={isDimmed} $zIndex={zIndex}>
      {children}
    </Styles.ModalLayout>
  )
}
