import styled from 'styled-components'

export const Content = styled.p`
  display: flex;
  gap: 4px;
  align-items: center;
  ${(props) => props.theme.fonts[14]};
  color: ${(props) => props.theme.colors.neutralGray500};
`

export const Channel = styled.em`
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
