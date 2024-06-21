export interface PostingMember {
  identification: string
  user_authority?: string
  user_email?: string
  user_me?: number
  user_name: string
  user_profile: string
  disabled?: boolean
  user_department?: string
  user_job?: string
  is_google_connect?: boolean
}

export interface AvatarMultipleProps {
  members: PostingMember[]
  size?: 'sm'
}
