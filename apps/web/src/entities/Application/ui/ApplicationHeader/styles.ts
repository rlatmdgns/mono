import styled from 'styled-components'

export const Header = styled.div`
  padding: 32px 0 24px;
`

export const Title = styled.h1`
  ${(props) => props.theme.fonts[28]};
  line-height: 48px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Posting = styled.p`
  ${(props) => props.theme.fonts[16]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray600};
  margin-top: 12px;
`
