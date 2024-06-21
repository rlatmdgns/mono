'use client'
import 'react-toastify/dist/ReactToastify.css'
import * as Styles from './styles'
import CloseButton from '@/shared/lib/ToastProvider/CloseButton'
import { ReactNode } from 'react'
import { Zoom } from 'react-toastify'

interface ToastProviderProps {
  children: ReactNode
}

function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <Styles.Container
        position="bottom-center"
        autoClose={2000}
        transition={Zoom}
        hideProgressBar={true}
        draggable={false}
        pauseOnFocusLoss={false}
        pauseOnHover={true}
        closeOnClick={false}
        closeButton={<CloseButton />}
      />
    </>
  )
}

export default ToastProvider
