'use client'

import { useFileUpload } from '@/shared/hooks/useFileUpload'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { ALLOWED_PROFILE_TYPES } from '../../constants'
import { Icon } from '@repo/ui'
import { Toast } from '@/shared/ui'
import Image from 'next/image'
import * as Styles from './styles'

export const ProfileInput = () => {
  const [profile, setProfile] = useState('')
  const { setValue } = useFormContext()
  const { fileUpload } = useFileUpload()

  const handleUploadProfile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return

    const selectedFile = event.target.files[0]

    if (!ALLOWED_PROFILE_TYPES.includes(selectedFile.type)) {
      return Toast.warning('JPG, JPEG, PNG 형식의 파일만 업로드할 수 있습니다.')
    }

    if (selectedFile?.size > 1024 * 1024) {
      return Toast.warning('이미지 크기는 1MB 이하여야 합니다.')
    }

    const { url, file_name } = await fileUpload(event.target.files[0])
    setProfile(url)
    setValue('profile_image', file_name)
  }

  const handleRemoveProfile = () => {
    setProfile('')
    setValue('profile_image', null)
    Toast.success('사진이 삭제되었습니다.')
  }

  return (
    <Styles.Wrapper>
      <Styles.ProfileWrapper>
        {!profile && (
          <Styles.NoProfile>
            <Icon icon="icon/person-solid" size={47} color="neutralGray300" />
            <Styles.ProfileDesc>
              JPG, JPEG, PNG
              <br />
              (160px * 200px 최대 1MB)
            </Styles.ProfileDesc>
          </Styles.NoProfile>
        )}
        {!!profile && <Image src={profile} alt="" fill />}
        <Styles.ProfileInput
          type="file"
          id="profile_upload"
          accept=".jpg, .jpeg, .png"
          onChange={handleUploadProfile}
        />
        {!!profile && (
          <Styles.RemoveButton onClick={handleRemoveProfile} type="button">
            <Icon icon="icon/cancle-solid" color="neutralGray900" />
          </Styles.RemoveButton>
        )}
      </Styles.ProfileWrapper>
      <Styles.ProfileLabel htmlFor="profile_upload">이미지 업로드</Styles.ProfileLabel>
    </Styles.Wrapper>
  )
}
