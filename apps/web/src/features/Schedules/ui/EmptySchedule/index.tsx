import * as Styles from './styles'
import { IMAGES } from '@/shared/constants'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { Icon } from '@repo/ui'

export const EmptySchedule = ({ isEmpty }: { isEmpty: boolean }) => {
  const currentLocale = useLocale()
  if (!isEmpty) return

  const getEmptyText = () => {
    if (currentLocale !== 'ko') {
      return <>Click and drag to set the interview time.</>
    }
    return (
      <>
        클릭, 드래그해서
        <Styles.Br />
        면접시간을 지정해 보세요.
      </>
    )
  }

  return (
    <Styles.Wrap>
      <Styles.EmptyInfo>
        <Styles.ImageWrap>
          <Styles.AddBlock>
            <Icon icon="icon/add-solid" color="blue500" />
          </Styles.AddBlock>
          <Image src={IMAGES.INTERVIEW_GUIDE} fill={true} alt="" sizes={'100%'} />
          <Styles.Cursor>
            <Icon icon="icon/cursor-solid" color="neutralGray800" size={20} />
          </Styles.Cursor>
        </Styles.ImageWrap>
        <Styles.Text>{getEmptyText()}</Styles.Text>
      </Styles.EmptyInfo>
    </Styles.Wrap>
  )
}
