import { Avatar, IconButton } from '@/shared/ui'
import React from 'react'
import * as Styles from './styles'

interface AddSelectMemberProps {
  id?: string
  name: string
  profile?: string
  onClick: (id?: string) => void
  isNotDelete?: boolean
}

const AddSelectMember = ({
  id,
  name,
  profile,
  onClick,
  isNotDelete = false,
}: AddSelectMemberProps) => {
  if (!profile) return null
  return (
    <Styles.Member>
      <Avatar alt={name} size="lg" src={profile} />
      <Styles.Name>{name}</Styles.Name>
      {!isNotDelete && (
        <IconButton icon="icon/cancle-solid" size="xs" onClick={() => onClick(id)} />
      )}
    </Styles.Member>
  )
}

export default AddSelectMember
