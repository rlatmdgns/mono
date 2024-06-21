'use client'

import { AUTHORITY } from '@/shared/constants'
import React from 'react'
import { useAuthority } from '@/shared/hooks/useAuthority'

export const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const Components: React.FC<P> = (props) => {
    const [isMounted, setIsMounted] = React.useState(false)
    const { authority } = useAuthority()

    React.useEffect(() => {
      setIsMounted(true)
    }, [])

    if (!isMounted) {
      return null
    }

    if (AUTHORITY.EVALUATOR === authority) {
      return null
    }

    return <WrappedComponent {...props} />
  }

  return Components
}
