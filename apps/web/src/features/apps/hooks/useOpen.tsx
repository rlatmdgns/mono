import { useState } from 'react'

export const useOpen = () => {
  const [isOpen, setIsOpen] = useState(false)

  return {
    isOpen,
    handleOpen: () => {
      setIsOpen(!isOpen)
    },
    handleClose: () => {
      setIsOpen(false)
    },
  }
}
