import styled from 'styled-components'

export const Footer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding: 16px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};
  ${(props) => props.theme.title[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`
