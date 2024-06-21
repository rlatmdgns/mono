'use client'

import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { modalListAtom } from '@/shared/model/modal/atom'
import { MODAL_COMPONENTS } from './ModalContainer.constant'
import { usePathname } from 'next/navigation'
import { useModal } from '@/shared/hooks'

function ModalContainer() {
  const [mounted, setMounted] = useState(false)
  const { closeModal } = useModal()
  const pathname = usePathname() as string
  const reset = useResetRecoilState(modalListAtom)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (pathname.includes('calendar')) return
    reset()
  }, [pathname])

  const handleClose = (id: string) => closeModal(id)

  const modalList = useRecoilValue(modalListAtom)
  const renderModal = modalList?.map((modal) => {
    const ModalComponent = MODAL_COMPONENTS[modal.id]
    return <ModalComponent key={modal.id} onClose={() => handleClose(modal.id)} {...modal.props} />
  })

  return mounted ? createPortal(renderModal, document.getElementById('modal') as HTMLElement) : null
}

export default ModalContainer
