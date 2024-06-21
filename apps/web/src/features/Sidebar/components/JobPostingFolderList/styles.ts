import styled from 'styled-components'

export const Wrapper = styled.div`
  width: calc(100% - 16px);
  margin: 0 auto;
  color: ${(props) => props.theme.colors.neutralGray700};
  ${(props) => props.theme.fonts[14]};
`
