import Image from 'next/image'
import styled from 'styled-components'

export const Logo = styled(Image)`
  margin-bottom: 12px;
`

export const Copy = styled.div`
  margin-bottom: 60px;
  width: 232px;
  text-align: center;
  word-break: keep-all;
  ${(props) => props.theme.fonts[20]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
