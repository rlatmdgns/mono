'use client'

import Image from 'next/image'
import { FONT_SIZE_OPTIONS, SIZE_OPTIONS } from './Avatar.constants'
import { AvatarProps } from './Avatar.interface'
import * as Styles from './styles'

export const Avatar = ({ size = 'md', alt = 'avatar', src, isBorder, disabled }: AvatarProps) => {
  const isImage = !src?.includes('rgb')

  const firstName = alt?.charAt(0)
  const sizeToUse = SIZE_OPTIONS[size]
  const fontSize = FONT_SIZE_OPTIONS[size]

  if (!isImage) {
    return (
      <Styles.Wrapper
        $size={sizeToUse}
        $fontSize={fontSize}
        $isBorder={isBorder}
        $background={src}
        $disabled={disabled}
      >
        {firstName}
      </Styles.Wrapper>
    )
  }
  return (
    <Styles.Wrapper $size={sizeToUse} $isBorder={isBorder} $disabled={disabled}>
      <Image src={src} width={sizeToUse} height={sizeToUse} alt={alt} priority />
    </Styles.Wrapper>
  )
}
