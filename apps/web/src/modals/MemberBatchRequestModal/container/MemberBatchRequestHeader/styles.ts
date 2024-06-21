import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 16px;
`

export const Title = styled.h3`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Close = styled.button``
