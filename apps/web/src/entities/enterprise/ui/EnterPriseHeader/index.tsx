import React from 'react'
import { Header, Info, Logo, Title } from '@/entities/enterprise/ui/EnterPriseHeader/styles.css'
import Image from 'next/image'
import { Badge } from '@/shared/ui'

interface EnterPriseHeaderProps {
  image?: string
  title?: string
}

export const EnterPriseHeader = ({ image, title }: EnterPriseHeaderProps) => {
  return (
    <div className={Header}>
      <div className={Info}>
        <div className={Logo}>
          {image && (
            <Image src={image} alt={''} width={26} height={26} style={{ objectFit: 'cover' }} />
          )}
        </div>
        <span className={Title}>{title}</span>
        <Badge text="OMS" type="gray" />
      </div>
    </div>
  )
}
