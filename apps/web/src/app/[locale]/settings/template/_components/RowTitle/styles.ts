import styled from 'styled-components'

export const RowTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 36px;
  color: ${(props) => props.theme.colors.neutralGray400};
  height: 44px;
  padding: 14px 8px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
  ${(props) => props.theme.title[14]};
`
