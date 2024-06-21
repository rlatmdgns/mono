import React from 'react'
import * as Styles from './styles'
import { useMailItemConstants } from '@/app/[locale]/mail/_components/MailItem/hooks/useMailItemConstants'
import { useRouter, useSearchParams } from 'next/navigation'
import { PAGE } from '@/shared/constants'
import { useRecoilValue } from 'recoil'
import { isMailDeleteAtom } from '@/app/[locale]/mail/_recoil/atom'
import useMailIds from '@/app/[locale]/mail/_hooks/useMailIds'
import { CheckBoxIcon } from '@/shared/ui'

interface MailItemProps {
  id: number
  type: string
  name: string
  date: string
  subject: string
  typeIndex: number
  isSelected?: boolean
  isRead: boolean
}

const MailItem = ({
  id,
  type,
  name,
  subject,
  typeIndex,
  date,
  isSelected,
  isRead,
}: MailItemProps) => {
  const { isChecked, handleClick } = useMailIds()
  const isDelete = useRecoilValue(isMailDeleteAtom)
  const router = useRouter()
  const searchParams = useSearchParams()
  const { INBOX_CONTENT, SENT_CONTENT } = useMailItemConstants()

  const page = searchParams?.get('page') || '1'
  const getContent = () => {
    if (type === 'sent') {
      return SENT_CONTENT[typeIndex]
    }
    return INBOX_CONTENT[typeIndex]
  }

  const handleRoute = () => {
    if (isSelected) {
      return router.replace(`${PAGE.MAIL}/${type}?page=${page}`, {
        scroll: false,
      })
    }
    router.push(`${PAGE.MAIL}/${type}?page=${page}&id=${id}`, { scroll: false })
  }

  const handleCheck = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    handleClick(id)
  }

  return (
    <Styles.Wrapper>
      <Styles.InnerWrap
        $isSelected={isSelected}
        $isRead={isRead}
        $isDelete={isDelete}
        onClick={handleRoute}
      >
        {isDelete && (
          <Styles.CheckBox onClick={handleCheck}>
            <CheckBoxIcon checked={isChecked(id)} />
          </Styles.CheckBox>
        )}
        <Styles.Container>
          <Styles.Header>
            {name}
            <Styles.Date>{date}</Styles.Date>
          </Styles.Header>
          <Styles.Subject>{subject}</Styles.Subject>
          <Styles.Content>{getContent()}</Styles.Content>
        </Styles.Container>
      </Styles.InnerWrap>
    </Styles.Wrapper>
  )
}

export default MailItem
