import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 24px;
`

export const Title = styled.p`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
