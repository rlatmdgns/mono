import styled from 'styled-components'

export const PaymentExpiredContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.neutralGray100};
`

export const Wrapper = styled.div``
export const Logo = styled.div`
  height: 40px;
  margin: 0 auto 40px;
  position: relative;
`
export const ExpiredBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1042px;
  height: 584px;
  padding: 68px 220px;
  justify-content: center;
  text-align: center;
  background: ${(props) => props.theme.colors.white};

  ${(props) => `${props.theme.breakpoints.mobile} and (max-width: 1200px)`} {
    width: 80%;
    margin: 0 auto;
    padding: 10% 5%;

    button {
      width: 130px;
    }
  }
`

export const LineBreak = styled.br``

export const Title = styled.h1`
  flex: 1 1 100%;
  ${(props) => props.theme.fonts[28]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`

export const DescBox = styled.div`
  flex: 1 1 100%;
  display: flex;
  margin: 64px auto;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
`

export const Paragraph = styled.div`
  flex: 1 1 100%;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  word-break: keep-all;
`
export const Link = styled.a`
  color: ${(props) => props.theme.colors.blue500};
`
