import styled from 'styled-components'
import Image from 'next/image'

export const Text = styled.div`
  color: ${(props) => props.theme.colors.neutralGray900};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  word-break: keep-all;
`

export const SkeletonImage = styled(Image)`
  border-radius: 8px;
`
