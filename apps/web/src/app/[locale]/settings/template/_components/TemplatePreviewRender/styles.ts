import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 590px;
  overflow: auto;
  height: calc(100vh - 58px);
  border-left: 1px solid ${(props) => props.theme.colors.neutralGray200};
`
