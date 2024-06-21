import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 24px 16px;
`

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[16]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
`
