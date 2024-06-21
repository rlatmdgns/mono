'use client'

import * as Styles from './styles'
import sendPasswordResetMail from '@/services/auth/sendPasswordResetMail'
import { IMAGES } from '@/shared/constants'
import { Button } from '@/shared/ui'

interface ConfirmationProps {
  email: string
}

const Confirmation = ({ email }: ConfirmationProps) => {
  const handleClick = async () => {
    await sendPasswordResetMail({
      user_email: email,
    })
  }

  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.Logo src={IMAGES.MAIL_OPEN_64_BLUE} width={64} height={64} alt="이메일 확인" />
        <Styles.Title>메일을 확인해주세요.</Styles.Title>
        <Styles.Description>
          <Styles.Email>{`"${email}"`}</Styles.Email>로 <br /> 비밀번호 재 설정 메일을 발송했습니다.
        </Styles.Description>

        <Styles.PhrasesWrapper>
          <Styles.Phrases>
            인증 메일이 오지 않았나요?
            <br />
            스팸을 확인하거나 재전송 요청을 해보세요.
          </Styles.Phrases>
          <Styles.ButtonBox>
            <Button
              state="standard"
              style="fill-weak"
              text="인증 메일 재전송"
              onClick={handleClick}
            />
          </Styles.ButtonBox>
        </Styles.PhrasesWrapper>
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default Confirmation
