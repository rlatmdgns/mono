import styled from 'styled-components'

export const Wrapper = styled.div`
  flex-shrink: 0;
  width: 412px;
  border-left: 1px solid ${(props) => props.theme.colors.neutralGray100};
  padding: 16px;

  & > div {
    height: 100%;
  }
`
