import styled from 'styled-components'
import Image from 'next/image'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`
export const Container = styled.div`
  width: 504px;
  margin: 0 auto;
  text-align: center;
`

export const Logo = styled(Image)`
  margin-bottom: 20px;
`

export const Title = styled.h2`
  ${(props) => props.theme.fonts[28]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Description = styled.p`
  margin: 12px 0 0 0;
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Email = styled.em`
  font-style: normal;
  color: ${(props) => props.theme.colors.blue500};
`
export const PhrasesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  border-top: 1px solid #e8e8e8;
`
export const Phrases = styled.p`
  margin: 20px 0 16px;
  color: ${(props) => props.theme.colors.neutralGray500};
`
export const ButtonBox = styled.div`
  width: 184px;
  margin: 0 auto;
`
