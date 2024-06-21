import { IMAGES } from '@/shared/constants'
import { Icon } from '@repo/ui'
import Image from 'next/image'

export const getExpireScheduleHeaderInfo = (status: boolean) => {
  if (!status) {
    return {
      icon: <Icon icon="icon/warning-solid" color="orange500" size={64} />,
      title: (
        <>
          면접 일정을 거절하였거나
          <br /> 만료된 페이지입니다.
        </>
      ),
    }
  }

  return {
    icon: <Image src={IMAGES.SADNESS} width={64} height={64} alt="" />,
    title: '함께하지 못해서 아쉬워요',
  }
}
