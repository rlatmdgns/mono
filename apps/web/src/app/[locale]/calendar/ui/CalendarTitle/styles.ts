import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  ${(props) => props.theme.title[18]}
  color: ${(props) => props.theme.colors.neutralGray800};
`
