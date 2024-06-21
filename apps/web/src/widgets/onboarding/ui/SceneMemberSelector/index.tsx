'use client'

import { SceneMemberList } from '@/entities/onboarding'
import { HandleAppendReceive, HandleRemoveReceive } from '@/entities/onboarding/types/receive'
import { SceneMemberAddButton, SceneMemberSearchInput } from '@/features/onboarding'
import { Receivers } from '@/features/onboarding/ui'
import { ChangeEvent, useEffect, useState } from 'react'
import { SceneMemberSelectorHeader } from './SceneMemberSelectorHeader'
import { wrapper } from './style.css'
import { useGetOmsMember } from '@/features/onboarding/hooks/useGetOmsMember'
import { SceneMemberItem } from '@/entities/onboarding/types'

interface SceneMemberSelectorProps {
  receivers: any
  onClose: () => void
  onAppendReceiver: HandleAppendReceive
  onRemoveReceiver: HandleRemoveReceive
}

export const SceneMemberSelector = ({
  receivers,
  onClose,
  onAppendReceiver,
  onRemoveReceiver,
}: SceneMemberSelectorProps) => {
  const [value, setValue] = useState('')
  const [members, setMembers] = useState<SceneMemberItem[]>([])
  const { data } = useGetOmsMember()

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleAppendMember = (
    type: 'ATS' | 'OMS',
    email: string,
    id?: string | number,
    name?: string,
    profile?: string,
  ) => {
    onAppendReceiver(type, email, id, name, profile)
  }

  const handleSetMember = (data: SceneMemberItem[]) => {
    if (!data) return
    const omsMembers: SceneMemberItem[] = data.map((member: SceneMemberItem) => {
      return {
        ...member,
        type: 'ATS',
      }
    })

    setMembers(omsMembers)
  }

  useEffect(() => {
    handleSetMember(data)
  }, [data])

  return (
    <div className={wrapper}>
      <SceneMemberSelectorHeader onClose={onClose} />
      <Receivers receivers={receivers} onRemoveReceiver={onRemoveReceiver} />
      <SceneMemberSearchInput value={value} onChange={handleSearch} />
      <SceneMemberAddButton value={value} onClick={handleAppendMember} />
      <SceneMemberList
        value={value}
        members={members}
        receivers={receivers}
        onClick={handleAppendMember}
      />
    </div>
  )
}
