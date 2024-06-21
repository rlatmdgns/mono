import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 10px 8px 0;
  padding: 10px 0;
  overflow: auto;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};
  color: ${(props) => props.theme.colors.neutralGray700};
  ${(props) => props.theme.fonts[14]};
`

export const Content = styled.div``

export const Empty = styled.span`
  margin-top: 8px;
`
