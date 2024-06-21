import styled from 'styled-components'

export const Wrapper = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${(props) => props.theme.colors.red500};
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  margin-top: 8px;
`
