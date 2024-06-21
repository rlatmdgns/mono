import Image from 'next/image'
import * as Styles from './styles'
import { useRecoilValue } from 'recoil'
import { GuideDetailInfoAtom } from '@/features/Guide/recoil/atom'
import { Guides } from '@/features/Guide/Guide.interface'

const GuideContentImages = () => {
  const guideDetail = useRecoilValue<Guides>(GuideDetailInfoAtom)

  if (!guideDetail.images) {
    return
  }

  return guideDetail.images.map((image: string, imageIndex: number) => (
    <Styles.GuideImage key={`step_${imageIndex}`} $imageIndex={imageIndex}>
      <Image src={image} fill={true} alt="지원자 추가" />
    </Styles.GuideImage>
  ))
}

export default GuideContentImages
