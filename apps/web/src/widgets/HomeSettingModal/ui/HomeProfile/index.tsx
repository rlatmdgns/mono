import React, { useEffect, useState } from 'react'
import * as Styles from './styles'
import { Avatar } from '@/shared/ui'
import { useAccount } from '@/shared/hooks'
import { User } from '@/interface/user'
import temporaryFile from '@/services/temporaryFile'
import { Icon } from '@repo/ui'

export const HomeProfile = ({ user }: { user: User }) => {
  const { updateAccountMutate } = useAccount()
  const [avatarImg, setAvatarImg] = useState('')

  const handleModifyAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return
    const formData = new FormData()
    formData.append('file', event.target.files[0])

    const result = await temporaryFile(formData)
    setAvatarImg(result.temporary.url)

    event.target.value = ''

    const postData = { ...user }
    postData.user_profile = result.temporary.url
    updateAccountMutate(postData)
  }

  useEffect(() => {
    setAvatarImg(user?.user_profile)
  }, [])

  return (
    <Styles.Profile>
      <Styles.AvatarWrapper>
        <Styles.ProfileAvatar>
          <Styles.ProfileInput
            type="file"
            id="edit-profile"
            accept=".jpg, .png"
            onChange={handleModifyAvatar}
          />
          <Styles.ProfileLabel htmlFor="edit-profile">
            <Icon icon="icon/edit-solid" color="white" size={16} />
          </Styles.ProfileLabel>
        </Styles.ProfileAvatar>
        {avatarImg ? (
          <Avatar size="lg" alt="" src={avatarImg} />
        ) : (
          <Icon icon="icon/account-solid" color="neutralGray500" size={40} />
        )}
      </Styles.AvatarWrapper>
      <Styles.ProfileInfo>
        <Styles.Name>{user?.user_name}</Styles.Name>
        <Styles.Email>{user?.user_email}</Styles.Email>
      </Styles.ProfileInfo>
    </Styles.Profile>
  )
}
