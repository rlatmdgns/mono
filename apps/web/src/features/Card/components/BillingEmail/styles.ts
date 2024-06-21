import styled from 'styled-components'

export const Email = styled.div``

export const EmailTitle = styled.p`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`

export const ExpiredText = styled.p`
  margin: 10px 0;
  ${(props) => props.theme.fonts[14]};

  a {
    margin-left: 4px;
    color: ${(props) => props.theme.colors.blue500};
  }
`

export const Required = styled.span`
  color: ${(props) => props.theme.colors.red500};
`
