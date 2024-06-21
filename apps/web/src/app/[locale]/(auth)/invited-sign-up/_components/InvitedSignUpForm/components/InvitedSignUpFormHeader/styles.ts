import Image from 'next/image'
import styled from 'styled-components'

export const Logo = styled(Image)``

export const Title = styled.h1`
  margin-top: 16px;
  ${(props) => props.theme.fonts[26]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const TitleBold = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.bold};
`
