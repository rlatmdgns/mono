import Image from 'next/image'
import * as Styles from './styles'
import { useEffect, useState } from 'react'
import { SIGNUP_IMAGES } from '@/shared/constants'

const SignUpImage = () => {
  const [image, setImage] = useState<string[]>([])

  useEffect(() => {
    setImage(SIGNUP_IMAGES.PROCESS)
  }, [])
  return (
    <Styles.Wrapper>
      <Styles.TitleWrapper>
        <Image src={SIGNUP_IMAGES.TITLE} alt="signup preview" fill objectFit={'contain'} />
      </Styles.TitleWrapper>

      <Styles.ProcessWrapper>
        {image.map((img, index) => {
          return (
            <Styles.ProcessImg key={`process_${index}`} $process_step={index}>
              <Image src={img} alt="signup preview" fill objectFit={'contain'} />
            </Styles.ProcessImg>
          )
        })}
      </Styles.ProcessWrapper>
      <Styles.BgWrapper>
        <Image src={SIGNUP_IMAGES.CIRCLE} alt="signup preview" fill objectFit={'contain'} />
      </Styles.BgWrapper>
      <Styles.ServiceWrapper>
        <Image src={SIGNUP_IMAGES.SERVICE_IMG} alt="signup preview" fill objectFit={'contain'} />
        <Styles.CardWrapper>
          <Image src={SIGNUP_IMAGES.CARD} alt="signup preview" fill objectFit={'contain'} />
          <Styles.CursorWrapper>
            <Image src={SIGNUP_IMAGES.CURSOR} alt="signup preview" fill objectFit={'contain'} />
          </Styles.CursorWrapper>
        </Styles.CardWrapper>
      </Styles.ServiceWrapper>
    </Styles.Wrapper>
  )
}

export default SignUpImage
