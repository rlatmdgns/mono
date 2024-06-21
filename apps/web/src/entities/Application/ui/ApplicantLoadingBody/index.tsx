'use client'
import * as Styles from './styles'
import Skeleton from 'react-loading-skeleton'

export const ApplicantLoadingBody = () => {
  return (
    <Styles.Body>
      <Styles.Wrapper>
        <Styles.Title>항목 추가</Styles.Title>
        <Styles.Inner>
          <Skeleton height={20} />
          <Styles.List>
            <Skeleton height={'100%'} />
          </Styles.List>
        </Styles.Inner>
        <Styles.FormWrapper>
          <Styles.Header>
            <Styles.Title>지원서 작성하기</Styles.Title>
            <Skeleton height={20} />
          </Styles.Header>
          <Styles.Form>
            <Skeleton />
          </Styles.Form>
        </Styles.FormWrapper>
      </Styles.Wrapper>
    </Styles.Body>
  )
}
