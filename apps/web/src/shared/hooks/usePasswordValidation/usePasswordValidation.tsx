'use client'

import { useEffect, useState } from 'react'
import { defaultConditions } from '@/shared/hooks/usePasswordValidation/usePasswordValidation.constant'
import { createPasswordConditions } from '@/shared/hooks/usePasswordValidation/usePasswordValidation.factory'

export const usePasswordValidation = (password: string) => {
  const [conditions, setConditions] = useState(defaultConditions)

  useEffect(() => {
    if (!password) {
      return setConditions(defaultConditions)
    }
    setConditions(createPasswordConditions(password))
  }, [password])

  return {
    conditions,
  }
}
